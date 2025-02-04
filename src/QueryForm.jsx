import React from 'react';
import './QueryForm.css';

const QueryForm = () => {
  return (
    <div className="query-form-container">
      <h2>Contact Us</h2>
      <form className="query-form">
        <label htmlFor="exampleInputName1" className="form-label">Full Name</label>
        <input type="text" className="form-control" id="exampleInputName1" />

        <label htmlFor="exampleInputMobile" className="form-label">Mobile No</label>
        <input type="number" className="form-control" id="exampleInputphone1" />

        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
        <input type="email" className="form-control" id="exampleInputEmail1" />


        <label htmlFor="exampleInputAddress" className="form-label">Address</label>
        <input type="text" className="form-control" id="exampleInputAddress" style={{   height: "120px",
    resize: "vertical" }}/>

        
       

        <button type="submit" className="submit-btn">Enquire</button>
      </form>
    </div>
  );
}

export default QueryForm;
