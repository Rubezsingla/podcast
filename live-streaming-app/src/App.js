// In App.js
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';  // Import Login correctly

import Header from './components/Header';
import Home from './components/Home'; 
import About from './components/About';  // Corrected the folder name


function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/Login" element={<Login />} /> {/* Route for Login */}
      </Routes>
    </Router>
  );
}

export default App;
