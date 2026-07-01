import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";
import pcbImg from "../assets/loginsignupimg.png";
import { login } from "../services/authservice.js";

export default function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      alert("Please fill all fields");
      return;
    }

    try {
      const res = await login({
        email,
        password,
      });

      localStorage.setItem("token", res.token);

      // alert("Login Successful");

      navigate("/dashboard");
    } catch (err) {
      alert(err.response?.data?.message || "Login Failed");
    }
  };

  return (
    <div className="login-page">
      {/* Left Side */}
      <div className="login-left">
        <img
          src={pcbImg}
          alt="PCB Analyzer"
          className="login-image"
        />

        <div className="overlay">
          <h1>Welcome Back</h1>

          <p>
            Continue your PCB analysis with AI. Detect components,
            analyze circuits, and manage your saved reports.
          </p>
        </div>
      </div>

      {/* Right Side */}
      <div className="login-right">
        <form className="login-card" onSubmit={handleSubmit}>
          <h2>Login</h2>

          <p>Sign in to your PCB Analyzer account.</p>

          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <Link
            to="/forgot-password"
            className="forgot-link"
          >
            Forgot Password?
          </Link>

          <button
            type="submit"
            className="login-btn"
          >
            Login
          </button>

          <div className="footer">
            Don't have an account?
            <Link to="/signup" className="signup-link">
              {" "}
              Sign Up
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}