import { useState } from "react";
import "./pages.css";

function Activity4() {
  const [customerName, setCustomerName] = useState("");
  const [consumption, setConsumption] = useState("");
  const [rateApplied, setRateApplied] = useState("");
  const [totalBill, setTotalBill] = useState("");
  const [usageStatus, setUsageStatus] = useState("");
  const [error, setError] = useState("");

  const calculateBill = () => {
    setError("");
    setRateApplied("");
    setTotalBill("");
    setUsageStatus("");

    if (customerName.trim() === "") {
      setError("Please enter the customer name.");
      return;
    }

    if (consumption === "") {
      setError("Please enter the electricity consumption.");
      return;
    }

    const kWh = Number(consumption);

    if (isNaN(kWh)) {
      setError("Consumption must be a valid number.");
      return;
    }

    if (kWh < 0) {
      setError("Consumption cannot be negative.");
      return;
    }

    let rate;

    if (kWh <= 100) {
      rate = 10;
    } else if (kWh <= 200) {
      rate = 12;
    } else if (kWh <= 300) {
      rate = 15;
    } else {
      rate = 18;
    }

    const bill = kWh * rate;

    let status;

    if (bill >= 5000) {
      status = "High Electricity Usage";
    } else {
      status = "Normal Electricity Usage";
    }

    setRateApplied(`₱${rate} per kWh`);

    setTotalBill(
      `₱${bill.toLocaleString("en-PH", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      })}`
    );

    setUsageStatus(status);
  };

  const clearForm = () => {
    setCustomerName("");
    setConsumption("");
    setRateApplied("");
    setTotalBill("");
    setUsageStatus("");
    setError("");
  };

  return (
    <main className="activity-page">

      <div className="activity-container">


        <div className="activity-title">

          <span>
            ACTIVITY 4
          </span>

          <h1>
            Electricity Bill Calculator
          </h1>

          <p>
            Compute a bill from kWh consumption across tiered rates.
          </p>

        </div>


        <div className="electricity-wrapper">

          <div className="grade-form">

            <div className="form-heading">

              <div>
                <span className="form-eyebrow">
                  ELECTRICITY CALCULATOR
                </span>

                <h2>
                  Calculate Your Bill
                </h2>
              </div>

              <div className="electricity-badge">

                <span>
                  ₱
                </span>

                <small>
                  BILL
                </small>

              </div>

            </div>


            <div className="input-grid">

              <div className="input-group">

                <label>
                  Customer Name
                </label>

                <div className="input-shell">

                  <span className="input-icon">
                    A
                  </span>

                  <input
                    type="text"
                    value={customerName}
                    onChange={(e) =>
                      setCustomerName(e.target.value)
                    }
                    placeholder="Enter customer name"
                  />

                </div>

              </div>


           
              <div className="input-group">

                <label>
                  Consumption (kWh)
                </label>

                <div className="input-shell">

                  <span className="input-icon">
                    #
                  </span>

                  <input
                    type="number"
                    min="0"
                    step="0.01"
                    value={consumption}
                    onChange={(e) =>
                      setConsumption(e.target.value)
                    }
                    placeholder="e.g. 250"
                  />

                </div>

              </div>

            </div>

=
            <div className="rate-guide">

              <div className="rate-guide-title">

                <span>
                  RATE GUIDE
                </span>

                <small>
                  Applied based on consumption
                </small>

              </div>


              <div className="rate-grid">

                <div className="rate-item">

                  <strong>
                    ₱10
                  </strong>

                  <span>
                    0–100 kWh
                  </span>

                </div>


                <div className="rate-item">

                  <strong>
                    ₱12
                  </strong>

                  <span>
                    101–200 kWh
                  </span>

                </div>


                <div className="rate-item">

                  <strong>
                    ₱15
                  </strong>

                  <span>
                    201–300 kWh
                  </span>

                </div>


                <div className="rate-item">

                  <strong>
                    ₱18
                  </strong>

                  <span>
                    Above 300 kWh
                  </span>

                </div>

              </div>

            </div>


      
            <div className="grade-actions">

              <button
                type="button"
                className="submit-btn"
                onClick={calculateBill}
              >
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
              <div className="grade-message">
                {error}
              </div>
            )}


         
            {totalBill && (
              <div className="grade-result">

                <div className="result-topline">

                  <div>

                    <span className="result-eyebrow">
                      BILL RESULT
                    </span>

                    <h3>
                      Electricity Bill
                    </h3>

                  </div>

                  <div className="result-score">
                    ₱
                  </div>

                </div>


                <div className="result-details">

                  <div className="result-row">

                    <span>
                      Customer Name
                    </span>

                    <strong>
                      {customerName}
                    </strong>

                  </div>


             
                  <div className="result-row">

                    <span>
                      Consumption
                    </span>

                    <strong>
                      {consumption} kWh
                    </strong>

                  </div>


              
                  <div className="result-row">

                    <span>
                      Rate Applied
                    </span>

                    <strong>
                      {rateApplied}
                    </strong>

                  </div>


             
                  <div className="result-row">

                    <span>
                      Total Bill
                    </span>

                    <strong className="bill-total">
                      {totalBill}
                    </strong>

                  </div>


                  <div className="result-row">

                    <span>
                      Usage Status
                    </span>

                    <strong
                      className={
                        usageStatus === "High Electricity Usage"
                          ? "usage-status usage-high"
                          : "usage-status usage-normal"
                      }
                    >
                      {usageStatus}
                    </strong>

                  </div>

                </div>

              </div>
            )}

          </div>

        </div>

      </div>

    </main>
  );
}

export default Activity4;