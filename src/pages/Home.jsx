import { Link } from "react-router-dom";
import "./pages.css";

function Home() {
  const scrollToActivities = () => {
    document
      .getElementById("activities")
      ?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
  };

  return (
    <main className="home">

      <section className="home-hero">

        <div className="home-glow home-glow-one"></div>
        <div className="home-glow home-glow-two"></div>

        <div className="home-hero-content">

          <div className="home-eyebrow">
            <span className="home-eyebrow-dot"></span>
            React JS Practical Assessment
          </div>

          <h1>
            Learn React Through
            <span> Interactive Activities</span>
          </h1>

          <p>
            Explore hands-on React exercises focused on state,
            events, validation, conditional logic, and practical
            application development.
          </p>

          <div className="hero-buttons">

            <Link
              to="/activity-1"
              className="primary-btn"
            >
              <span>Start Activity</span>
              <span className="btn-arrow">→</span>
            </Link>

            <button
              type="button"
              className="secondary-btn"
              onClick={scrollToActivities}
            >
              View Activities
            </button>

          </div>

        </div>

        <div className="hero-visual">

          <div className="visual-orbit orbit-a"></div>
          <div className="visual-orbit orbit-b"></div>

          <div className="hero-card">

            <div className="hero-card-top">

              <div className="hero-card-icon">
                R
              </div>

              <div>
                <span>React Activity Portal</span>
                <small>Interactive Workspace</small>
              </div>

            </div>

            <div className="hero-card-line"></div>

            <div className="hero-card-stats">

              <div>
                <strong>4</strong>
                <span>Activities</span>
              </div>

              <div>
                <strong>100%</strong>
                <span>Interactive</span>
              </div>

            </div>

            <div className="hero-card-status">
              <span></span>
              Ready to explore
            </div>

          </div>

        </div>

      </section>

      <section
        className="activities-section"
        id="activities"
      >

        <div className="activities-heading">

          <span className="section-label">
            ACTIVITY LIBRARY
          </span>

          <h2>React Activity Portal</h2>

          <p>
            Choose an activity below and practice different
            React concepts through interactive exercises.
          </p>

        </div>

        <div className="activities-grid">

          {/* ACTIVITY 1 */}
          <article className="activity-card">

            <div className="activity-card-number">
              01
            </div>

            <div className="activity-card-content">

              <span className="activity-card-tag">
                Authentication
              </span>

              <h3>Login Authentication</h3>

              <p>
                Validate user credentials, handle form events,
                and display conditional login feedback.
              </p>

            </div>

            <Link
              to="/activity-1"
              className="activity-card-btn"
            >
              <span>Open Activity</span>
              <span>→</span>
            </Link>

          </article>

          {/* ACTIVITY 2 */}
          <article className="activity-card">

            <div className="activity-card-number">
              02
            </div>

            <div className="activity-card-content">

              <span className="activity-card-tag">
                Evaluation
              </span>

              <h3>Student Grade Evaluation</h3>

              <p>
                Evaluate student scores using validation,
                state, and conditional grading logic.
              </p>

            </div>

            <Link
              to="/activity-2"
              className="activity-card-btn"
            >
              <span>Open Activity</span>
              <span>→</span>
            </Link>

          </article>

          {/* ACTIVITY 3 */}
          <article className="activity-card">

            <div className="activity-card-number">
              03
            </div>

            <div className="activity-card-content">

              <span className="activity-card-tag">
                Validation
              </span>

              <h3>Password Strength Checker</h3>

              <p>
                Analyze password length and provide
                immediate visual strength feedback.
              </p>

            </div>

            <Link
              to="/activity-3"
              className="activity-card-btn"
            >
              <span>Open Activity</span>
              <span>→</span>
            </Link>

          </article>

          {/* ACTIVITY 4 */}
          <article className="activity-card">

            <div className="activity-card-number">
              04
            </div>

            <div className="activity-card-content">

              <span className="activity-card-tag">
                Calculator
              </span>

              <h3>Electricity Bill Calculator</h3>

              <p>
                Calculate electricity charges using
                consumption values and tiered rates.
              </p>

            </div>

            <Link
              to="/activity-4"
              className="activity-card-btn"
            >
              <span>Open Activity</span>
              <span>→</span>
            </Link>

          </article>

          {/* ACTIVITY 5 - ADDED */}
          <article className="activity-card">

            <div className="activity-card-number">
              05
            </div>

            <div className="activity-card-content">

              <span className="activity-card-tag">
                State Management
              </span>

              <h3>To-Do List</h3>

              <p>
                Manage tasks using React state, handle user
                input, and dynamically add and remove tasks.
              </p>

            </div>

            <Link
              to="/activity-5"
              className="activity-card-btn"
            >
              <span>Open Activity</span>
              <span>→</span>
            </Link>

          </article>

        </div>

      </section>

    </main>
  );
}

export default Home;