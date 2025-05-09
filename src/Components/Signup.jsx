import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaUser, FaEnvelope, FaLock } from "react-icons/fa";
import Navbar from "./Navbar";
import '../assets/Style/Signup.css';

function Signup() {
    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSignup = (e) => {
        e.preventDefault();
        if (!username || !email || !password) {
            toast.error("All fields are required!");
            return;
        }

        axios.post("http://localhost:8080/public/signup", {
            username,
            email,
            password,
        })
            .then((res) => {
                toast.success("Account created!");
                setTimeout(() => navigate("/login"), 1500);
            })
            .catch((err) => {
                console.error(err);
                toast.error("Signup failed. Try again.");
            });
    };

    return (
        <>
            <Navbar />
            <div className="signup-container">
                <div className="overlay"></div>

                <div className="form-wrapper">
                    <h2 className="form-title">Sign Up</h2>
                    <form onSubmit={handleSignup}>
                        <div className="input-box">
                            <FaUser className="icon" />
                            <input
                                type="text"
                                placeholder="Username"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                            />
                        </div>

                        <div className="input-box">
                            <FaEnvelope className="icon" />
                            <input
                                type="email"
                                placeholder="Email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>

                        <div className="input-box">
                            <FaLock className="icon" />
                            <input
                                type="password"
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>

                        <button type="submit" className="submit-button">
                            Create Account
                        </button>

                        <div className="form-footer">
                            Already have an account? <Link to="/login">Login</Link>
                        </div>
                    </form>
                </div>
                <ToastContainer />
            </div>
        </>
    );
}

export default Signup;
