import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const AddHomePlan = () => {

    const [formData, setFormData] = useState({
        planName: "",
        planSpeed: "",
        planData : "",
        oneMonth: "",
        threeMonth: "",
        sixMonth: "",
        twelveMonth: "",
        ott: "active",
      });

     const navigate=useNavigate();
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });

      };
    
      useEffect(()=>{
        console.log("This is getting called: - ", formData);
      },[formData])
      const handleSubmit = async(e) => {
        e.preventDefault();
        await axios.post(`${import.meta.env.VITE_API_BASE_URL}plans/create`,formData)
        .then((res)=>{
          toast.success(res.data.message,{position:"top-right"})
          setFormData({
            planName:"",
            planSpeed: "",
            planData : "",
            oneMonth: "",
            threeMonth: "",
            sixMonth: "",
            twelveMonth: "",
            ott: "active",
          })
          navigate("/admin/homeplans")
         
        })
        alert("Form submitted successfully!");
      };
  return (
    <div className="content">
         <div className=" mt-4">
      <h2 className="mb-4">Plan Details Form</h2>
      <form onSubmit={handleSubmit}>
        {/* Plan Name */}
        <div className="mb-3">
          <label className="form-label">Plan Name</label>
          <input type="text" className="form-control" name="planName" value={formData.planName} onChange={handleChange} required />
        </div>

        {/* Plan Speed */}
        <div className="mb-3">
          <label className="form-label">Plan Speed</label>
          <input type="text" className="form-control" name="planSpeed" value={formData.planSpeed} onChange={handleChange} required />
        </div>

        {/* Data */}
        <div className="mb-3">
          <label className="form-label">planData </label>
          <input type="text" className="form-control" name="planData" value={formData.planData} onChange={handleChange} required />
        </div>

        {/* Subscription Durations */}
        <div className="row">
          <div className="col-md-6 mb-3">
            <label className="form-label">1 Month</label>
            <input type="text" className="form-control" name="oneMonth" value={formData.oneMonth} onChange={handleChange} required />
          </div>
          <div className="col-md-6 mb-3">
            <label className="form-label">3 Month</label>
            <input type="text" className="form-control" name="threeMonth" value={formData.threeMonth} onChange={handleChange} required />
          </div>
          <div className="col-md-6 mb-3">
            <label className="form-label">6 Month</label>
            <input type="text" className="form-control" name="sixMonth" value={formData.sixMonth} onChange={handleChange} required />
          </div>
          <div className="col-md-6 mb-3">
            <label className="form-label">12 Month</label>
            <input type="text" className="form-control" name="twelveMonth" value={formData.twelveMonth} onChange={handleChange} required />
          </div>
        </div>


        {/* Action (Radio Buttons) */}
        <div className="mb-3">
          <label className="form-label">OTT</label>
          <div className="form-check">
            <input className="form-check-input" type="radio" name="ott" value="active" checked={formData.ott === "active"} onChange={handleChange} />
            <label className="form-check-label">Active</label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="radio" name="ott" value="inactive" checked={formData.ott === "inactive"} onChange={handleChange} />
            <label className="form-check-label">Inactive</label>
          </div>
        </div>

        {/* Submit Button */}
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
        </div>
  )
}

export default AddHomePlan