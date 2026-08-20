import { useState } from "react";
import "./pages.css";

function Activity4() {
  const [customerName, setCustomerName] = useState("");
  const [consumption, setConsumption] = useState("");
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");

  const calculateBill = (e) => {
    e.preventDefault();

    if (customerName.trim() === "" && consumption === "") {
      setError("Please enter customer name and consumption.");
      setResult(null);
      return;
    }

    if (customerName.trim() === "") {
      setError("Please enter the customer name.");
      setResult(null);
      return;
    }

    if (consumption === "") {
      setError("Please enter the electricity consumption.");
      setResult(null);
      return;
    }

    const kwh = Number(consumption);

    if (Number.isNaN(kwh) || kwh < 0) {
      setError("Please enter a valid consumption value.");
      setResult(null);
      return;
    }

    let rate;

    if (kwh <= 100) {
      rate = 10;
    } else if (kwh <= 200) {
      rate = 12;
    } else if (kwh <= 300) {
      rate = 15;
    } else {
      rate = 18;
    }

    const totalBill = kwh * rate;

    let usageStatus;

    if (totalBill >= 5000) {
      usageStatus = "High Electricity Usage";
    } else {
      usageStatus = "Normal Electricity Usage";
    }

    setResult({
      customerName: customerName.trim(),
      consumption: kwh,
      rate,
      totalBill,
      usageStatus,
    });

    setError("");
  };

  const clearForm = () => {
    setCustomerName("");
    setConsumption("");
    setResult(null);
    setError("");
  };

  const formatCurrency = (value) => {
    return new Intl.NumberFormat("en-PH", {
      style: "currency",
      currency: "PHP",
      minimumFractionDigits: 2,
    }).format(value);
  };

  return (
    <main className="activity-page">
      <div className="activity-container">
        <div className="activity-title">
          <span>ACTIVITY 04</span>
          <h1>Electricity Bill Calculator</h1>
          <p>
            Calculate a customer's electricity bill based on kWh consumption
            and tiered electricity rates.
          </p>
        </div>

        <div className="grade-wrapper electricity-wrapper">
          <form className="grade-form" onSubmit={calculateBill}>
            <div className="form-heading">
              <div>
                <span className="form-eyebrow">BILL CALCULATION</span>
                <h2>Electricity Usage</h2>
              </div>

              <div className="electricity-badge">
                <span>kWh</span>
                <small>USAGE</small>
              </div>
            </div>

            <div className="input-grid">
              <div className="input-group">
                <label htmlFor="customerName">Customer Name</label>

                <div className="input-shell">
                  <span className="input-icon">C</span>

                  <input
                    id="customerName"
                    type="text"
                    placeholder="Enter customer name"
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                  />
                </div>
              </div>

              <div className="input-group">
                <label htmlFor="consumption">Consumption (kWh)</label>

                <div className="input-shell">
                  <span className="input-icon">⚡</span>

                  <input
                    id="consumption"
                    type="number"
                    min="0"
                    step="0.01"
                    placeholder="e.g. 250"
                    value={consumption}
                    onChange={(e) => setConsumption(e.target.value)}
                  />
                </div>
              </div>
            </div>

            <div className="rate-guide">
              <div className="rate-guide-title">
                <span>RATE GUIDE</span>
                <small>Rate depends on total consumption</small>
              </div>

              <div className="rate-grid">
                <div className="rate-item">
                  <strong>₱10</strong>
                  <span>0 – 100 kWh</span>
                </div>

                <div className="rate-item">
                  <strong>₱12</strong>
                  <span>101 – 200 kWh</span>
                </div>

                <div className="rate-item">
                  <strong>₱15</strong>
                  <span>201 – 300 kWh</span>
                </div>

                <div className="rate-item">
                  <strong>₱18</strong>
                  <span>Above 300 kWh</span>
                </div>
              </div>
            </div>

            <div className="grade-actions">
              <button type="submit" className="submit-btn">
                Calculate Bill
              </button>

              <button
                type="button"
                className="clear-btn"
                onClick={clearForm}
              >
                Clear
              </button>
            </div>

            {error && (
              <div className="grade-message error-message">
                <div className="message-icon">!</div>

                <div>
                  <strong>Unable to calculate</strong>
                  <p>{error}</p>
                </div>
              </div>
            )}

            {result && (
              <div className="grade-result electricity-result">
                <div className="result-topline">
                  <div>
                    <span className="result-eyebrow">
                      CALCULATION RESULT
                    </span>

                    <h3>{result.usageStatus}</h3>
                  </div>

                  <div className="result-score electricity-total">
                    ₱
                  </div>
                </div>

                <div className="result-details">
                  <div className="result-row">
                    <span>Customer Name</span>
                    <strong>{result.customerName}</strong>
                  </div>

                  <div className="result-row">
                    <span>Consumption</span>
                    <strong>{result.consumption} kWh</strong>
                  </div>

                  <div className="result-row">
                    <span>Rate Applied</span>
                    <strong>₱{result.rate.toFixed(2)} per kWh</strong>
                  </div>

                  <div className="result-row">
                    <span>Total Bill</span>
                    <strong className="bill-total">
                      {formatCurrency(result.totalBill)}
                    </strong>
                  </div>

                  <div className="result-row">
                    <span>Usage Status</span>
                    <strong
                      className={
                        result.totalBill >= 5000
                          ? "usage-status usage-high"
                          : "usage-status usage-normal"
                      }
                    >
                      {result.usageStatus}
                    </strong>
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

export default Activity4;