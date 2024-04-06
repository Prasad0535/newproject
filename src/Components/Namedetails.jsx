import React from 'react'
import '../CSS/Name.css'
//import { useState } from 'react';
//import {useNavigate}  from 'react-router-dom';
import { Link} from 'react-router-dom'

function Namedetails({onNext}) {
  const [name,setname]=React.useState("");
  // const navigate=useNavigate();
  // const handleNext=()=>{
  //   onNext({name});
  // };
  // const handleNext=()=>{
  //   navigate({
  //     pathname:"/email",
  //     state:{name:name}
  //   })
  // }
  return(
  <>
  <h1>Namedetails</h1>
  <div className='input'>
  Name : <input onChange={(e)=>{setname(e.target.value)}} type="text" placeholder=' please enter your name. '></input>
  </div>
  
  <div className="button-container1">
                <Link to="/email"><button >Next</button></Link>    
            </div>

 </> 
  )
}
export default Namedetails