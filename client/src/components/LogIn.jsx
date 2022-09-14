import React from 'react'
import { useState } from 'react'
import axios from 'axios'

import './LogIn_SignUp.scss'

const LogIn = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(username, password);
    return axios.post('/api/login', {username, password})
      .then((res) => {
        console.log(res.data);
      })

  }

  return (
    <div className='login flex'>
      <img className='logo' src="https://www.pngkey.com/png/full/1-13459_instagram-font-logo-white-png-instagram-white-text.png" alt="" />
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
      <p className='forgot-password bold'>Forgot password?</p>
      <button className='login_btn bold' type="submit" onClick={onSubmit} disabled={!(username && password)}>Log in</button>
      <div className='footer'>
        <p> Don't have an account? <span className='bold'>Sign Up.</span></p>
      </div>
    </div>
  )
}

export default LogIn