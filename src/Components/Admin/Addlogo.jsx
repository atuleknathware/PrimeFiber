import axios from "axios";
import { useState, useEffect } from "react";
import toast from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const Addlogo = () => {
  const [formData, setFormData] = useState({ img: "" });
  const [currentImage, setCurrentImage] = useState("");
  const navigate = useNavigate();
  const { id } = useParams(); // Get ID from URL

  // 🔍 Fetch existing logo if in "Update Mode"
  useEffect(() => {
    if (id) {
      axios
        .get(`http://localhost:8080/api/logo/getone/${id}`)
        .then((res) => {
          console.log("API Response:", res.data);
          if (res.data.data?.img) {
            setCurrentImage(
              res.data.data.img.startsWith("http")
                ? res.data.data.img
                : `http://localhost:8080${res.data.data.img}`
            );
          }
        })
        .catch((err) => {
          console.error("Error fetching logo:", err);
        });
    }
  }, [id]);

  // 📂 Handle Image Selection
  const inputChangeHandler = (e) => {
    const { name, files } = e.target;
    if (files && files[0]) {
      setFormData({ ...formData, [name]: files[0] });
    }
  };

  // 🚀 Handle Submit for both Add and Update
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formDataToSend = new FormData();
    formDataToSend.append("img", formData.img);

    // Check if ID exists for Update Mode
    if (id) {
      // Update Logo
      await axios
        .put(`http://localhost:8080/api/logo/update/${id}`, formDataToSend, {
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
    } else {
      // Create New Logo
      await axios
        .post("http://localhost:8080/api/logo/create", formDataToSend, {
          headers: { "Content-Type": "multipart/form-data" },
        })
        .then((res) => {
          toast.success(res.data.message, { position: "top-right" });
          setFormData({ img: "" });
          navigate("/admin/homeplans");
        })
        .catch((err) => {
          console.error("Upload Error:", err);
          toast.error("Failed to upload logo", { position: "top-right" });
        });
    }
  };

  return (
    <>
      <div className="content">
        <div className="mt-4">
          <h2 className="mb-4">{id ? "Update Logo" : "Add Logo"}</h2>
          <div>
            <Link to={"/admin"}>Back</Link>
          </div>

          {/* Display Current Image if in Update Mode */}
          {currentImage && (
            <div className="mb-3">
              <h5>Current Image:</h5>
              <img src={currentImage} alt="Current Logo" width="150" />
            </div>
          )}

          <form onSubmit={handleSubmit}>
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

            <button type="submit" className="btn btn-primary">
              {id ? "Update Logo" : "Add Logo"}
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Addlogo;
