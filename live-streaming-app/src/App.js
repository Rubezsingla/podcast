// src/App.js
import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import StreamingRoom from "./components/StreamingRoom";
import HomePage from "./pages/home"; // ZEGOCLOUD's HomePage
import RoomPage from "./pages/room"; // ZEGOCLOUD's RoomPage

const App = () => {
    return (
        <>
            <Header />
            <Routes>
                {/* Public Routes */}
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/streaming" element={<StreamingRoom />} />

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
