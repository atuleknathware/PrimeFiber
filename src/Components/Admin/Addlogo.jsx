import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Addlogo = () => {
    const [formData, setFormData] = useState({ img: "" });
    const navigate = useNavigate();

    const inputChangeHandler = (e) => {
        const { name, files } = e.target;  
        if (files && files[0]) {  
            setFormData({ ...formData, [name]: files[0] });  
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formDataToSend = new FormData();
        formDataToSend.append("img", formData.img);  
         console.log("FormData Content to send:",formDataToSend);
 
        await axios.post("http://localhost:8080/api/logo/create", formDataToSend, {
            headers: { "Content-Type": "multipart/form-data" }
        })
        .then((res) => {
            console.log("checking image before",res.data);
            toast.success(res.data.message, { position: "top-right" });
            setFormData({ img: "" });
            console.log("checking image after setform",formData);

            navigate("/admin/homeplans");
        })
        .catch((err) => {
            console.error("Upload Error:", err);
            toast.error("Failed to upload logo", { position: "top-right" });
        });
    };

    return (
        <>
            <div className="content">
                <div className="mt-4">
                    <h2 className="mb-4">Plan Details Form</h2>
                    <div>
                        <Link to={"/admin"}>Back</Link>
                        <h3>Add Logo</h3>
                    </div>
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
                        <button type="submit" className="btn btn-primary">Add Logo</button>
                    </form>
                </div>
            </div>
        </>
    );
}

export default Addlogo;
