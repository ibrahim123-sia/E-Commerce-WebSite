import React from 'react'
import './CSS/LoginSignup.css'
const LoginSignup = () => {
  return (
    <div className='login-signup'>
        <div className='loginsinup-container'>
          <h1>Signup</h1>
           <div className='loginsignup-fields'>
            <input type="text" placeholder='Your Name'/>
            <input type="email" placeholder='Email Address' />
            <input type="password" placeholder='Password'/>
            </div>
            <button>Continue</button>
            <p className="loginsignup-login">Already Have An Account? <span>Login Here</span></p>
            <div className='loginsignup-agree'>
              <input type="checkbox" name='' id=''/>
              <p>By Continuing, i agree to the term of use & privicy policy.</p>
            </div>
        </div>
    </div>
  )
}

export default LoginSignup
