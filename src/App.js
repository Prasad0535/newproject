
import './App.css';
// import { useState } from 'react';
import { Routes,Route, BrowserRouter } from 'react-router-dom';
import Namedetails from './Components/Namedetails';
import Emaildetails from './Components/Emaildetails';
import Adress from './Components/Adress';
import Payment from './Components/Payment';
import Summary from './Components/Summary';
import Preview from './Components/Preview'

function App() {
  // const [userInfo,setUserInfo]=useState([]);
  // const handleNext=(data)=>{
  //   setUserInfo({...userInfo, ...data})
  // }
  return (
   <>
     <BrowserRouter>
    <Routes>
     
      <Route path="/" exact element={<Namedetails />} />
        <Route path="/email" element={<Emaildetails/>} />
        <Route path="/adress" element={<Adress />} />
        <Route path="/payment" element={<Payment />}/> 
        <Route path="/summary" element={<Summary />}/>
        <Route path="/preview" element={<Preview />}/>
    </Routes>
    </BrowserRouter>
   </>
   
  );
}

export default App;
