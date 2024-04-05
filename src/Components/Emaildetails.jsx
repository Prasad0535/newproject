import React from 'react'
import { Link } from 'react-router-dom'
function Emaildetails() {
  return (
    <>
      <h1> Email Details</h1>
     <div>Emaildetails</div>
     <input type='text' placholder="Enter your mail ID"></input>
    <Link to="/adress"> <button>Next</button></Link>
    <Link to="/"> <button>Previouse</button></Link>
    </>
   
  )
}

export default Emaildetails