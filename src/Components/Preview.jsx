import React from 'react'
import '../CSS/Preview.css'
import { Link } from 'react-router-dom'
function Preview() {
    function alertMessage(){
        alert('Submitted Successfully')
    }
  return (
    
   <>
   <div className="box">
   <div>Name : Prasad subhash sonawane</div>   
        <div>Email: prasadsonawane101@gmial.com</div>
        <div>Adress:Aurangabad</div> 
        Payment Details : Payment DONE
   </div>

   <div className="button5">
   <Link to="/"><button1 onClick={alertMessage}>SUBMIT</button1></Link>
   </div>
   
    </>
  )
}

export default Preview