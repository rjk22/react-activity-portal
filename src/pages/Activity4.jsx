import { useState } from "react";
import "./pages.css";

function Activity3() {
  const [password, setPassword] = useState("");
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");

  const handleCheckPassword = (e) => {
    e.preventDefault();

    if (password === "") {
      setError("Please enter a password.");
      setResult(null);
      return;
    }

    let strength = "";
    let message = "";
    let level = 0;

    if (password.length < 6) {
      strength = "Weak Password";
      message = "Status: Weak – Create a stronger password.";
      level = 1;
    } else if (password.length <= 9) {
      strength = "Medium Password";
      message = "Status: Weak – Create a stronger password.";
      level = 2;
    } else {
      strength = "Strong Password";
      message = "Status: Strong – You can use this password.";
      level = 3;
    }

    setResult({
      strength,
      message,
      level,
      length: password.length,
    });

    setError("");
  };

  const handleClear = () => {
    setPassword("");
    setResult(null);
    setError("");
  };

  return (
    <main className="activity-page">
      <div className="activity-container">
        <div className="activity-title">
          <span>ACTIVITY 03</span>
          <h1>Password Strength Checker</h1>
          <p>
            Classify a password by length as Weak, Medium, or Strong.
          </p>
        </div>

        <div className="grade-wrapper activity3-wrapper">
          <form className="grade-form" onSubmit={handleCheckPassword}>
            <div className="form-heading">
              <div>
                <span className="form-eyebrow">PASSWORD CHECK</span>
                <h2>Password Strength</h2>
              </div>

              <div className="activity3-badge">
                <strong>{password.length}</strong>
                <span>CHARS</span>
              </div>
            </div>

            <div className="input-group">
              <label htmlFor="password">Password</label>

              <div className="input-shell">
                <span className="input-icon">P</span>

                <input
                  id="password"
                  type="password"
                  placeholder="Enter password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>

            <div className="activity3-guide">
              <div className="activity3-guide-item">
                <span>&lt; 6</span>
                <strong>Weak</strong>
              </div>

              <div className="activity3-guide-item">
                <span>6 – 9</span>
                <strong>Medium</strong>
              </div>

              <div className="activity3-guide-item">
                <span>10+</span>
                <strong>Strong</strong>
              </div>
            </div>

            <div className="grade-actions">
              <button type="submit" className="submit-btn">
                Check Password
              </button>

              <button
                type="button"
                className="clear-btn"
                onClick={handleClear}
              >
                Clear
              </button>
            </div>

            {error && (
              <div className="grade-message error-message">
                <div className="message-icon">!</div>

                <div>
                  <strong>Unable to check password</strong>
                  <p>{error}</p>
                </div>
              </div>
            )}

            {result && (
              <div className="grade-result activity3-result">
                <div className="result-topline">
                  <div>
                    <span className="result-eyebrow">
                      PASSWORD STATUS
                    </span>
                    <h3>{result.strength}</h3>
                  </div>

                  <div
                    className={`result-score activity3-level-${result.level}`}
                  >
                    {result.level}
                  </div>
                </div>

                <div className="activity3-strength">
                  <div
                    className={`strength-bar ${
                      result.level >= 1 ? "strength-active" : ""
                    }`}
                  ></div>

                  <div
                    className={`strength-bar ${
                      result.level >= 2 ? "strength-active" : ""
                    }`}
                  ></div>

                  <div
                    className={`strength-bar ${
                      result.level >= 3 ? "strength-active" : ""
                    }`}
                  ></div>
                </div>

                <div className="result-details">
                  <div className="result-row">
                    <span>Password Status</span>
                    <strong>{result.strength}</strong>
                  </div>

                  <div className="result-row">
                    <span>Character Length</span>
                    <strong>{result.length} characters</strong>
                  </div>

                  <div className="result-row">
                    <span>Strength Message</span>
                    <strong>{result.message}</strong>
                  </div>
                </div>
              </div>
            )}
          </form>
        </div>
      </div>
    </main>
  );
}

export default Activity3;