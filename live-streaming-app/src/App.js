// src/App.js
import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import StreamingRoom from "./components/StreamingRoom";
import Login from "./components/Login"; // Import Login component
import Signup from "./components/Signup"; // Import Signup component
import HomePage from "./pages/home"; // ZEGOCLOUD's HomePage
import RoomPage from "./pages/room"; // ZEGOCLOUD's RoomPage

// Protected Route Component
const ProtectedRoute = ({ element }) => {
    const isLoggedIn = localStorage.getItem('token');  // Check if token exists in localStorage
    return isLoggedIn ? element : <Navigate to="/login" />;  // Redirect to login if not logged in
};

const App = () => {
    return (
        <>
            <Header />
            <Routes>
                {/* Login Route */}
                <Route path="/" element={<Login />} />
                <Route path="login" element={<Login />} />

                {/* Signup Route */}
                <Route path="/signup" element={<Signup />} />

                {/* Protected Routes */}
                <Route path="/home" element={<ProtectedRoute element={<Home />} />} />
                <Route path="/about" element={<ProtectedRoute element={<About />} />} />
                <Route path="/streaming" element={<ProtectedRoute element={<StreamingRoom />} />} />

                {/* Public Routes */}
                <Route path="/contact" element={<Contact />} />

                {/* ZEGOCLOUD Routes */}
                <Route path="/zego" element={<HomePage />} />
                <Route path="/room/:roomId" element={<RoomPage />} />

                {/* Redirect if route doesn't exist */}
                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
        </>
    );
};

export default App;
