import React from 'react'
import logoImage from '../images/logo.jpg';
import loginImage from '../images/login-icon.png';

const Login = () => {
  return (
    <div className='login-enclosure' >
         <div className='login-container'>
         <div className='login-left'>
               <h2 className='login-title'>Welcome</h2> 
               <p className='login-subtitle'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo, porro deleniti! Reprehenderit hic laborum commodi voluptatibus corporis earum velit excepturi maiores dolores, consectetur explicabo repudiandae, quae veniam, architecto itaque consequatur!</p>
               <img src={loginImage} alt="fiber icon" className='fiber-icon' />
         </div>
            <div className='login-right'>
                <div className='login-header'>
                    <img src={logoImage} className='logoimage' alt="Prime Fiber Logo" /> 
                    <span>PrimeFibers Admin Login</span>

                </div>
                <div className='form-container'>
                <div className='form-group'>
                        <label htmlFor='email'> * Email</label>
                        <input type='text' id='email' placeholder='Email' />
                    </div>
                    <div className='form-group'>
                        <label htmlFor="password"> * Password</label>
                        <input type='password' id="password" placeholder='Password' />
                    </div>

                    <div className="form-group">
                        <input type='button' className='login-button btn btn-primary' value={'Log in'} />
                    </div>
                </div>
            </div>
        </div>
        <div className='m-45'>
            Made with love by Atul Ware
        </div>
    </div>
  )
}

export default Login
