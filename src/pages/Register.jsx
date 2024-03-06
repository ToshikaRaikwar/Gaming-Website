import React, { useState } from 'react';
import google from '../assets/images/google.png';
import facebook from '../assets/images/facebook.png';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
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
            <button className='btn2'>Register</button>
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
