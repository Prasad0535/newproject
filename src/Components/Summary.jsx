import React, { useState } from 'react';

import '../CSS/Summary.css'; // Import CSS file
import { Link } from 'react-router-dom';
// import Namedetails from './Namedetails';
import Emaildetails from './Emaildetails';
function Summary({userInfo}) {
 
    function alertMessage(){
        alert('Submitted Successfully')
    }
    const [step, setStep]=useState(1);
    const[name,setName]=useState("");
    const[email,setEmail]=useState("");
    const handleNext=(value)=>{
        switch(step){
            case 1:setName(value);
            break;
            case 2 : setEmail(value);
            break;
            default : 
            break;
        }
        if(step < 2){
            setStep(step+1)
        }else{
            console.log('Name',name);
            console.log('Email',email);
        }
    }
    return (
        <div className="summary-container">
            <h1>View Summary</h1>
             {/* {step ===1 && <Namedetails onNext={handleNext} />}  */}
            {step ===2 && <Emaildetails onNext={handleNext} />} 
            {/* <div className="summary-details">
                <p>Name: {userInfo?.name}</p>
                <p>Email: {userInfo.email}</p>
                <p>Address: {userInfo.address}</p>
                <p>Payment Status: {userInfo.paymentDone ? 'Payment DONE' : ''} {userInfo.paymentRemain ? 'Payment Remain' : ''}</p> 
            </div> */}
            <div className="button-container4">
                <Link to="/payment"><button>Previouse</button></Link>
                <Link to="/preview"><button>Preview</button></Link> 
                <Link to="/"><button onClick={alertMessage}>SUBMIT</button></Link>
            </div>
        </div>
    );
}

export default Summary;






























// import React from 'react'
// import '../CSS/Summary.css'
// import { useLocation } from 'react-router-dom'
// import { Link } from 'react-router-dom'
// function Summary() {
//     const location=useLocation();
//     const(name,email,adress, paymentDone, paymentRemain } = location.state || {};
//   return (
//     <>
//       <h1>View Summary </h1>
//       <div className="button-container4">
//                 <Link to="/"><button>SUBMIT</button></Link>    
//             </div>
//     </>
 
//   )
// }

// export default Summary