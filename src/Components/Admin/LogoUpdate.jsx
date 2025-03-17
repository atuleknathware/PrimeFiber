// src/components/UpdateLogo.js

import axios from "axios";
import { useState, useEffect } from "react";
import toast from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const Logo = () => {
  const [formData, setFormData] = useState({ img: "" });
  const [currentImage, setCurrentImage] = useState("");
  const navigate = useNavigate();


  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:8080/api/logo");
      console.log("API Response:", response.data); // Log response
      setCurrentImage(response.data.data);
    } catch (error) {
      toast.error("Failed to fetch data", { position: "top-right" });
      console.error(error);
    }
  };


  // 🔍 Fetch existing logo for Update Mode
  // useEffect(() => {
  //   if (id) {
  //     axios
  //       .get(`http://localhost:8080/api/logo/getone/${id}`)
  //       .then((res) => {
  //         console.log("API Response:", res.data);
  //         if (res.data.data?.img) {
  //           setCurrentImage(
  //             res.data.data.img.startsWith("http")
  //               ? res.data.data.img
  //               : `http://localhost:8080${res.data.data.img}`
  //           );
  //         }
  //       })
  //       .catch((err) => {
  //         console.error("Error fetching logo:", err);
  //       });
  //   }
  // }, [id]);

  // 📂 Handle Image Selection
  const inputChangeHandler = (e) => {
    const { name, files } = e.target;
    if (files && files[0]) {
      setFormData({ ...formData, [name]: files[0] });
    }
  };

  // 🔄 Handle Update for Editing an Existing Logo
  const handleUpdate = async (e) => {
    e.preventDefault();
    const formDataToSend = new FormData();
    formDataToSend.append("img", formData.img);
    const {_id} = currentImage;
 
    await axios
      .put(`http://localhost:8080/api/logo/${_id}`, formDataToSend, {
        headers: { "Content-Type": "multipart/form-data" },
      })
      .then((res) => {
        toast.success(res.data.message, { position: "top-right" });
        navigate("/admin/homeplans");
      })
      .catch((error) => {
        console.error("Error updating logo:", error);
        toast.error("Failed to update logo", { position: "top-right" });
      });
  };

  return (
    <>
      <div className="content">
        <div className="mt-4">
          <h2 className="mb-4">Update Logo</h2>
          <Link to={"/admin"}>Back</Link>

          {/* Display Current Image */}
          {currentImage && (
            <div className="mb-3">
              <h5>Current Image:</h5>
              <img src={currentImage.img} alt="Current Logo" width="150" />
            </div>
          )}

          <form onSubmit={handleUpdate}>
            <div className="mb-3">
              <label className="form-label">Image</label>
              <input
                style={{ height: "45px" }}
                type="file"
                className="form-control"
                name="img"
                accept="image/*"
                onChange={inputChangeHandler}
                required
              />
            </div>
            <button type="submit" className="btn btn-success">Update Logo</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Logo;
