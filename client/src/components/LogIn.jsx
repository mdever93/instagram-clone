import React from 'react'

import './LogIn_SignUp.scss'

const LogIn = () => {
  return (
    <div className='login flex'>
      <img className='logo' src="https://www.pngkey.com/png/full/1-13459_instagram-font-logo-white-png-instagram-white-text.png" alt="" />
      <input className='username' type="text" name="username" id="username" placeholder='username' />
      <input className='password' type="password" name="password" id="password" placeholder='password' />
      <p className='forgot-password bold'>Forgot password?</p>
      <button className='login_btn bold' type="submit">Log in</button>
      <div className='footer'>
        <p> Don't have an account? <span className='bold'>Sign Up.</span></p>
      </div>
    </div>
  )
}

export default LogIn