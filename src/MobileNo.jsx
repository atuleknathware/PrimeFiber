import React from "react";
import axios from "axios";
import react, { useEffect, useState } from "react";

const MobileNo = () => {
  const [mobileNo, setMobileno] = useState(""); // Initialize as a string

  useEffect(() => {
    const fetchMobileNo = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_API_BASE_URL}mobileno/`);
        console.log("Fetched Mobile No:", response.data.data[0].mobileNo);
        setMobileno(response.data.data[0].mobileNo);
      } catch (error) {
        console.error("Error fetching mobile number:", error);
      }
    };

    fetchMobileNo();
  }, []);

  return (
    <a href={`tel:${mobileNo}`} className="cta-button">
      <div className="cta-container">
        <i className="fa-solid fa-phone"></i> {mobileNo}
      </div>
    </a>
  );
};

export default MobileNo;
