import React from 'react';
import { useLocation } from 'react-router-dom';
import '../CSS/Summary.css'; // Import CSS file
import { Link } from 'react-router-dom';
function Summary() {
    const location = useLocation();
    const { name, email, address, paymentDone, paymentRemain } = location.state || {};

    return (
        <div className="summary-container">
            <h1>View Summary</h1>
            <div className="summary-details">
                <p>Name: {name}</p>
                <p>Email: {email}</p>
                <p>Address: {address}</p>
                <p>Payment Status: {paymentDone ? 'Payment DONE' : ''} {paymentRemain ? 'Payment Remain' : ''}</p>
            </div>
            <div className="button-container4">
                <Link to="/payment"><button>Previouse</button></Link>
                <Link to="/"><button>SUBMIT</button></Link>
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