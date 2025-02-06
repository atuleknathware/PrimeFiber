import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./QueryForm.css";
import { ToastContainer } from "react-toastify";
import { handleError, handleSuccess } from "./utils";

const QueryForm = () => {
  const [signupInfo, setSignupInfo] = useState({
    Full_Name: "",
    Mobile_No: "",
    Email: "",
    Address: "",
    Service_Type: "", // Default empty, so user must select
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSignupInfo((prev) => ({ ...prev, [name]: value }));
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    const { Full_Name, Mobile_No, Email, Address, Service_Type } = signupInfo;

    if (!Full_Name || !Mobile_No || !Email || !Address || !Service_Type) {
      return handleError("All fields are required, including Service Type.");
    }

    try {
      const url = "http://localhost:8080/api/query";
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(signupInfo),
      });

      const result = await response.json();
      const { success, message, error } = result;

      if (success) {
        handleSuccess(message);
        setTimeout(() => navigate("/"), 1000);
      } else {
        handleError(error?.details?.[0]?.message || message);
      }
    } catch (err) {
      handleError("An error occurred while submitting the form.");
    }
  };

  return (
    <div className="query-form-container">
      <h2>Contact Us</h2>
      <form onSubmit={handleSignup} className="query-form">
        <label htmlFor="exampleInputName1" className="form-label">
          Full Name
        </label>
        <input
          onChange={handleChange}
          type="text"
          className="form-control"
          id="exampleInputName1"
          name="Full_Name"
          value={signupInfo.Full_Name}
        />

        <label htmlFor="exampleInputMobile" className="form-label">
          Mobile No
        </label>
        <input
          onChange={handleChange}
          type="number"
          className="form-control"
          id="exampleInputphone1"
          name="Mobile_No"
          value={signupInfo.Mobile_No}
        />

        <label htmlFor="exampleInputEmail1" className="form-label">
          Email address
        </label>
        <input
          onChange={handleChange}
          type="email"
          className="form-control"
          id="exampleInputEmail1"
          name="Email"
          value={signupInfo.Email}
        />

        <label htmlFor="exampleInputAddress" className="form-label">
          Address
        </label>
        <input
          onChange={handleChange}
          type="text"
          className="form-control"
          id="exampleInputAddress"
          name="Address"
          value={signupInfo.Address}
          style={{ height: "120px", resize: "vertical" }}
        />

        <label htmlFor="serviceType" className="form-label">
          Select Service Type
        </label>
        <select
          onChange={handleChange}
          className="form-control"
          id="serviceType"
          name="Service_Type"
          value={signupInfo.Service_Type}
        >
          <option value="" disabled>
            -- Select Service Type --
          </option>
          <option value="Home Broadband">Home Broadband</option>
          <option value="Bandwidth for Business">Bandwidth for Business</option>
        </select>

        <button
          type="submit"
          className="submit-btn"
          style={{ width: "200px", marginLeft: "45%", marginBottom: "30px" }}
        >
          Enquire
        </button>
      </form>
      <ToastContainer />
    </div>
  );
};

export default QueryForm;
