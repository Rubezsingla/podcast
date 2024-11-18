// import React from "react";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Header from "./components/Header";
// import Home from "./components/Home";
// import About from "./components/About";
// import Contact from "./components/Contact";
// import StreamingRoom from "./components/StreamingRoom";

// const App = () => {
//     return (
//         <Router>
//             <Header />
//             <Routes>
//                 <Route path="/" element={<Home />} />
//                 <Route path="/about" element={<About />} />
//                 <Route path="/contact" element={<Contact />} />
//                 <Route path="/streaming" element={<StreamingRoom />} />
//             </Routes>
//         </Router>
//     );
// };

// export default App;

// import React from "react";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import VideoCall from './components/VideoCall';
// import Header from "./components/Header";
// import Home from "./components/Home";
// import About from "./components/About";
// import Contact from "./components/Contact";
// import StreamingRoom from "./components/StreamingRoom";
// import LiveRoom from "./components/LiveRoom";

// const App = () => {
//   return (
//     <Router>
//       <Header />
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/contact" element={<Contact />} />
//         <Route path="/streaming" element={<StreamingRoom />} />
//         <Route path="/live-room" element={<LiveRoom />} />
//       </Routes>
//     </Router>
//   );
// };

// export default App;


import React from "react";
import { Route, Routes } from "react-router-dom";
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
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/streaming" element={<StreamingRoom />} />
                {/* ZEGOCLOUD Routes */}
                <Route path="/zego" element={<HomePage />} />
                <Route path="/room/:roomId" element={<RoomPage />} />
            </Routes>
        </>
    );
};

export default App;
