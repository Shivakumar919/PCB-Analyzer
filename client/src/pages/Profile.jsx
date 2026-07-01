import "./profile.css";

export default function Profile() {
  return (
    <div className="profile">
      <div className="profile-card">
        <div className="avatar">👤</div>

        <h2>My Profile</h2>

        <div className="info">
          <p><span>Name:</span> Tej</p>
          <p><span>Email:</span> tej@example.com</p>
        </div>

        <button className="logout-btn">Logout</button>
      </div>
    </div>
  );
}