export default function Footer() {
  const styles = {
    footer: {
      background: "#061421",
      color: "#d6e4ff",
      padding: "70px 8% 30px",
      borderTop: "1px solid rgba(0,212,255,.15)",
      marginTop: "90px",
    },

    container: {
      display: "grid",
      gridTemplateColumns: "2fr 1fr 1fr 1fr 1fr",
      gap: "40px",
      flexWrap: "wrap",
    },

    logo: {
      fontSize: "30px",
      fontWeight: "700",
      color: "#fff",
      marginBottom: "18px",
    },

    description: {
      lineHeight: "1.9",
      color: "#9eb3ca",
      maxWidth: "360px",
    },

    heading: {
      color: "#00d4ff",
      marginBottom: "18px",
      fontWeight: "600",
      fontSize: "18px",
    },

    list: {
      listStyle: "none",
      padding: 0,
      margin: 0,
    },

    item: {
      marginBottom: "12px",
    },

    link: {
      color: "#c8d6e8",
      textDecoration: "none",
      transition: ".3s",
    },

    bottom: {
      borderTop: "1px solid rgba(255,255,255,.08)",
      marginTop: "55px",
      paddingTop: "22px",
      display: "flex",
      justifyContent: "space-between",
      flexWrap: "wrap",
      color: "#8396ad",
      fontSize: "15px",
    },
  };

  return (
    <footer style={styles.footer}id="about">

      <div style={styles.container}>

        {/* Brand */}
        <div>
          <h2 style={styles.logo}>PCB Analyzer AI</h2>

          <p style={styles.description}>
            An AI-powered platform for intelligent PCB image analysis.
            Upload any PCB image to detect components, identify board
            type, extract technical specifications, and generate
            comprehensive analysis reports within seconds.
          </p>
        </div>

        {/* Product */}
        <div>
          <h3 style={styles.heading}>Product</h3>

          <ul style={styles.list}>
            <li style={styles.item}><a href="#home" style={styles.link}>Home</a></li>
            <li style={styles.item}><a href="#features" style={styles.link}>Features</a></li>
            <li style={styles.item}><a href="#how-it-works" style={styles.link}>How It Works</a></li>
            <li style={styles.item}><a href="#dashboard" style={styles.link}>Dashboard</a></li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h3 style={styles.heading}>Resources</h3>

          <ul style={styles.list}>
            <li style={styles.item}>Documentation</li>
            <li style={styles.item}>User Guide</li>
            <li style={styles.item}>Report Export</li>
            <li style={styles.item}>Release Notes</li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h3 style={styles.heading}>Company</h3>

          <ul style={styles.list}>
            <li style={styles.item}><a href="#about" style={styles.link}>About</a></li>
            <li style={styles.item}>Privacy Policy</li>
            <li style={styles.item}>Terms of Service</li>
            <li style={styles.item}>Support</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 style={styles.heading}>Contact</h3>

          <ul style={styles.list}>
            <li style={styles.item}>support@pcbanalyzer.ai</li>
            <li style={styles.item}>Version 1.0</li>
            <li style={styles.item}>Available 24×7</li>
          </ul>
        </div>

      </div>

      <div style={styles.bottom}>
        <span>© 2026 PCB Analyzer AI. All Rights Reserved.</span>

   
      </div>

    </footer>
  );
}