import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logoo.png";
import "./navbar.css";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const styles = {
    navbar: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "18px 7%",
      background: "#071321",
      borderBottom: "1px solid rgba(0,212,255,0.2)",
      position: "sticky",
      top: 0,
      zIndex: 1000,
    },

    logo: {
      display: "flex",
      alignItems: "center",
      gap: "12px",
      textDecoration: "none",
    },

    logoImage: {
      width: "45px",
      height: "45px",
      objectFit: "contain",
    },

    title: {
      color: "#fff",
      fontSize: "28px",
      fontWeight: "700",
      margin: 0,
      letterSpacing: "0.5px",
    },

    buttons: {
      display: "flex",
      alignItems: "center",
      gap: "12px",
    },

    login: {
      textDecoration: "none",
      padding: "10px 22px",
      border: "1px solid #00d4ff",
      borderRadius: "8px",
      color: "#00d4ff",
      fontWeight: "600",
      transition: "all .3s ease",
    },

    signup: {
      textDecoration: "none",
      padding: "10px 22px",
      background: "#007BFF",
      borderRadius: "8px",
      color: "#fff",
      fontWeight: "600",
      transition: "all .3s ease",
      boxShadow: "0 0 15px rgba(0,123,255,.35)",
    },

    navLinks: {
      display: "flex",
      alignItems: "center",
      listStyle: "none",
      gap: "30px",
      margin: 0,
      padding: 0,
    },

    link: {
      color: "#dce8ff",
      textDecoration: "none",
      fontWeight: "600",
      transition: "all .3s ease",
      paddingBottom: "4px",
    },
  };

  return (
    <nav style={styles.navbar}>
      {/* Logo */}
      <Link to="/" style={styles.logo}>
        <img src={logo} alt="PCB Analyzer AI" style={styles.logoImage} />
        <h2 style={styles.title}>PCB Analyzer AI</h2>
      </Link>

      {/* Hamburger button (mobile only) */}
      <button
        className="hamburger"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      {/* Navigation + Buttons */}
      <div className={`navbar-right ${menuOpen ? "open" : ""}`}>
        <ul className="nav-links" style={styles.navLinks}>
          <li>
            <a href="#home" style={styles.link} onClick={() => setMenuOpen(false)}>
              Home
            </a>
          </li>

          <li>
            <a href="#features" style={styles.link} onClick={() => setMenuOpen(false)}>
              Features
            </a>
          </li>

          <li>
            <a href="#about" style={styles.link} onClick={() => setMenuOpen(false)}>
              About
            </a>
          </li>
        </ul>

        <div className="nav-buttons" style={styles.buttons}>
          <Link style={styles.login} to="/login" onClick={() => setMenuOpen(false)}>
            Login
          </Link>

          <Link style={styles.signup} to="/signup" onClick={() => setMenuOpen(false)}>
            Sign Up
          </Link>
        </div>
      </div>
    </nav>
  );
}