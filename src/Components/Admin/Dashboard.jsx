import { Link } from "react-router-dom";
import axios from "axios";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

const Dashboard = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API_BASE_URL}user/getall`
        );
        console.log("API Response:", response.data);
        setUsers(response.data.data);
      } catch (error) {
        toast.error("Failed to fetch data", { position: "top-right" });
        console.error(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="dashboard-container">
      <h2 className="dashboard-title">Welcome to Dashboard</h2>

      <div className="table-wrapper">
        <table className="user-table">
          <thead>
            <tr>
              <th>#</th>
              <th>Full Name</th>
              <th>Mobile No</th>
              <th>Email</th>
              <th>Address</th>
            </tr>
          </thead>
          <tbody>
            {Array.isArray(users) && users.length > 0 ? (
              users.map((user, index) => (
                <tr key={user._id || index}>
                  <td>{index + 1}</td>
                  <td>{user.Full_Name}</td>
                  <td>{user.Mobile_No}</td>
                  <td>{user.Email}</td>
                  <td>{user.Address}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="no-data">
                  No data available
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Styles */}
      <style>{`
        .dashboard-container {
          width: calc(100% - 250px); /* Adjust width to account for sidebar */
          margin-left: 250px; /* Shift content right so it doesn't overlap sidebar */
          padding: 20px;
          text-align: center;
        }
        
        .dashboard-title {
          margin-bottom: 20px;
          font-size: 24px;
          font-weight: bold;
        }

        .table-wrapper {
          width: 100%;
          overflow-x: auto;
          padding: 0;
          display: flex;
          justify-content: center;
        }

        .user-table {
          width: 100%;
          max-width: 1100px;
          border-collapse: collapse;
          background: #fff;
          box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
          border-radius: 8px;
          overflow: hidden;
        }

        .user-table th, .user-table td {
          padding: 12px;
          border: 1px solid #ddd;
          text-align: left;
          white-space: nowrap;
        }

        .user-table th {
          background-color: #007bff;
          color: white;
          text-align: center;
        }

        .user-table tr:nth-child(even) {
          background-color: #f8f9fa;
        }

        .user-table tr:hover {
          background-color: #f1f1f1;
        }

        .no-data {
          text-align: center;
          font-weight: bold;
          padding: 15px;
          color: red;
        }

        @media (max-width: 768px) {
          .dashboard-container {
            width: 100%;
            margin-left: 0;
            padding: 10px;
          }
          .user-table {
            font-size: 14px;
          }
        }
      `}</style>
    </div>
  );
};

export default Dashboard;
