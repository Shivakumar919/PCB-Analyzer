import "./Home.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

import heroImg from "../assets/heroimg.png";
import featureImg from "../assets/dashboard.png";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="home-page">
        {/* Hero Section */}
        <section className="hero" aria-label="PCB Analyzer AI" id="home"> 
          <img src={heroImg} alt="PCB Analyzer" className="hero__image" />

          <div className="hero__content"></div>
          <div className="hero-buttons">
            <Link to="/login">
              <button className="primary-btn">Get Started</button>
            </Link>

            <Link to="/signup">
              <button className="secondary-btn">Sign Up</button>
            </Link>
          </div>
        </section>

        {/* Features Section */}
        <section className="feature-band" id="features">
          <div className="feature-band__text">
            <h2>Why Choose PCB Analyzer?</h2>

            <p>
              PCB Analyzer uses Artificial Intelligence to identify electronic
              components from PCB images, helping students, engineers, and
              hobbyists understand circuit boards quickly.
            </p>

            <ul className="feature-list">
              <li>✔ Upload PCB Images</li>
              <li>✔ AI Component Detection</li>
              <li>✔ Circuit Analysis</li>
              <li>✔ Component Details</li>
              <li>✔ Download Reports</li>
            </ul>
          </div>

          <div className="feature-band__media">
            <img src={featureImg} alt="PCB Analyzer Dashboard" />
          </div>
        </section>

        {/* How It Works */}
    <section className="steps" >
  <h2>How It Works</h2>

  <div className="steps-grid">
    <div className="step-card">
      <h3>01</h3>
      <p>Upload a PCB Image</p>
    </div>

    <div className="step-card">
      <h3>02</h3>
      <p>AI Detects Components & PCB Type</p>
    </div>

    <div className="step-card">
      <h3>03</h3>
      <p>Extract Specifications & Generate Insights</p>
    </div>

    <div className="step-card">
      <h3>04</h3>
      <p>View, Export & Download the Detailed Report</p>
    </div>
  </div>
</section>
      </main>
      <Footer />
    </>
  );
}
