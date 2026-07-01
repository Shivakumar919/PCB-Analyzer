import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer" id="about">
      <div className="footer-container">

        <div className="footer-brand">
          <h2>PCB Analyzer AI</h2>
          <p>
            An AI-powered platform for intelligent PCB image analysis.
            Upload any PCB image to detect components, identify board
            type, extract technical specifications, and generate
            comprehensive analysis reports within seconds.
          </p>
        </div>

        <div className="footer-column">
          <h3>Product</h3>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#features">Features</a></li>
            <li><a href="#how-it-works">How It Works</a></li>
            <li><a href="#dashboard">Dashboard</a></li>
          </ul>
        </div>

        <div className="footer-column">
          <h3>Resources</h3>
          <ul>
            <li>Documentation</li>
            <li>User Guide</li>
            <li>Report Export</li>
            <li>Release Notes</li>
          </ul>
        </div>

        <div className="footer-column">
          <h3>Company</h3>
          <ul>
            <li><a href="#about">About</a></li>
            <li>Privacy Policy</li>
            <li>Terms of Service</li>
            <li>Support</li>
          </ul>
        </div>

        <div className="footer-column">
          <h3>Contact</h3>
          <ul>
            <li>support@pcbanalyzer.ai</li>
            <li>Version 1.0</li>
            <li>Available 24×7</li>
          </ul>
        </div>

      </div>

      <div className="footer-bottom">
        © 2026 PCB Analyzer AI. All Rights Reserved.
      </div>
    </footer>
  );
}