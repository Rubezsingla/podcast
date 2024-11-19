import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    // Handle login
    const handleLogin = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const response = await axios.post('http://localhost:5000/auth/login', {
                email,
                password,
            });

            if (response.data.success) {
                // Store token and user info
                localStorage.setItem('token', response.data.jwtToken); // Store JWT token
                localStorage.setItem('user', response.data.name); // Store user name

                // Success message
                toast.success(response.data.message);

                // Redirect to home page after 1 second
                setTimeout(() => {
                    navigate('/home');
                }, 1000);
            } else {
                toast.error(response.data.message);
            }
        } catch (err) {
            toast.error('Login failed. Please check your credentials.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="login-container">
            <h2>Login</h2>
            <form onSubmit={handleLogin}>
                <div>
                    <label>Email:</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Password:</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit" disabled={loading}>
                    {loading ? 'Logging in...' : 'Login'}
                </button>
            </form>
            <ToastContainer />
        </div>
    );
};

export default Login;
