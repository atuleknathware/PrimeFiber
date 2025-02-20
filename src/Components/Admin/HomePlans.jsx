import { Link } from "react-router-dom";
import axios from "axios";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

const HomePlans = () => {
  const [users, setUsers] = useState([]); // State to store user data
  // console.log("Hello From HomePlans");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:8080/api/plans/getAll");
        console.log("API Response:", response.data); 
        setUsers(response.data.data); 
      } catch (error) {
        toast.error("Failed to fetch data", { position: "top-right" });
        console.error(error);
      }
    };
    fetchData();
  }, []);
  

  const deleteUser = async (userId) => {
    try {
      const res = await axios.delete(
        `http://localhost:8080/api/plans/delete/${userId}`
      );

      setUsers((prevUsers) => prevUsers.filter((user) => user._id !== userId));
      toast.success(res.data.msg, { position: "top-right" }); // Show success toast after successful deletion
    } catch (error) {
      // ** Highlighted Error Handling **
      toast.error("Failed to delete user", { position: "top-right" }); // Error message shown if delete fails
      console.error(error); // Log the actual error for debugging
    }
  };

  return (
    <div className="content">
      <h2>Welcome to Plans Management</h2>
      <p>Here is your admin dashboard.</p>
      <Link
        to="/admin/homeplans/add"  
        style={{
          padding: "8px 16px",
          background: "#4CAF50",
          color: "white",
          textDecoration: "none",
          borderRadius: "4px",
        }}
      >
        Add New
      </Link>

      <table
        style={{ marginTop: "20px", width: "100%", borderCollapse: "collapse" }}
      >
        <thead>
          <tr>
            <th>#</th>
            <th>Plan Name</th>
            <th>Plan Speed</th>
            <th>Data</th>
            <th>1 Month</th>
            <th>3 Month</th>
            <th>6 Month</th>
            <th>12 Month</th>
            <th>OTT</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
  {Array.isArray(users) ? (
    users.map((user, index) => (
      <tr key={user._id}>
        <td>{index + 1}</td>
        <td>{user.planName}</td>
        <td>{user.planSpeed}</td>
        <td>{user.planData}</td>
        <td>{user.oneMonth}</td>
        <td>{user.threeMonth}</td>
        <td>{user.sixMonth}</td>
        <td>{user.twelveMonth}</td>
        <td>{user.ott==='active'?<i className="fa-solid fa-check green"></i>:<i className="fa-solid fa-xmark red"></i>}  </td>
        <td>
          {/* <button onClick={() => deleteUser(user._id)}>Delete</button> */}
          <i onClick={() => { if(confirm('Do you really want to delete this record?')) {deleteUser(user._id)}}} className="fa-solid fa-trash-can"></i> &nbsp;  &nbsp;
          <Link to={`/admin/homeplans/edit/`+user._id}><i className="fa-solid fa-pencil"></i></Link>

        </td>
      </tr>
    ))
  ) : (
    <tr>
      <td colSpan="10">No data available or invalid response.</td>
    </tr>
  )}
</tbody>

      </table>
    </div>
  );
};

export default HomePlans;
