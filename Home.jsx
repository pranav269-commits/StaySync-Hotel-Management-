import { Link } from "react-router-dom";

function Home() {
  return (
    <div>

      {/* NAVBAR */}

      <nav className="navbar">

        <h1 className="logo">StaySync</h1>

        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/signin">Sign In</Link>
          <Link to="/signup">Sign Up</Link>
        </div>

      </nav>

      {/* HERO */}

      <section className="hero-section">

        <div className="hero-content">

          <h1>Luxury Hotel Management Made Simple</h1>

          <p>
            StaySync helps hotels manage rooms, guests,
            reservations and analytics with a modern dashboard.
          </p>

          <Link to="/signup">
            <button className="hero-btn">
              Explore Hotels
            </button>
          </Link>

        </div>

      </section>

      {/* HOTEL CARDS */}

      <section className="hotel-section">

        <h2>Popular Hotels</h2>

        <div className="hotel-container">

          <div className="hotel-card">

            <img
              src="https://images.unsplash.com/photo-1566073771259-6a8506099945"
              alt="Hotel"
            />

            <div className="hotel-info">
              <h3>Grand Palace Hotel</h3>
              <p>5-Star Luxury Hotel in Mumbai</p>
              <span>₹12,000 / night</span>
            </div>

          </div>

          <div className="hotel-card">

            <img
              src="https://images.unsplash.com/photo-1551882547-ff40c63fe5fa"
              alt="Hotel"
            />

            <div className="hotel-info">
              <h3>Ocean View Resort</h3>
              <p>Beachside Resort in Goa</p>
              <span>₹8,500 / night</span>
            </div>

          </div>

          <div className="hotel-card">

            <img
              src="https://images.unsplash.com/photo-1522708323590-d24dbb6b0267"
              alt="Hotel"
            />

            <div className="hotel-info">
              <h3>Royal Stay Inn</h3>
              <p>Premium Business Hotel in Bangalore</p>
              <span>₹6,500 / night</span>
            </div>

          </div>

        </div>

      </section>

    </div>
  );
}

export default Home;