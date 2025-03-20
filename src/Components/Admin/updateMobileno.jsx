import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const UpdateMobileNo = () => {
  const [mobileNumbers, setMobileNumbers] = useState([]);
  const [selectedId, setSelectedId] = useState("");
  const [newMobileNo, setNewMobileNo] = useState("");

  // Fetch Mobile Numbers
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_API_BASE_URL}mobileno/`);
        setMobileNumbers(response.data.data);
      } catch (error) {
        console.error("Error fetching mobile numbers:", error);
      }
    };
    fetchData();
  }, []);

  // Handle selection change
  const handleSelectChange = (e) => {
    const selectedMobile = mobileNumbers.find(
      (item) => item._id === e.target.value
    );
    setSelectedId(selectedMobile?._id || "");
    setNewMobileNo(selectedMobile?.mobileNo || "");
  };

  // Handle input change
  const handleInputChange = (e) => {
    setNewMobileNo(e.target.value);
  };

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!selectedId || !newMobileNo) {
      alert("Please select and enter a mobile number.");
      return;
    }

    try {
      await axios.put(`${import.meta.env.VITE_API_BASE_URL}mobileno/${selectedId}`, {
        mobileNo: newMobileNo,
      });
      alert("Mobile number updated successfully!");

      // Refresh the list after update
      setMobileNumbers((prev) =>
        prev.map((item) =>
          item._id === selectedId ? { ...item, mobileNo: newMobileNo } : item
        )
      );
      setSelectedId("");
      setNewMobileNo("");
    } catch (error) {
      console.error("Error updating mobile number:", error);
      alert("Failed to update mobile number.");
    }
  };

  return (
    <div className="content">
      <h2 className="mb-4">Add Mobile Number</h2>
      <Link to="/admin/AddmobileNo">Back</Link>

      <form onSubmit={handleSubmit}>
        {/* Dropdown to select mobile number */}
        <div className="mb-3">
          <label className="form-label">Select Mobile No</label>
          <select
            className="form-control"
            onChange={handleSelectChange}
            value={selectedId}
          >
            <option value="">-- Select a Mobile No --</option>
            {mobileNumbers.map((data) => (
              <option key={data._id} value={data._id}>
                {data.mobileNo}
              </option>
            ))}
          </select>
        </div>

        {/* Input field to update mobile number */}
        <div className="mb-3">
          <label className="form-label">New Mobile No</label>
          <input
            type="text"
            className="form-control"
            value={newMobileNo}
            onChange={handleInputChange}
            required
            placeholder="Enter new mobile number"
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Update Mobile No
        </button>
      </form>
    </div>
  );
};

export default UpdateMobileNo;
