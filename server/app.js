const path = require('path');
require('dotenv').config();

//starting the server using express
const express = require("express");

//password encryption 
const bcrypt = require("bcrypt");
//??
const {Pool} = require("pg");
//jwt tokens timouts 
const jwt = require("jsonwebtoken");
const cors = require('cors');


const app = express();

app.use(cors());
app.use(express.json());

const pool = new Pool({
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    database: process.env.DB_NAME
});

app.post("v0/register", async (req, res)=>{
    try {
        const {username, email, password} = req.body;
        const hashedPassword = await bcrypt.hash(password,10);

        const result = await pool.query(
            "INSERT INTO users (username,email, password) VALUES ($1, $2, $3) RETURNING *",
            [username, email, hashedPassword]
        );
        res.status(201).json(result.rows[0]);
    } catch(error){
        console.error(error.message);
        res.status(500).send("server error");
    }
})
app.post("v0/login", async (req, res)=>{
    try{
        const {email, password} = req.body;
        const result = await pool.query("SELECT * FROM users WHERE email = $1",[email]);
        const user = result.rows[0];
        if(!user){
            return res.status(400).json({message:"something was incorrect"});
        }
        const isPasswordMatch = await bcrypt.compare(password,user.password);
        if(!isPasswordMatch){
            return res.status(400).json({message: "Invalid Credentials"});
        }
        const token = jwt.sign({userId: user.id}, process.env.SECRET_KEY,{
            expiresIn: '1h'
        })
        res.json({token});
    } catch(error){
        console.error(error.message);
        res.status(500).send("Server_Error")
    }
})

//Middleware to verify JWT token 
function verifyToken(req,res,next){
    const token = req.headers.authorization && req.headers.authorization.split(" ")[1];
    if(!token){
        return res.status(401).json({message:"MISSING TOKEN"});
    }
    try{
        const decoded = jwt.verify(token,process.env.SECRET_KEY);
        req.user = decoded;
        next();
    }catch(err){
        console.error("token verification failed:",err.message);
        res.send(401).json({message:"Invalid token"});
    }

}
app.get("v0/userinfo",verifyToken,(req,res)=>{
    res.json({user:req.user});
});

module.exports = app;