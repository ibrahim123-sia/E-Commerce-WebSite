import React, { useContext,useState } from 'react';
import './CSS/LoginSignup.css';
import { useNavigate } from 'react-router-dom'; 
import axios from 'axios';
import { ShopContext } from '../Context/ShopContext'

const LoginSignup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [agreetoterms, setAgreetoterms] = useState(false);
  const navigate = useNavigate();
  const [isSignupVisible, setIsSignupVisible] = useState(true);
  const { setUsername } = useContext(ShopContext);  

  

  const handleChange = (e) => {
  const { name, value, type, checked } = e.target;

    if (type === 'checkbox') {
      setAgreetoterms(checked);
    } else if (name === 'email') {
      setEmail(value);
    } else if (name === 'password') {
      setPassword(value);
    } else if (name === 'name') {
      setName(value);
      setUsername(value);
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();  
    try {
      const response = await axios.get(`http://localhost:5000/login`, {
        params: {
          email: email,
          password: password,
        },
      });  
      
      if (response.data.success) {
        alert("Login successful!");
        navigate('/Shop');
      }
    }
    catch (error) {
      
      if (error.response) {
        const { status, data } = error.response;  
        
        if (status === 400) {
          alert(data.message || "Invalid email or password");
        }
         else {
          alert("An unexpected error occurred. Please try again.");
        }
      }
      else {        
        console.error("Error logging in", error);
        alert("An error occurred during login. Please check your connection.");
      }
    }
  };

  const handleSignup = async (e) => {
    e.preventDefault();
  
    if (!agreetoterms) {
      alert("You must agree to the terms and conditions");
      return;
    }
  
    try {
      const response = await axios.post('http://localhost:5000/signup', {
        name: name,
        email: email,
        password: password,
      });  
      
      if (response.data.success) {
        alert("Signup successful!");
      }
    } 
    catch (error) {
      if (error.response && error.response.status === 400 && error.response.data.message === 'User already exists') {
        alert("User already exists");
      } 
      else {
        console.error("Error signing up", error);
        alert("An error occurred while signing up");
      }
    }
  };
  
  
  
  const handleToggle = () => {
    setIsSignupVisible(!isSignupVisible);
  };

  return (
    
    <div className='login-signup'>      
      {isSignupVisible ? (
        <div className='mainsignup'>
          <div className='loginsinup-container1'>
            <h1>Signup</h1>
            <form className='loginsignup-fields1' onSubmit={handleSignup}>
              <input
                type='text'
                name='name'
                value={name}
                onChange={handleChange}
                placeholder='Name'
                required
              />
              <input
                type='email'
                name='email'
                value={email}
                onChange={handleChange}
                placeholder='Email Address'
                required
              />
              <input
                type='password'
                name='password'
                value={password}
                onChange={handleChange}
                placeholder='Password'
                required
              />
              <div className='loginsignup-agree'>
                <input
                  type='checkbox'
                  name='agreeToTerms'
                  checked={agreetoterms}
                  onChange={handleChange}
                />
                <p>
                  By Continuing, I agree to the terms of use & privacy policy.
                </p>
              </div>
              <button type='submit'>Signup</button>
            </form>
          </div>
          <div className="hello1">
            <div className="text1">
              <h1>Already have an account?</h1>
              <p>Don't miss out on our special offers and promotions!</p>
              <p>Log in to see what's waiting for you and make the most of your account</p>
              <button onClick={handleToggle}>LOGIN</button>
            </div>
          </div>
        </div>
      ) : (
        <div className="mainlogin">
          <div className="hello">
            <div className="text">
              <h1>Get Started with Us</h1>
              <p>Join our community and make the most of your shopping experience with us</p>
              <p>It only takes a minute to sign up and start enjoying the perks today!</p>
              <button onClick={handleToggle}>SIGN UP</button>
            </div>
          </div>
  
          <div className='loginsinup-container'>
            <h1>Login</h1>
            <form className='loginsignup-fields' onSubmit={handleLogin}>
              <input
                type='email'
                name='email'
                value={email}
                onChange={handleChange}
                placeholder='Email Address'
                required
              />
              <input
                type='password'
                name='password'
                value={password}
                onChange={handleChange}
                placeholder='Password'
                required
              />
              
              <button type='submit'>LOGIN</button>
              {/* <div className='forget'><a href="/forget">Forget Password?</a></div> */}
            </form>
          </div>
        </div>
      )}
    </div>
  );
  
};

export default LoginSignup;
