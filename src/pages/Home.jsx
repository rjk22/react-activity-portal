import "./pages.css";

function Home() {
  return (
    <main className="home">
      <section className="hero">

        <div className="hero-content">
          <span className="welcome-badge">WELCOME</span>

          <h1>
            React Activity
            <span> Portal</span>
          </h1>

          <div className="hero-buttons">
            <a href="/activity-1" className="primary-btn">
              Start Activity
            </a>

            <a href="/activity-2" className="secondary-btn">
              View Activities
            </a>
          </div>
        </div>

        <div className="hero-card">


          <h3>React Activities</h3>

          <p>
            Learn, practice, and explore different
            React concepts through our activities.
          </p>

          <div className="activity-count">
            <strong>4</strong>
            <span>Activities Available</span>
          </div>
        </div>

      </section>
    </main>
  );
}

export default Home;