import React from 'react'
import { Link } from 'react-router-dom'
function Summary() {
  return (
    <>
      <h1>View Summary </h1>
        <div className="sum">Summary </div>
        <Link to="/payment"> <button>Previouse</button></Link> 
       
    </>
 
  )
}

export default Summary