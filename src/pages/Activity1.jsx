import { useState } from "react";
import "./pages.css";

function Activity1() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    if (username === "admin" && password === "12345") {
      setMessage("Login successful! Welcome, Admin.");
    } else {
      setMessage("Incorrect username or password.");
    }
  };

  return (
    <main className="activity-page">

      <div className="activity-container">


        <div className="activity-title">

          <span>ACTIVITY 01</span>

          <h1>Login Authentication</h1>


        </div>



        <div className="login-wrapper">

          <form
            className="login-form"
            onSubmit={handleLogin}
          >

            <h2>Sign In</h2>



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


            {/* MESSAGE */}
            {message && (
              <div className="login-message">
                {message}
              </div>
            )}

          </form>

        </div>

      </div>

    </main>
  );
}

export default Activity1;