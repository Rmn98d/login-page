import React, { useState } from 'react'
import './LoginSignUp.css'
import emailIcon from '../assets/email.png';
import user from '../assets/user.png';
import lockIcon from '../assets/lock.png'


function Login() {
const [userRegister, setUserRegister]=useState({username:"",email:"",password:""});
const [action,setAction]=useState("Sign Up");
const [record,setRecord]=useState([]);


 const handleInput =(e)=>{
   const name = e.target.name;
   const value = e.target.value;
   console.log(name ,value); 
   setUserRegister({...userRegister,[name]:value})
    

 }

const handleSubmit= (e)=>{
e.preventDefault();
const newRecord = {...userRegister, id:new Date().getTime().toString() }
console.log(newRecord);
setRecord([...record, newRecord]);

setUserRegister({username:"",email:"",password:""});

}





  return (
<>
<div className='container'>
    <div className='header'>
      <div className='text'>{action}</div>
      <div className='underline'></div>

     <div className='inputs'>
     <form onSubmit={handleSubmit}>

      {action==="Login"?<div></div>:
      <div className='input'>
          <img src={user} alt='user-icon'/>
          <input type='text' autoComplete='off' name='username' value={userRegister.username}  onChange={handleInput} placeholder='Name'id="usename"></input>
        </div>}

       

        <div className='input'>
          <img src={emailIcon} alt='use-email'/>
          <input type='email' autoComplete='off' value={userRegister.email} name='email' onChange={handleInput} placeholder='Email Id' id="email"></input>
        </div>

        <div className='input'>
          <img src={lockIcon} alt='user-password'/>
          <input type='password' autoComplete='off' value={userRegister.password} name='password' onChange={handleInput} placeholder='Password' id="password"></input>
        </div>
        {action==="Sign Up"?<div></div>:
        <div className='forgot-password'>Lost Password  <span className=''><strong>Click Here</strong></span></div>
 
        }
        <div className='submit-container'>
            <button type="submit" className={action === "Login"?"submit gray":"submit"} onClick={()=>{setAction("Sign Up")}}>Sign Up</button>
            <button type="submit" className={action === "Sign Up"?"submit gray":"submit"} onClick={()=>{setAction("Login")}}>Login</button>

        </div>
     </form>

      </div>
      <div>
        {record.map((data)=>{
  const {username,email,password}=data;

return(
  <div className='showData' key={data.id}>
   <p>{username}</p>
   <p>{email}</p>
   <p>{password}</p>

  </div>
)        })}
      </div>
    </div>
  </div>
</>  )
}

export default Login;