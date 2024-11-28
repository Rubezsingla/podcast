// src/components/Signup.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Used for navigating to another page
import axios from 'axios';  // Import axios

const Signup = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('taker'); // Default is 'taker'
    const [isFormValid, setIsFormValid] = useState(true);  // For checking form validity
    const [loading, setLoading] = useState(false);  // For showing loading state
    const navigate = useNavigate();  // For redirecting to login after successful signup

    const handleSubmit = async (e) => {
        e.preventDefault();  // Prevent form submission from refreshing the page

        // Validate form fields
        if (!username || !password) {
            setIsFormValid(false);  // Set form invalid if fields are empty
            return;
        }

        try {
            setLoading(true);  // Start loading when the form is submitted

            // Sending signup data to backend using axios
            const response = await axios.post('http://localhost:5000/api/auth/signup', {
                username,
                password,
                role,
            });

            // If signup is successful (status 201), navigate to login page
            if (response.status === 201) {
                navigate('/login');
            }

        } catch (error) {
            setLoading(false);  // Stop loading after request completes
            if (error.response) {
                // Display server-side error message if any
                alert(error.response.data.message);
            } else {
                // Display generic server error if response is not available
                alert('Server error during signup');
            }
        } finally {
            setLoading(false);  // Stop loading once the request is done
        }
    };

    return (
        <div>
            <h2>Signup</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Username</label>
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}  // Update username state
                    />
                </div>
                <div>
                    <label>Password</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}  // Update password state
                    />
                </div>
                <div>
                    <label>Role</label>
                    <select value={role} onChange={(e) => setRole(e.target.value)}>  // Update role state
                        <option value="taker">Podcast Taker</option>
                        <option value="giver">Podcast Giver</option>
                    </select>
                </div>
                {!isFormValid && <p style={{ color: 'red' }}>Please fill in all fields</p>}
                <button type="submit" disabled={loading}>Sign Up</button>  {/* Disable button when loading */}
                {loading && <p>Loading...</p>}  {/* Show loading text */}
            </form>
        </div>
    );
};

export default Signup;
