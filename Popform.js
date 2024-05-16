import React, { useState } from "react";
import "./PopForm.css"; 

function PopupForm() {
  const [isCompanyPopupOpen, setIsCompanyPopupOpen] = useState(false);
  const [isEmployeePopupOpen, setIsEmployeePopupOpen] = useState(false);

  const toggleCompanyPopup = () => {
    setIsCompanyPopupOpen(!isCompanyPopupOpen);
  };

  const toggleEmployeePopup = () => {
    setIsEmployeePopupOpen(!isEmployeePopupOpen);
  };

  return (
    <div>
      <button className="btn-open-popup" onClick={toggleCompanyPopup}>
        COMPANY PROFILE
      </button>
      
      {isCompanyPopupOpen && (
        <div className="overlay-container show">
          <div className="popup-box">
            <h2 style={{ color: "green" }}>Company Profile Popup Form</h2>
            <form className="form-container">
              <label className="form-label" htmlFor="companyName">
                Company Name:
              </label>
              <input
                className="form-input"
                type="text"
                placeholder="Enter Your Company Name"
                id="companyName"
                name="companyName"
                required
              />

              {/* Add more fields as needed */}

              <button className="btn-submit" type="submit">
                Submit
              </button>
            </form>

            <button className="btn-close-popup" onClick={toggleCompanyPopup}>
              Close
            </button>
          </div>
        </div>
      )}

      <button className="btn-open-popup" onClick={toggleEmployeePopup}>
        EMPLOYEE PROFILE
      </button>

      {isEmployeePopupOpen && (
        <div className="overlay-container show">
          <div className="popup-box">
            <h2 style={{ color: "green" }}>Employee Profile Popup Form</h2>
            <form className="form-container">
              <label className="form-label" htmlFor="employeeName">
                Employee Name:
              </label>
              <input
                className="form-input"
                type="text"
                placeholder="Enter Your Employee Name"
                id="employeeName"
                name="employeeName"
                required
              />

              {/* Add more fields as needed */}

              <button className="btn-submit" type="submit">
                Submit
              </button>
            </form>

            <button className="btn-close-popup" onClick={toggleEmployeePopup}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default PopupForm;
