import React from "react";
import Navbar from "./Navbar";
import "../assets/Style/About.css";

function About() {
  return (
    <>
      <Navbar />
      <div className="about-container">
        <div className="overlay"></div>
        <div className="about-content">
          <h1>About Our Platform</h1>
          <p>
            Welcome to our platform — a place where students and educators can connect seamlessly.
            We offer assignment submission, tracking, and interactive feedback all in one space.
          </p>
          <p>
            Our mission is to simplify academic workflows with clean UI, fast access, and modern features.
            Designed with care to give you the best user experience possible.
          </p>
        </div>
      </div>
    </>
  );
}

export default About;
