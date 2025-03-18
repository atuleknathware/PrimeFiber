import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const AddMobileNo = () => {
  const [mobileNo, setMobileNo] = useState("");
  const [getMobileNo, setGetMobileNo] = useState([]);

  // Fetch mobile numbers from API
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:8080/api/mobileno/");
        setGetMobileNo(response.data.data);
      } catch (error) {
        console.error("Error fetching mobile numbers:", error);
      }
    };
    fetchData();
  }, []);

  // Handle input change
  const inputChangeHandler = (e) => {
    setMobileNo(e.target.value);
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!mobileNo) {
      alert("Please enter a mobile number.");
      return;
    }

    try {
      await axios.post("http://localhost:8080/api/mobileno/", { mobileNo });
      alert("Mobile number added successfully!");
      setMobileNo(""); // Clear input field

      // Refresh the list after adding new number
      const response = await axios.get("http://localhost:8080/api/mobileno/");
      setGetMobileNo(response.data.data);
    } catch (error) {
      console.error("Error adding mobile number:", error);
      alert("Failed to add mobile number.");
    }
  };

  return (
    <div className="container">
      {/* Page Heading */}
      <h2 className="page-heading">Manage Mobile Numbers</h2>

      {/* Mobile Numbers List */}
      <div className="mobile-list">
        {getMobileNo.map((data) => (
          <div key={data._id} className="mobile-card">
            <h3>{data.mobileNo}</h3>
          </div>
        ))}
      </div>

      {/* Add Mobile Number Form */}
      <div className="form-container">
        <h2>Add Mobile Number</h2>
        <Link to="/admin" className="back-link">
          ⬅ Back
        </Link>

        <form onSubmit={handleSubmit} className="mobile-form">
          <div className="input-group">
            <label>Mobile No</label>
            <input
              type="text"
              name="mobileNo"
              value={mobileNo}
              onChange={inputChangeHandler}
              required
              placeholder="Enter mobile number"
            />
          </div>
          <button type="submit" className="submit-btn">
            Add Mobile No
          </button>
        </form>
      </div>

      {/* Styles */}
      <style>{`
        /* Global Container */
        .container {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 20px;
        }

        /* Page Heading */
        .page-heading {
          font-size: 24px;
          font-weight: bold;
          margin-bottom: 20px;
          text-align: center;
        }

        /* Mobile Number List */
        .mobile-list {
          display: flex;
          flex-wrap: wrap;
          gap: 15px;
          justify-content: center;
          margin-bottom: 30px;
          width: 100%;
          max-width: 800px;
        }

        /* Mobile Number Card */
        .mobile-card {
          background: #f8f9fa;
          padding: 15px;
          border-radius: 8px;
          box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
          text-align: center;
          font-size: 18px;
          font-weight: bold;
          width: 180px;
          height: 60px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        /* Form Container */
        .form-container {
          background: white;
          padding: 25px;
          border-radius: 10px;
          box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.2);
          text-align: center;
          width: 100%;
          max-width: 400px;
        }

        /* Back Link */
        .back-link {
          display: inline-block;
          margin-bottom: 15px;
          text-decoration: none;
          color: #007bff;
          font-size: 14px;
        }

        /* Mobile Form */
        .mobile-form {
          display: flex;
          flex-direction: column;
          gap: 15px;
        }

        /* Input Group */
        .input-group {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          width: 100%;
        }

        .input-group label {
          font-weight: bold;
          margin-bottom: 5px;
        }

        .input-group input {
          width: 100%;
          padding: 10px;
          border: 1px solid #ccc;
          border-radius: 5px;
        }

        /* Submit Button */
        .submit-btn {
          background: #28a745;
          color: white;
          padding: 12px;
          border: none;
          border-radius: 5px;
          cursor: pointer;
          font-size: 16px;
          font-weight: bold;
          transition: background 0.3s;
        }

        .submit-btn:hover {
          background: #218838;
        }

        /* Responsive Design */
        @media (max-width: 600px) {
          .mobile-card {
            width: 100%;
            max-width: 250px;
          }

          .form-container {
            width: 100%;
            padding: 20px;
          }
        }
      `}</style>
    </div>
  );
};

export default AddMobileNo;
