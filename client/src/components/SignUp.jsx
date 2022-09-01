import React from 'react'

import './LogIn_SignUp.scss'

const SignUp = () => {
  return (
    <div className='signup flex'>
      <img className='logo' src="https://www.pngkey.com/png/full/1-13459_instagram-font-logo-white-png-instagram-white-text.png" alt="" />
      <p className='tagline bold'>Sign up to see photos and videos from your friends.</p>
      <input type="email" name="email" id="email" placeholder='email' />
      <input className='username' type="text" name="username" id="username" placeholder='username' />
      <input className='password' type="password" name="password" id="password" placeholder='password' />
      <button className='login_btn bold' type="submit">Log in</button>
      <div className='footer'>
        <p> Already have an account? <span className='bold'>Sign In.</span></p>
      </div>
    </div>
  )
}

export default SignUp