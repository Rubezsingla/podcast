import React from "react";
import "./About.css";

const About = () => {
    return (
        <div className="about">
            <h1>About Us</h1>
            <p>
                Streamify is a cutting-edge platform dedicated to empowering creators to live-stream their content and connect with a global audience.
            </p>
            <video className="about-video" controls>
                <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </div>
    );
};

export default About;
