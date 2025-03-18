import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const AddMobileNo = () => {
  const [mobileNo, setMobileNo] = useState("");

  const [getMobileNo, setgetMobileNo] = useState([]);

  useEffect(() => {
    const data = async () => {
      const response = await axios.get("http://localhost:8080/api/mobileno/");
      console.log(response.data.data);
      setgetMobileNo(response.data.data);
    };
    data();
  }, []);

  const inputChangeHandler = (e) => {
    setMobileNo(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!mobileNo) {
      alert("Please enter a mobile number.");
      return;
    }

    try {
      await axios.post("http://localhost:8080/api/mobileno/", { mobileNo });
      alert("Mobile number added successfully!");
      setMobileNo(""); // Clear input field after submission
    } catch (error) {
      console.error("Error adding mobile number:", error);
      alert("Failed to add mobile number.");
    }
  };

  return (
    <>
      <div>
        {getMobileNo.map((data) => {
          return (
            <div key={data._id}>
              <h1>{data.mobileNo}</h1>
            </div>
          );
        })}
      </div>
      <div className="content">
        <div className="mt-4">
          <h2 className="mb-4">Add Mobile Number</h2>
          <Link to={"/admin"}>Back</Link>

          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label">Mobile No</label>
              <input
                style={{ height: "45px" }}
                type="text"
                className="form-control"
                name="mobileNo"
                value={mobileNo}
                onChange={inputChangeHandler}
                required
                placeholder="Enter mobile number"
              />
            </div>
            <button type="submit" className="btn btn-success">
              Add Mobile No
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddMobileNo;
