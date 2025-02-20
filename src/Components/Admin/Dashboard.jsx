import { Link } from "react-router-dom";
import axios from "axios";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

const Dashboard = () => {
   
  const [users, setUsers] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:8080/api/user/getall");
        console.log("API Response:", response.data); 
        setUsers(response.data.data); 
      } catch (error) {
        toast.error("Failed to fetch data", { position: "top-right" });
        console.error(error);
      }
    };
    fetchData();
  }, [])
  

  return (
    <>    
    
    <div className="content" >
        <h2>Welcome to Dashboard</h2>
     
      </div>

      <table
              style={{ marginTop: "20px", width: "100%", borderCollapse: "collapse", marginLeft:"20%"}}
            >
              <thead>
                <tr>
                  <th>#</th>
                  <th>Full_Name</th>
                  <th>Mobile_No</th>
                  <th>Email</th>
                  <th>Address</th>
                </tr>
              </thead>
              <tbody>
        {Array.isArray(users) ? (
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
            <td colSpan="10">No data available or invalid response.</td>
          </tr>
        )}
      </tbody>
      
            </table>
      </>
  )
}

export default Dashboard