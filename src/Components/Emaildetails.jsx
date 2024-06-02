
import React from 'react';
import { Link } from 'react-router-dom';
import '../CSS/Email.css'; // Import CSS file
import { useState } from 'react';
function Emaildetails(onNext) {

    const[email,setEmail]=useState("");
    const [error,setError]=useState("");
    const handleChange=(e)=>{
        setEmail(e.target.value);
        setError("");
    };
    const handleSubmit=(e)=>{
        e.preventDefault();
     
        const re=/^[^\s@]+@[^/s@]+\.[^\s@]+$/;
       if(re.test(email)){
        onNext(email);
       }else{
        setError("Please enter a valid email adress");
       }
       
    };
    return (
        <form onSubmit={handleSubmit}>
             <div className="container">
            <h1>Email Details</h1>
            <div className="input-container">
                <input  onChange={handleChange} type="text"   placeholder="Enter your mail ID" />
            </div>
            {error && <p className="error-mess">{error}</p>}
            <div className="button-container">
                <Link to="/"><button>Previouse</button></Link>
                <Link to="/adress"><button>Next</button></Link>
            </div>
        </div>
        </form>
      
    );
}
export default Emaildetails;
