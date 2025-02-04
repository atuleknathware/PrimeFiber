import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./QueryForm.css";
import { ToastContainer } from "react-toastify";
import { handleError, handleSuccess } from "./utils";

const QueryForm = () => {
  const [signupInfo, setSignupInfo] = useState({
    Full_Name: "",
    Mobile_No: "",
    Email: "",
    Address: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    const copySignupinfo = { ...signupInfo };
    copySignupinfo[name] = value;
    setSignupInfo(copySignupinfo);
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    const { Full_Name, Mobile_No, Email, Address } = signupInfo;
    if (!Full_Name || !Mobile_No || !Email || !Address) {
      return handleError("Full_Name,Mobile_No,Email,Address Are Required");
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
        setTimeout(() => {
          navigate("/");
        }, 1000);
      } else if (error) {
        const details = error?.details[0].message;
        handleError(details);
      } else if (!success) {
        handleError(message);
      }
      console.log(result);
    } catch (err) {
      handleError(err);
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

        <button type="submit" className="submit-btn">
          Enquire
        </button>
      </form>
      <ToastContainer />
    </div>
  );
};

export default QueryForm;
