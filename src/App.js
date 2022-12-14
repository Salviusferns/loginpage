import { useState } from "react";
import './App.css';
import React from 'react';

function App(){
  const [formData, setFormData] = useState({
    email: "",
    passworld: ""
  })
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [passwordShown, setPasswordShown] = useState(false);
  const togglePassword = () => {
    setPasswordShown(!passwordShown);
    
  };
  return (
    <div className='app'>
      <div className='box'>
         <div className='input'>
          <form>
            <div className='main'>
              <div className='header'>
                <h1>Login</h1>
              </div>
              <input value= {formData.email} text="text" placeholder='Email'/>
              <input type={passwordShown ? "text" : "password"} value={formData.password} placeholder='Password'/>
            </div>
            <div className='check'>
              <input type="checkbox" id='checkbox' onClick={togglePassword}/>
              <label>Show password</label>
            </div>
            <div className='footer'>
              <button>Login</button>
              <p>not got a account <a href='akjhsakhsa'>click here</a> to create one</p>
            </div>
          </form>
        </div>
      </div>
    </div>
      
      
  );
}

export default App;
