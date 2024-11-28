// src/components/Login.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isLoginFailed, setIsLoginFailed] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('http://localhost:5000/api/auth/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ username, password }),
            });

            const data = await response.json();
            if (response.ok) {
                // Save the JWT token
                localStorage.setItem('token', data.token);

                // Navigate based on role
                if (data.role === 'giver') {
                    navigate('/contact'); // Redirect to podcast giver's page
                } else {
                    navigate('/home'); // Redirect to podcast taker's page
                }
            } else {
                setIsLoginFailed(true);
            }
        } catch (error) {
            setIsLoginFailed(true);
        }
    };

    return (
        <div>
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Username</label>
                    <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
                </div>
                <div>
                    <label>Password</label>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                {isLoginFailed && <p style={{ color: 'red' }}>Invalid credentials</p>}
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default Login;
