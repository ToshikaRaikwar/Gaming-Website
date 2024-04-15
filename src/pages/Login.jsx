import React, { useState } from 'react';
import google from '../assets/images/google.png';
import facebook from '../assets/images/facebook.png';
import { NavLink, useNavigate } from 'react-router-dom';


export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
 
  const navigate = useNavigate();
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const navreg = () => {
    navigate('/Register');
  };

  const handleLogin = async (req, res) => {
    try {
      const response = await fetch('http://localhost:3000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        // Authentication successful, redirect or perform any other action
        console.log('Authentication successful');
        window.location.href = 'http://localhost:5173/dashboard';

      } else {
        // Authentication failed, display error message
        console.error('Authentication failed');
        alert("Incorrect Credentials!");
      }
    } catch (error) {
      console.error('Error during login:', error);
    }
  };

  return (
    <>
      <div className='combine'>
        <section className='w-full h-screen relative'>
          <div className='background1'>
            <h1 style={{ margin: "180px", fontSize: "2rem" }}> Hello,Friend</h1>
            <br />
            <p style={{ margin: "-170px", fontSize: "1rem" }}>Enter Your details and start your journey</p><br />
            <button className='button'  onClick={navreg} style={{ margin: "190px" }}>Register</button>
          </div>
          <div className='login-container absolute top-28 left-0px right-80 z-10 flex flex-column items-right justify-end'>
            <p className='text login-text'>Login</p>
            <div className='icon-container'>
              <img src={google} width={"20px"} alt="Google Logo" />
              <img src={facebook} width={"20px"} alt="Facebook Logo" />
            </div>
            <br />
            <p className='newtext'>or Use your Account</p>
            <br />
            <input type='email' value={email} onChange={handleEmailChange} placeholder="Email" /><br />
            <input type='password' value={password} onChange={handlePasswordChange} placeholder="Password" />
            <br />
            <button className='btn' onClick={handleLogin}>LogIn</button>
          </div>
        </section>
      </div>
    </>
  );
}