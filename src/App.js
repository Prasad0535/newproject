
import './App.css';
import { Routes,Route, BrowserRouter } from 'react-router-dom';
import Namedetails from './Components/Namedetails';
import Emaildetails from './Components/Emaildetails';
import Adress from './Components/Adress';
import Payment from './Components/Payment';
import Summary from './Components/Summary';

function App() {
  return (
   <>
     <BrowserRouter>
    <Routes>
     
      <Route path="/" exact element={<Namedetails/>} />
        <Route path="/email" element={<Emaildetails/>} />
        <Route path="/adress" element={<Adress />} />
        <Route path="/payment" element={<Payment />}/> 
        <Route path="/summary" element={<Summary />}/>
    </Routes>
    </BrowserRouter>
   </>
   
  );
}

export default App;
