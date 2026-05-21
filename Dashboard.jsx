import { useNavigate } from "react-router-dom";

function Dashboard() {

  const navigate = useNavigate();

  const user = localStorage.getItem("user");

  const handleLogout = () => {

    localStorage.removeItem("user");

    navigate("/");
  };

  return (
    <div className="dashboard-page">

      <nav className="navbar">

        <h1 className="logo">StaySync Dashboard</h1>

        <button className="logout-btn" onClick={handleLogout}>
          Logout
        </button>

      </nav>

      <div className="dashboard-content">

        <h2>Welcome, {user}</h2>

        <div className="dashboard-cards">

          <div className="dash-card">
            <h3>120</h3>
            <p>Total Rooms</p>
          </div>

          <div className="dash-card">
            <h3>45</h3>
            <p>Bookings Today</p>
          </div>

          <div className="dash-card">
            <h3>75%</h3>
            <p>Occupancy Rate</p>
          </div>

        </div>

      </div>

    </div>
  );
}

export default Dashboard;