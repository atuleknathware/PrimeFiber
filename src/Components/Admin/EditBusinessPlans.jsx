import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import toast from 'react-hot-toast';

const EditBusinessPlans = () => {
    const [formData, setFormData] = useState({
        planName: "",
        planSpeed: "",
        planData : "",
        threeMonth: "",
        sixMonth: "",
        twelveMonth: "",
         });

      const {id}=useParams();
 
      const navigate=useNavigate();
    
      const inputChangeHandler = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        console.log(formData)
      };

      useEffect(() => {
        
        axios.get(`http://localhost:8080/api/businessPlans/getone/${id}`)
        .then((res)=>{
            console.log(res);
            setFormData(res.data.data)
        })
        .catch((err)=>{
            console.log(err)
        })
      }, []);

    
    
      const handleSubmit = async(e) => {
        e.preventDefault();
        await axios.put(`http://localhost:8080/api/businessPlans/update/${id}`,formData) 
        .then((res)=>{
          toast.success(res.data.message,{position:"top-right"})
          navigate("/admin/businessplan")
        })
        .catch(error=>console.log(error))
        // alert("Form submitted successfully!")
      };


  return (
    <>
      <div className="content">
         <div className=" mt-4">
      <h2 className="mb-4">Plan Details Form</h2>
      <div>
        <Link to={"/"}>Back</Link>
        <h3>Update User</h3>
      </div>
      <form onSubmit={handleSubmit}>
        {/* Plan Name */}
        <div className="mb-3">
          <label className="form-label">Plan Name</label>
          <input type="text" className="form-control" name="planName" value={formData.planName} onChange={inputChangeHandler} required />
        </div>

        {/* Plan Speed */}
        <div className="mb-3">
          <label className="form-label">Plan Speed</label>
          <input type="text" className="form-control" name="planSpeed" value={formData.planSpeed} onChange={inputChangeHandler} required />
        </div>

        {/* Data */}
        <div className="mb-3">
          <label className="form-label">planData </label>
          <input type="text" className="form-control" name="planData" value={formData.planData} onChange={inputChangeHandler} required />
        </div>

        {/* Subscription Durations */}
        <div className="row">
         
          <div className="col-md-6 mb-3">
            <label className="form-label">3 Month</label>
            <input type="text" className="form-control" name="threeMonth" value={formData.threeMonth} onChange={inputChangeHandler} required />
          </div>
          <div className="col-md-6 mb-3">
            <label className="form-label">6 Month</label>
            <input type="text" className="form-control" name="sixMonth" value={formData.sixMonth} onChange={inputChangeHandler} required />
          </div>
          <div className="col-md-6 mb-3">
            <label className="form-label">12 Month</label>
            <input type="text" className="form-control" name="twelveMonth" value={formData.twelveMonth} onChange={inputChangeHandler} required />
          </div>
        </div>


        {/* Action (Radio Buttons) */}
        

        {/* Submit Button */}
        <button type="submit" className="btn btn-primary">Update</button>
      </form>
    </div>
        </div>

    </>
  )
}

export default EditBusinessPlans