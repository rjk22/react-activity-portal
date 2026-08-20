import React, { useState } from "react";

const Activity5 = () => {
  const [employeeName, setEmployeeName] = useState("");
  const [timeIn, setTimeIn] = useState("");
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");

  const checkAttendance = () => {
    setError("");
    setResult(null);

    if (!employeeName.trim()) {
      setError("Please enter the employee name.");
      return;
    }

    if (timeIn === "") {
      setError("Please enter the time in.");
      return;
    }

    const time = Number(timeIn);

    if (isNaN(time)) {
      setError("Please enter a valid number.");
      return;
    }

    if (time < 0) {
      setError("Time in cannot be negative.");
      return;
    }

    let status;
    let message;

    if (time <= 8) {
      status = "On Time";
      message = "Good job!";
    } else if (time <= 9) {
      status = "Late";
      message = "Please be on time tomorrow.";
    } else {
      status = "Very Late";
      message = "Report to your supervisor.";
    }

    setResult({
      employeeName: employeeName.trim(),
      timeIn: time,
      status,
      message,
    });
  };

  const resetForm = () => {
    setEmployeeName("");
    setTimeIn("");
    setResult(null);
    setError("");
  };

  return (
    <main className="activity-page">
      <div className="activity-container">

        
        <section className="activity-title">
          <span>ACTIVITY 5</span>

          <h1>Employee Attendance Checker</h1>

          <p>
            Classify a decimal time-in value as On Time, Late, or Very Late.
          </p>
        </section>

        {/* FORM AREA */}
        <div className="box-stage">

          {/* DECORATIVE GLOW */}
          <div className="orbit-glow"></div>
          <div className="orbit-glow orbit-glow--two"></div>

          <div className="grade-wrapper">

            <div className="grade-form">

              <div className="form-heading">
                <div>
                  <span className="form-eyebrow">
                    ATTENDANCE CHECK
                  </span>

                  <h2>Employee Attendance</h2>
                </div>

                <div className="electricity-badge">
                  <span>05</span>
                  <small>ACTIVITY</small>
                </div>
              </div>

             
              <div className="input-group">
                <label>Employee Name</label>

                <div className="input-shell">
                  <span className="input-icon">A</span>

                  <input
                    type="text"
                    placeholder="Enter employee name"
                    value={employeeName}
                    onChange={(e) => setEmployeeName(e.target.value)}
                  />
                </div>
              </div>

            
              <div className="input-group">
                <label>Time In</label>

                <div className="input-shell">
                  <span className="input-icon">◷</span>

                  <input
                    type="number"
                    step="0.1"
                    min="0"
                    placeholder="e.g. 8.5"
                    value={timeIn}
                    onChange={(e) => setTimeIn(e.target.value)}
                  />
                </div>
              </div>

          
              <div className="grade-actions">
                <button
                  type="button"
                  className="submit-btn"
                  onClick={checkAttendance}
                >
                  Check Attendance
                </button>

                <button
                  type="button"
                  className="clear-btn"
                  onClick={resetForm}
                >
                  Reset
                </button>
              </div>

          
              {error && (
                <div className="grade-message error-message">
                  {error}
                </div>
              )}

              {result && (
                <div className="grade-result">

                  <div className="result-heading">
                    Attendance Result
                  </div>

                  <div className="result-row">
                    <span>Employee Name</span>
                    <strong>{result.employeeName}</strong>
                  </div>

                  <div className="result-row">
                    <span>Time In</span>
                    <strong>{result.timeIn}</strong>
                  </div>

                  <div className="result-row">
                    <span>Attendance Status</span>
                    <strong>{result.status}</strong>
                  </div>

                  <div className="result-row">
                    <span>Follow-up Message</span>
                    <strong className="remarks-value">
                      {result.message}
                    </strong>
                  </div>

                </div>
              )}

            </div>
          </div>
        </div>

    
      </div>
    </main>
  );
};

export default Activity5;