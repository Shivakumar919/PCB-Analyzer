import { NavLink, useNavigate } from "react-router-dom";
import "./Sidebar.css";

const history = [
  "Arduino PCB",
  "ESP32 Board",
  "Power Supply",
  "Motherboard",
];

export default function Sidebar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/home");
  };

  return (
    <aside className="sidebar">
      {/* Logo */}
      <div className="sidebar-logo">
        <h2>⚡ PCB Analyzer</h2>
      </div>

      {/* New Analysis */}
      <button
        className="new-analysis"
        onClick={() => navigate("/dashboard")}
      >
        + New Analysis
      </button>

      {/* Recent Analyses */}
      <div className="sidebar-section history">
        <p className="section-title">Recent Analyses</p>

        {history.map((item, index) => (
          <NavLink
            key={index}
            to="/dashboard"
            className="history-item"
          >
            📄 {item}
          </NavLink>
        ))}
      </div>

      {/* Bottom Menu */}
      <div className="sidebar-bottom">
        <NavLink
          to="/reports"
          className="menu-item"
        >
          ⭐ Saved Reports
        </NavLink>

        <NavLink
          to="/profile"
          className="menu-item"
        >
          👤 Profile
        </NavLink>

        <NavLink
          to="/settings"
          className="menu-item"
        >
          ⚙ Settings
        </NavLink>

        <button
          className="logout-btn"
          onClick={handleLogout}
        >
          🚪 Logout
        </button>
      </div>
    </aside>
  );
}