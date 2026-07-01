import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./signup.css";
import pcbImg from "../assets/loginsignupimg.png";
import { signup } from "../services/authService";

export default function Signup() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      const res = await signup({
        name,
        email,
        password,
      });

      alert(res.message);
      navigate("/login");
    } catch (err) {
      alert(err.response?.data?.message || "Signup failed");
    }
  };

  return (
    <div className="signup-page">
      <div className="signup-left">
        <img src={pcbImg} alt="PCB Analyzer" className="signup-image" />

        <div className="overlay">
          <h1>PCB Analyzer AI</h1>

          <p>
            Upload PCB images, detect components with AI, analyze circuits,
            and generate professional reports in seconds.
          </p>
        </div>
      </div>

      <div className="signup-right">
        <form className="signup-card" onSubmit={handleSubmit}>
          <h2>Create Account</h2>

          <p>Join PCB Analyzer AI today.</p>

          <input
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />

          <button type="submit">
            Create Account
          </button>

          <div className="footer">
            Already have an account?
            <Link to="/login"> Login</Link>
          </div>
        </form>
      </div>
    </div>
  );
}