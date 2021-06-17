import React from 'react';
import {Link} from 'react-router-dom';
import './loginDesign.css';
const Otp=()=>{
    return(
        <>
        <div className='carpic'></div>
        <div className='loginform'>
            <form>
            <h2>Reset Password</h2>
               
                <input placeholder="Enter E-mail" /><br/>
                <input placeholder="Enter OTP" /><br/>
                <Link to='fp'>
                <button>Proceed</button><br/> </Link>

                
            </form>
        </div>
        </>
    )
}
export default Otp;
