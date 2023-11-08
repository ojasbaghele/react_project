import React, { useState } from 'react';
import './ReactForm.css';


export default function ReactForm() {

  const [Email, setEmail] = useState();
  const [Password, setPassword] = useState();

  const HandleEmail= (event)=>{
    setEmail(event.target.value);
  }
  const HandlePassword= (event)=>{
    setPassword(event.target.value);
  }
  const HandleSubmit =(event)=>{
    event.preventDefault();
    alert('Hello '+ Email) ;
    document.querySelector('.output').innerHTML =  ` Hello ${Email}`;
  }

  return (
    <div>
        <form class="form" onSubmit={HandleSubmit}>
        <h1>Form</h1>
        <div className="form-group">
            <label for="email">Email address:</label>
            <input type="email" autoComplete="off" onChange={HandleEmail} value={Email} className="form-control" id="email"/>
        </div>
        <div className="form-group">
            <label for="pwd">Password:</label>
            <input type="text" autoComplete="off" onChange={HandlePassword} value={Password} className="form-control" id="pwd"/>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
        </form>
        <div class="output">
          
        </div>
    </div>
  )}