import logoImage from "../images/logo.jpg";
import loginImage from "../images/login-icon.png";
import { useEffect, useState } from "react";
import axios from "axios";
import { handleError, handleSuccess } from "../utils";
import { ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigate();


    const user = localStorage.getItem('loggedInUser');
    useEffect(()=>{
        if(user){
        navigation('/admin')
        }
    })

  // After submittion of form collect credentials
  // {} then post it to login api
  //  true / false if true then send it to internal pages if false stay here and show error message
  // if true localStorage
  const handleSubmit =async (e) =>{
e.preventDefault();

try{
    console.log({email,password});
    const data = await axios.post(`${import.meta.env.VITE_API_URL}admin`,{email,password});
    handleSuccess(data?.data?.message);
    // console.log(JSON.stringify(data?.data.user));
    localStorage.setItem('loggedInUser',JSON.stringify(data?.data?.user));
    navigation('/admin/');
    }
    catch(err){
        console.log('Error here:- ',err?.response?.data?.message)
        handleError(err?.response?.data?.message);
    }
  }

  return (
    <div className="login-enclosure">
      <div className="login-container">
        <div className="login-left">
          <h2 className="login-title">Welcome</h2>
          <p className="login-subtitle">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo,
            porro deleniti! Reprehenderit hic laborum commodi voluptatibus
            corporis earum velit excepturi maiores dolores, consectetur
            explicabo repudiandae, quae veniam, architecto itaque consequatur!
          </p>
          <img src={loginImage} alt="fiber icon" className="fiber-icon" />
        </div>
        <div className="login-right">
          <div className="login-header">
            <img src={logoImage} className="logoimage" alt="Prime Fiber Logo" />
            <span>PrimeFibers Admin Login</span>
          </div>
          <div className="form-container">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="email"> * Email</label>
                <input
                  type="text"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  id="email"
                  placeholder="Email"
                />
              </div>
              <div className="form-group">
                <label htmlFor="password"> * Password</label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  id="password"
                  placeholder="Password"
                />
              </div>

              <div className="form-group">
                <input
                  type="submit"
                  className="login-button btn btn-primary"
                  value={"Log in"}
                />
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="m-45">Made with love by Atul Ware</div>
      <ToastContainer />
    </div>
  );
};

export default Login;
