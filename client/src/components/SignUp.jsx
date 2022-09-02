import React from 'react'
import { useEffect, useState } from 'react';

import './LogIn_SignUp.scss'

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  return (
    <div className='signup flex'>
      <img className='logo' src="https://www.pngkey.com/png/full/1-13459_instagram-font-logo-white-png-instagram-white-text.png" alt="" />
      <p className='tagline bold'>Sign up to see photos and videos from your friends.</p>
      <input
        className='email'
        type="email"
        placeholder='email'
        value={email}
        onChange={(e) => {
          setEmail(e.target.value)
        }}
      />
      <input
        className='username'
        type="text"
        placeholder='username'
        value={username}
        onChange={(e) => {
          setUsername(e.target.value)
        }}
      />
      <input
        className='password'
        type="password"
        placeholder='password'
        value={password}
        onChange={(e) => {
          setPassword(e.target.value)
        }}
      />
      <button className='login_btn bold' type="submit">Log in</button>
      <div className='footer'>
        <p> Already have an account? <span className='bold'>Sign In.</span></p>
      </div>
    </div>
  )
}

export default SignUp