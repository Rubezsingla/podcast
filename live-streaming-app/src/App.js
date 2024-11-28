import React, { useEffect, useState } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import StreamingRoom from "./components/StreamingRoom";
import HomePage from "./pages/home"; // ZEGOCLOUD's HomePage
import RoomPage from "./pages/room"; // ZEGOCLOUD's RoomPage
import Login from "./components/Login";
import Signup from "./components/Signup";
import { useAuth } from "./hooks/useAuth"; // Custom hook for managing auth state

const App = () => {
  const { user, login, logout, checkAuth } = useAuth(); // Custom hook to manage user state (login, logout, etc.)
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check if the user is authenticated when the app loads
    checkAuth()
      .then(() => setIsLoading(false))
      .catch(() => setIsLoading(false));
  }, [checkAuth]);

  // If the app is loading, we can display a loading spinner or return null
  if (isLoading) {
    return <div>Loading...</div>;
  }

  // Redirect based on user role (if logged in)
  const privateRoute = (element, allowedRoles) => {
    if (!user) {
      return <Navigate to="/login" />;
    }
    if (allowedRoles && !allowedRoles.includes(user.role)) {
      return <Navigate to="/" />;
    }
    return element;
  };

  return (
    <>
      <Header user={user} logout={logout} />
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/streaming" element={privateRoute(<StreamingRoom />, ["giver", "taker"])} />

        {/* Authentication Routes */}
        <Route path="/login" element={<Login onLogin={login} />} />
        <Route path="/signup" element={<Signup />} />

        {/* ZEGOCLOUD Routes */}
        <Route path="/zego" element={privateRoute(<HomePage />, ["giver", "taker"])} />
        <Route path="/room/:roomId" element={privateRoute(<RoomPage />, ["giver", "taker"])} />

        {/* Redirect if route doesn't exist */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
};

export default App;
