import { useState } from "react";
import "./pages.css";

function Activity2() {
  const [studentName, setStudentName] = useState("");
  const [score, setScore] = useState("");
  const [result, setResult] = useState(null);

  const handleEvaluate = (e) => {
    e.preventDefault();

    const numericScore = Number(score);

    if (studentName.trim() === "" || score === "" || Number.isNaN(numericScore) || numericScore < 0 || numericScore > 100) {
      setResult({
        error: "Please enter a student name and a valid score from 0 to 100.",
      });
      return;
    }

    let remarks;

    if (numericScore >= 90) {
      remarks = "Excellent";
    } else if (numericScore >= 85) {
      remarks = "Very Good";
    } else if (numericScore >= 80) {
      remarks = "Good";
    } else if (numericScore >= 75) {
      remarks = "Passed";
    } else {
      remarks = "Failed";
    }

    setResult({
      studentName: studentName.trim(),
      score: numericScore,
      remarks,
    });
  };

  const handleClear = () => {
    setStudentName("");
    setScore("");
    setResult(null);
  };

  return (
    <main className="activity-page">
      <div className="activity-container">
        <div className="activity-title">
          <span>ACTIVITY 02</span>
          <h1>Student Grade Evaluation</h1>
          <p>Enter a student's score to evaluate the corresponding grade remark.</p>
        </div>

        <div className="box-stage">

          <div className="orbit-glow orbit-glow--one" aria-hidden="true"></div>
          <div className="orbit-glow orbit-glow--two" aria-hidden="true"></div>

          <div className="grade-wrapper">
          <form className="grade-form" onSubmit={handleEvaluate}>
            <h2>Evaluate Grade</h2>

            <div className="input-group">
              <label htmlFor="student-name">Student Name</label>
              <input
                id="student-name"
                type="text"
                placeholder="Enter student name"
                value={studentName}
                onChange={(e) => setStudentName(e.target.value)}
              />
            </div>

            <div className="input-group">
              <label htmlFor="score">Score</label>
              <input
                id="score"
                type="number"
                min="0"
                max="100"
                step="1"
                placeholder="Enter score (0–100)"
                value={score}
                onChange={(e) => setScore(e.target.value)}
              />
            </div>

            <div className="grade-actions">
              <button type="submit" className="submit-btn">
                Evaluate
              </button>

              <button type="button" className="clear-btn" onClick={handleClear}>
                Clear
              </button>
            </div>

            {result?.error && (
              <div className="grade-message error-message">
                {result.error}
              </div>
            )}

            {result && !result.error && (
              <div className="grade-result">
                <div className="result-heading">Evaluation Result</div>

                <div className="result-row">
                  <span>Student Name</span>
                  <strong>{result.studentName}</strong>
                </div>

                <div className="result-row">
                  <span>Score</span>
                  <strong>{result.score}</strong>
                </div>

                <div className="result-row">
                  <span>Remarks</span>
                  <strong className="remarks-value">{result.remarks}</strong>
                </div>
              </div>
            )}
          </form>
          </div>

        </div>
      </div>
    </main>
  );
}

export default Activity2;
