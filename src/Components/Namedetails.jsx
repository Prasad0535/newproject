import React from 'react'
import '../CSS/Name.css'
import { useState } from 'react';
import {useNavigate}  from 'react-router-dom';
import { Link} from 'react-router-dom'

function Namedetails({onNext}) {
  const [name,setName]=React.useState("");
  const handleChange=(e)=>{setName(e.target.value);};
  // const handleSubmit=(e)=>{e.preventDefault();
  onNext(name);
  const navigate=useNavigate();
  // const handleNext=()=>{
  //   onNext({name});
  // };
  const handleNext=()=>{
    navigate({
      pathname:"/email",
      state:{name:name}
    })
  }


return(
  <>
  <h1>Namedetails</h1>
  <form onSubmit={handleNext}>
  <div className='input'>
  {/* (e)=>{setName(e.target.value)} */}
  Name : <input onChange={handleChange} type="text" placeholder=' please enter your name. '></input>
  </div>
  
  <div className="button-container1">
                <Link to="/email"><button >Next</button></Link>    
            </div>
  </form>
 

 </> 
  )
}
export default Namedetails