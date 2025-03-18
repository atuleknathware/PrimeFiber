import React from "react";
import axios from "axios";
import react, { useEffect, useState } from "react";

const MobileNotwo = () => {
  const [mobileNo, setMobileno] = useState(""); // Initialize as a string

  useEffect(() => {
    const fetchMobileNo = async () => {
      try {
        const response = await axios.get("http://localhost:8080/api/mobileno/");
        console.log("Fetched Mobile No:", response.data.data[0].mobileNo);
        setMobileno(response.data.data[1].mobileNo);
      } catch (error) {
        console.error("Error fetching mobile number:", error);
      }
    };

    fetchMobileNo();
  }, []);

  return (
    <>
      <div className="cta-container">
        <i className="fa-solid fa-phone"></i> <p>{mobileNo}</p>
      </div>
    </>
  );
};

export default MobileNotwo;
