import React from 'react'
import { Link } from 'react-router-dom'
function Payment() {
  return (
    <>
    <h1>Enter your Payment Details </h1>
    <div>Payment</div>
    <Link to="/summary"> <button>Summary</button></Link>
    <Link to="/adress"> <button>Previouse</button></Link>
    </>
  )
}
export default Payment