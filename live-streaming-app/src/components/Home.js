import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
    return (
        <div className="home">
            <div className="hero">
                <div className="hero-content">
                    <h1>Create, Stream, and Connect</h1>
                    <p>
                        The ultimate live-streaming platform for creators to share their stories and build a global audience.
                    </p>
                    <Link to="/streaming" className="cta-button">
                        Start Streaming Now
                    </Link>
                </div>

                <div className="hero-video">
                    <video
                        width="100%"
                        height="auto"
                        controls
                        loop
                        muted
                        autoPlay
                    >
                        <source
                            src="images/podcast.mp4"
                            type="video/mp4"
                        />
                        Your browser does not support the video tag.
                    </video>
                </div>
            </div>

            {/* <div className="moving-div-container"> */}
  <div className="moving-div">
    <p>🎙️ Seamless Live Streaming</p>
    <p>🎥 High-Quality Video Calling</p>
    <p>📡 Broadcast to YouTube Instantly</p>
    <p>🌟 Engage with Your Audience</p>
    <p>✨ Built for Creators, by Creators</p>
  </div>
{/* </div> */}


<div className="features">
  <h2>What We Offer</h2>
  <div className="features-grid">
    <div className="feature">
      <video width="100%" height="auto" controls loop muted autoPlay>
        <source src="images/Blue & Purple Gaming Live Streaming Instagram Story.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <h3>Live Streaming</h3>
      <p>Go live and connect with your audience in real-time.</p>
    </div>
    <div className="feature">
      <video width="100%" height="auto" controls loop muted autoPlay>
        <source src="images/Green and Purple Gradient Call Center Company Mobile Video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <h3>Video Calling</h3>
      <p>Invite guests and collaborate during live streams.</p>
    </div>
    <div className="feature">
      <video width="100%" height="auto" controls loop muted autoPlay>
        <source src="images/Grey & White Modern Live Podcast Announcement Instagram Story.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <h3>YouTube Podcast</h3>
      <p>Broadcast directly to YouTube with FFmpeg and RTMP.</p>
    </div>
  </div>
</div>


            <div className="about">
                <h2>About Streamify</h2>
                <p>
                    At Streamify, we believe in empowering creators with seamless live-streaming tools to bring their vision to life. Our platform is designed to deliver professional-quality streams without the complexity.
                </p>
                <Link to="/about" className="secondary-button">
                    Learn More
                </Link>
            </div>

            <div className="contact">
                <h2>Get in Touch</h2>
                <p>Have questions or need support? We’re here to help!</p>
                <Link to="/contact" className="cta-button">
                    Contact Us
                </Link>
            </div>
        </div>
        
    );
};

export default Home;
