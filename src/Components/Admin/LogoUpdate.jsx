// src/components/UpdateLogo.js

import axios from "axios";
import { useState, useEffect } from "react";
import toast from "react-hot-toast";
import { useNavigate, useParams, Link } from "react-router-dom";

const Logo = () => {
  const [formData, setFormData] = useState({ img: "" });
  const [currentImage, setCurrentImage] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_API_BASE_URL}logo`);
      console.log("API Response:", response.data);
      setCurrentImage(response.data.data);
    } catch (error) {
      toast.error("Failed to fetch data", { position: "top-right" });
      console.error(error);
    }
  };

  const inputChangeHandler = (e) => {
    const { name, files } = e.target;
    if (files && files[0]) {
      setFormData({ ...formData, [name]: files[0] });
    }
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    const formDataToSend = new FormData();
    formDataToSend.append("img", formData.img);
    const { _id } = currentImage;

    await axios
      .put(`${import.meta.env.VITE_API_BASE_URL}logo/${_id}`, formDataToSend, {
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
          <Link to="/admin">Back</Link>

          {/* Add Logo Button */}
          <Link to="/admin/addlogo">
            <button className="btn btn-primary ms-3">Add Logo</button>
          </Link>

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
            <button type="submit" className="btn btn-success">
              Update Logo
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Logo;
