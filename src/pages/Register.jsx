import React, { useState } from 'react';
import axios from 'axios'; // Import Axios for making HTTP requests
import google from '../assets/images/google.png';
import facebook from '../assets/images/facebook.png';

export default function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleRegistration = async () => {
    try {
      const response = await axios.post('http://localhost:3000/signup', {
        name,
        email,
        password
      });
      console.log(response.data); // Handle successful registration
      // Store the username in local storage
      localStorage.setItem('userName', name);
    } catch (error) {
      console.error('Registration failed:', error.message); // Handle registration error
    }
  };
  

  return (
    <>
      <div className='combine2'>
        <section className='w-full h-screen relative'>
          <div className='signup-container absolute top-28 left-0px right-80 z-10 flex flex-column items-right justify-end'>
            <p className='text login-text'>Register</p>
            <p>Enter Your Email and password to enter:</p>
            <br/>
            <input type='text' value={name} onChange={handleNameChange} placeholder="Name" /><br/>
            <input type='email' value={email} onChange={handleEmailChange} placeholder="Email" /><br/>
            <input type='password' value={password} onChange={handlePasswordChange} placeholder="Password" />
            <br/>
            <br/>
            <button className='btn2' onClick={handleRegistration}>Register</button>
          </div>
          <div className='background2'>
            <h1 style={{margin: "180px", fontSize: "2rem"}}> Start Your Journey</h1>
            <br />
            <p style={{margin: "-170px", fontSize: "1rem"}}>Enter Your details and start your journey</p><br />
            <button className='button' style={{margin: "190px"}}>Register</button>
          </div>
        </section>
      </div>
    </>
  );
}