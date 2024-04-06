import React from 'react';
import { Link } from 'react-router-dom';
import '../CSS/Adress.css'; // Import CSS file

function Adress() {
    return (
        <>
            <h1>Enter your Address</h1>
            <div className="add">
                {/* <label htmlFor="address">Address</label> */}
                <textarea id="address" name="address" rows="4" cols="50" placeholder="Enter your address"></textarea>
            </div>
            <div className="button-container2">
            <Link to="/email"><button>Previous</button></Link>
            <Link to="/payment"><button>Next</button></Link>
     
  
            </div>
            </>       
    );
}

export default Adress;



































// import React from 'react'
// import { Link } from 'react-router-dom'
// import '../CSS/Adress.css'
// function Adress() {
//   return (
//     <>
//        <h1>Enter your Address </h1>
//          <div classname="add">Adress
//          <label for="w3review">Review of W3Schools:</label>

// <textarea id="w3review" name="wereview" rows="4" cols="50">
// At w3schools.com you will learn how to make a website. They offer free tutorials in all web development technologies.
// </textarea>
// </div>
//          <Link to="/payment"> <button>Next</button></Link>
//     <Link to="/email"> <button>Previouse</button></Link>
//     </>
//   )
// }

// export default Adress