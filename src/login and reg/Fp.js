import React from 'react';
import './loginDesign.css';
import {Link} from 'react-router-dom'
const Fp=()=>{
    return(
        <>
        <div className='carpic'></div>
        <div className='loginform'>
            <form>
            <h2>New Password</h2>
               
                <input placeholder="Enter new password" type='password'/><br/>
                <input placeholder="Confirm new password" type='password'/><br/>
                <Link to='/'>
                <button>Proceed</button><br/> 
                </Link> 
            </form>
        </div>
        </>
    )
}
export default Fp;
