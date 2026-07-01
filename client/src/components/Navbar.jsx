import { Link } from "react-router-dom";
import logo from  "../assets/logoo.png"

export default function Navbar() {
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

    left: {
      display: "flex",
      alignItems: "center",
      gap: "35px",
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
      alignItems:"centre",
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
      <img
        src={logo}
        alt="PCB Analyzer AI"
        style={styles.logoImage}
      />
      <h2 style={styles.title}>PCB Analyzer AI</h2>
    </Link>

    {/* Navigation + Buttons */}
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "30px",
      }}
    >
      <ul style={styles.navLinks}>
        <li>
          <a href="#home" style={styles.link}>
            Home
          </a>
        </li>

        <li>
          <a href="#features" style={styles.link}>
            Features
          </a>
        </li>

        <li>
          <a href="#about" style={styles.link}>
            About
          </a>
        </li>
      </ul>

      <div style={styles.buttons}>
        <Link style={styles.login} to="/login">
          Login
        </Link>

        <Link style={styles.signup} to="/signup">
          Sign Up
        </Link>
      </div>
    </div>
  </nav>
);
}