import { useState } from "react";
import "./pages.css";

function Activity1() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [shakeKey, setShakeKey] = useState(0);
  const [showModal, setShowModal] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();

    if (username === "admin" && password === "12345") {
      setError("");
      setShowModal(true);
    } else {
      setError("Incorrect username or password.");
      setShakeKey((key) => key + 1);
    }
  };

  const fillDemoCredentials = () => {
    setUsername("admin");
    setPassword("12345");
    setError("");
  };

  const closeModal = () => setShowModal(false);

  return (
    <main className="activity-page">

      <div className="activity-container">


        <div className="activity-title">

          <span>ACTIVITY 01</span>

          <h1>Login Authentication</h1>


        </div>



        <div className="box-stage">

          <div className="orbit-glow orbit-glow--one" aria-hidden="true"></div>
          <div className="orbit-glow orbit-glow--two" aria-hidden="true"></div>

          <div
            key={shakeKey}
            className={`login-wrapper${error ? " shake" : ""}`}
          >

            <form
              className="login-form"
              onSubmit={handleLogin}
            >

              <h2>Sign In</h2>

              <div className="demo-credentials">
                <div className="demo-credentials-label">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="11" width="18" height="10" rx="2" />
                    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                  </svg>
                  Demo Credentials
                </div>

                <div className="demo-credentials-row">
                  <span>Username</span>
                  <code>admin</code>
                </div>

                <div className="demo-credentials-row">
                  <span>Password</span>
                  <code>12345</code>
                </div>

                <button
                  type="button"
                  className="demo-fill-btn"
                  onClick={fillDemoCredentials}
                >
                  Autofill Demo Credentials
                </button>
              </div>



              <div className="input-group">

                <label htmlFor="username">
                  Username
                </label>

                <input
                  id="username"
                  type="text"
                  placeholder="Enter your username"
                  value={username}
                  onChange={(e) =>
                    setUsername(e.target.value)
                  }
                />

              </div>


              <div className="input-group">

                <label htmlFor="password">
                  Password
                </label>

                <input
                  id="password"
                  type="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) =>
                    setPassword(e.target.value)
                  }
                />

              </div>



              <button
                type="submit"
                className="submit-btn"
              >
                Sign In →
              </button>


              {/* ERROR MESSAGE */}
              {error && (
                <div className="login-message error-message">
                  {error}
                </div>
              )}

            </form>

          </div>

        </div>

      </div>

      {/* SUCCESS MODAL */}
      {showModal && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-card" onClick={(e) => e.stopPropagation()}>

            <button
              type="button"
              className="modal-close"
              aria-label="Close"
              onClick={closeModal}
            >
              ×
            </button>

            <div className="modal-check">
              <span className="confetti-dot"></span>
              <span className="confetti-dot"></span>
              <span className="confetti-dot"></span>
              <span className="confetti-dot"></span>
              <span className="confetti-dot"></span>
              <span className="confetti-dot"></span>

              <svg viewBox="0 0 52 52" fill="none">
                <circle cx="26" cy="26" r="24" stroke="#22c55e" strokeWidth="3" />
                <path d="M15 27l7 7 15-15" stroke="#22c55e" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>

            <h3>Login Successful</h3>
            <p>Welcome back, Admin! You have signed in successfully.</p>

            <button
              type="button"
              className="modal-btn"
              onClick={closeModal}
            >
              Continue
            </button>

          </div>
        </div>
      )}

    </main>
  );
}

export default Activity1;
