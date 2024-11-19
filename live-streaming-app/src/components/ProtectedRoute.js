// src/components/ProtectedRoute.js
import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ element }) => {
    const isLoggedIn = localStorage.getItem('token');  // Check if token exists in localStorage
    console.log("Is logged in?", isLoggedIn);  // For debugging, check token status
    return isLoggedIn ? element : <Navigate to="/login" />;  // If not logged in, redirect to login
};

export default ProtectedRoute;
