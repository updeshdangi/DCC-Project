import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { toast, ToastContainer } from "react-toastify";
import { Cookies } from 'react-cookie';
import { FaUser, FaLock } from "react-icons/fa";
import Navbar from "./Navbar";
import '../assets/Style/Login.css'; // ⬅️ use this instead of Signup.css

function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const cookies = new Cookies();

    const handleLogin = (e) => {
        e.preventDefault();
        if (!email) {
            toast.error("Please enter email");
        } else if (!password) {
            toast.error("Please enter password");
        } else {
            axios.post("http://localhost:8080/public/login", {
                email: email,
                password: password,
            })
                .then((res) => {
                    if (res.status === 200) {
                        cookies.set('token', res.data.token, { path: '/' });
                        toast.success(res.data.message);
                        setTimeout(() => navigate("/"), 1000);
                    } else {
                        toast.error(res.data.message);
                    }
                })
                .catch((error) => {
                    console.log(error);
                    toast.error("An error occurred. Please try again later.");
                });
        }
    };

    return (
        <>
            <Navbar />
            <div className="login-container">
                <div className="overlay"></div>

                <div className="form-wrapper">
                    <h2 className="form-title">Login</h2>
                    <form onSubmit={handleLogin}>
                        <div className="input-box">
                            <FaUser className="icon" />
                            <input
                                type="email"
                                placeholder="Enter your email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>

                        <div className="input-box">
                            <FaLock className="icon" />
                            <input
                                type="password"
                                placeholder="Enter your password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>

                        <button type="submit" className="submit-button">
                            Get Started
                        </button>

                        <div className="form-footer">
                            <Link to="/signup">Create Account</Link>
                            <a href="#">Forgot Password?</a>
                        </div>
                    </form>
                </div>
                <ToastContainer />
            </div>
        </>
    );
}

export default Login;
