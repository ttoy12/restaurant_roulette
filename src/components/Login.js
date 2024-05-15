import React, { useState } from 'react';
import axios from 'axios';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [showLoginFields, setShowLoginFields] = useState(false);

    const handleLogin = async (e) => {
        e.preventDefault(); // Prevent form from submitting traditionally
        try {
            const response = await axios.post('http://localhost:3000/v0/login', {
                email: email,
                password: password
            });
            const token = response.data.token;
            // Save the token in localStorage or context/state for further requests
            localStorage.setItem('authToken', token);
            // Redirect or change the state of your app
            console.log('Login successful', token);
        } catch (err) {
            if (err.response) {
                // The server responded with a status other than 200 range
                setError(err.response.data.message);
            } else {
                setError("The login request failed!");
            }
        }
    };
    const handleLoginClick = () => {
        setShowLoginFields(true);  // Show the text boxes when login is clicked
      };

    return (
    <div>
      {!showLoginFields && (
        <button onClick={handleLoginClick}>Login</button>
      )}
      {showLoginFields && (
        <div>
            <form onSubmit={handleLogin}>
                    <label>Email:</label>
                    <input 
                        type="email" 
                        value={email} 
                        onChange={e => setEmail(e.target.value)} 
                    />
                    <label>Password:</label>
                    <input 
                        type="password" 
                        value={password} 
                        onChange={e => setPassword(e.target.value)}
                    />
                    <button type="submit">Login</button>
                </form>
                {error && <p>{error}</p>}
        </div>
      )}
      </div>);
}

export default Login;
