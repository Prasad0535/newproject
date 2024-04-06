import React from 'react'
import '../CSS/Name.css'
import { unstable_HistoryRouter } from 'react-router-dom';

import { Link} from 'react-router-dom'
function Namedetails(props) {
  const [name,setname]=React.useState("");
 // const history=useHistory();
  return(
  <>
  <h1>Namedetails</h1>
  <div className='input'>
  Name : <input onChange={(e)=>{setname(e.target.value)}} type="text" placeholder=' please enter your name. '></input>
  </div>
  
  <div className="button-container1">
                <Link to="/email"><button>Next</button></Link>    
            </div>

 </> 
  )
}
export default Namedetails