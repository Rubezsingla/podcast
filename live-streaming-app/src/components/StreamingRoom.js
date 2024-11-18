// import React from "react";
// import { motion } from "framer-motion";
// import "./StreamingRoom.css";

// const StreamingRoom = () => {
//     return (
//         <div className="streaming-room">
//             <motion.div
//                 className="streaming-box"
//                 initial={{ opacity: 0, scale: 0.8 }}
//                 animate={{ opacity: 1, scale: 1 }}
//                 transition={{ duration: 0.8 }}
//             >
//                 <h2>Streaming Room</h2>
//                 <p>Connect with guests and go live!</p>
//                 <motion.button
//                     className="start-button"
//                     whileHover={{ scale: 1.1, boxShadow: "0px 0px 0px rgb(255,255,255)" }}
//                     whileTap={{ scale: 0.9 }}
//                 >
//                     Start Video Call
//                 </motion.button>
//             </motion.div>
//         </div>
//     );
// };

// export default StreamingRoom;

import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import "./StreamingRoom.css";

const StreamingRoom = () => {
    const navigate = useNavigate();

    const handleStartCall = () => {
        navigate("/zego"); // Navigate to ZEGOCLOUD's HomePage
    };

    return (
        <div className="streaming-room">
            <motion.div
                className="streaming-box"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
            >
                <h2>Streaming Room</h2>
                <p>Connect with guests and go live!</p>
                <motion.button
                    className="start-button"
                    whileHover={{ scale: 1.1, boxShadow: "0px 0px 0px rgb(255,255,255)" }}
                    whileTap={{ scale: 0.9 }}
                    onClick={handleStartCall}
                >
                    Start Video Call
                </motion.button>
            </motion.div>
        </div>
    );
};

export default StreamingRoom;
