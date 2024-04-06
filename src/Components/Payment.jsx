import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../CSS/Payment.css'; // Import CSS file

function Payment() {
    const [paymentDone, setPaymentDone] = useState(false);
    const [paymentRemain, setPaymentRemain] = useState(false);

    const handlePaymentDoneChange = () => {
        setPaymentDone(!paymentDone);
    };

    const handlePaymentRemainChange = () => {
        setPaymentRemain(!paymentRemain);
    };

    return (
        <>
            <h1>Enter your Payment Details</h1>
            
            <div className="checkbox-container">
                <label>
                    <input
                        type="checkbox"
                        checked={paymentDone}
                        onChange={handlePaymentDoneChange}
                    />
                    Payment DONE
                </label>
                <label>
                    <input
                        type="checkbox"
                        checked={paymentRemain}
                        onChange={handlePaymentRemainChange}
                    />
                    Payment Remain
                </label>
            </div>
            <div className="button-container3">
               
                <Link to="/adress"><button>Previous</button></Link>
                <Link to="/summary"><button>Next</button></Link>
            </div>
        </>
    );
}

export default Payment;





























// import React from 'react'
// import '../CSS/Payment.css'
// import { Link } from 'react-router-dom'
// function Payment() {
//   return (
//     <>
//     <h1>Enter your Payment Details </h1>
//     <div>Payment</div>
  {/* <label><input type="checkbox">Payment DONE</input></label> */}
  {/* <label><input type="checkbox">Payment Remain</input></label> */}
//   <div className="button-container3">
//             <Link to="/summary"><button>Next</button></Link>
//             <Link to="/adress"><button>Previous</button></Link>
  
//             </div>
//     </>
//   )
// }
// export default Payment