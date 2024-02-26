import React, { useState } from 'react'
import './CSS/Login.css'
import axios from "axios"


const Login = () => {
  const [state,setState] = useState("Login")
const [formData,setFormData] = useState({
  username:"",
  password:"",
  email:""
})
const changeHandler = (e)=>{
setFormData({...formData,[e.target.name]:e.target.value})
}
//   const login = async ()=>{
// console.log("Login function",formData)
// let responseData;
// await fetch('http://localhost:4000/signup',{
//   method:"POST",
//   headers:{
//     Accept:'application/form-data',
//     'Content-Type':'application/json',
//   },
//   body:JSON.stringify(formData),
// }).then((response)=>response.json()).then((data)=>responseData=data)
// if(responseData.success){
//   localStorage.setItem('auth-token',responseData.token)
//   window.location.replace("/")
// }
//   }
  const login = async ()=>{
console.log("signup function",formData)
let responseData;

  try {
    const response = await axios.post('http://localhost:4000/login', formData, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }
    });

    responseData = response.data;

    if (responseData.success) {
      localStorage.setItem('auth-token', responseData.token);
      window.location.replace("/");
    }
    else{
      alert(responseData.errors)
    }
  } catch (error) {
    console.error('Error during login:', error);
  }

    
  }
const signup = async () => {
  console.log("Login function", formData);
  let responseData;

  try {
    const response = await axios.post('http://localhost:4000/signup', formData, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }
    });

    responseData = response.data;

    if (responseData.success) {
      localStorage.setItem('auth-token', responseData.token);
      window.location.replace("/");
    }
    else{
      alert(responseData.errors)
    }
  } catch (error) {
    console.error('Error during login:', error);
  }
};
  return (
    <div className='login'>
        <div className="login-container">
          <h1>{state}</h1>
          <div className="login-fields">
            {state==="Sign Up"?<input name='username' value={formData.username} onChange={changeHandler} type="text" placeholder='Your name' />:<></>}
            <input name='email' value={formData.email} onChange={changeHandler} type="email" placeholder='Your Email' />
            <input name='password' value={formData.password} onChange={changeHandler} type="password" placeholder='Password' />
          </div>
          <button onClick={()=>{state==="Login"?login():signup()}}>Continue</button>
          {state==="Sign Up"? <p className='login-login'>Already have an account? <span onClick={()=>{setState("Login")}}>Login here</span></p>:<p className='login-login'>Create an account?<span onClick={()=>{setState("Sign Up")}}>Click here</span></p>
          }
          

          <div className="login-agree">
            <input type="checkbox" name="" id="" />
            <p>By continuing,i agree to the terms of use & privacy policy.</p>
          </div>
        </div>
    </div>
  )
}

export default Login