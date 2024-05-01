
require('dotenv').config();
const port = process.env.PORT || 3010;
const app = require('./app.js');

app.listen(port,()=>{
    console.log(`Server is running on http://localhost:${port}`);
});