import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";

const Logo = () => {
  const [formData, setFormData] = useState({
    img: "",
  });
  const [currentImage, setCurrentImage] = useState("");

  const { id } = useParams();

  const navigate = useNavigate();

  const inputChangeHandler = (e) => {
    if (e.target.files && e.target.files[0]) {
      const selectedFile = e.target.files[0];
      console.log("Selected File:", selectedFile); // ✅ Debug File
      setFormData({ img: selectedFile });
    }
  };

  // useEffect(() => {
  //   axios.get(`http://localhost:8080/api/logo/getonelogo/${id}`)
  //   .then((res)=>{
  //       console.log(res);
  //       setFormData(res.data.data)
  //   })
  //   .catch((err)=>{
  //       console.log(err)
  //   })
  // }, []);

  useEffect(() => {
    if (!id) {
      console.error("❌ No ID found in URL");
      return;
    }

    console.log("✅ ID from URL:", id);
    axios
      .get(`http://localhost:8080/api/logo/getone/${id}`)
      .then((res) => {
        console.log("API Response:", res.data);
        if (res.data.data?.img) {
          setCurrentImage(res.data.data.img.startsWith("http") ? res.data.data.img : `http://localhost:8080${res.data.data.img}`);
        }
        setFormData(res.data.data); // Ensure API response matches expected structure
      })
      .catch((err) => {
        console.error("Error fetching logo:", err);
      });
  }, [id]);

  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   const formDataToSend = new FormData();
  //   formDataToSend.append("img", formData.img);

  //   await axios.put(`http://localhost:8080/api/logo/update/${id}`, formDataToSend, {
  //     headers: { "Content-Type": "multipart/form-data" }
  //   })
  //   .then((res) => {
  //     toast.success(res.data.message, { position: "top-right" });
  //     navigate("/admin/homeplans");
  //   })
  //   .catch(error => console.log(error));
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formDataToSend = new FormData();
    formDataToSend.append("img", formData.img);

    // ✅ Debug: Check if FormData contains the file
    for (let pair of formDataToSend.entries()) {
      console.log(pair[0], pair[1]); // Logs FormData keys and values
    }

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
      });
  };

  return (
    <>
      <div className="content">
        <div className=" mt-4">
          <h2 className="mb-4">Plan Details Form</h2>
          {currentImage ? (
        <img src={currentImage} alt="Current Logo" width="150" />
      ) : (
        <p>No logo available</p>
      )}
          <div>
            <Link to={"/admin"}>Back</Link>
            <h3>Update User</h3>
          </div>
          <form onSubmit={handleSubmit}>
            {/* Plan Name */}
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

            {/* Submit Button */}
            <button type="submit" className="btn btn-primary">
              Update
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Logo;
