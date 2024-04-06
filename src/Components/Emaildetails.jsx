import React from 'react';
import { Link } from 'react-router-dom';
import '../CSS/Email.css'; // Import CSS file

function Emaildetails() {
    return (
        <div className="container">
            <h1>Email Details</h1>
            <div className="input-container">
                <input type="text" placeholder="Enter your mail ID" />
            </div>
            <div className="button-container">
                <Link to="/"><button>Previouse</button></Link>
                <Link to="/adress"><button>Next</button></Link>
            </div>
        </div>
    );
}

export default Emaildetails;
