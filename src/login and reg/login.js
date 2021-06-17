import React from 'react';
import {Link} from 'react-router-dom'
import './loginDesign.css';
const Login=()=>{
    return(
        <>
        <div className='carpic'></div>
        <div className='loginform'>
            <form>
            <h2>Login</h2>
               
                <input placeholder="Username"/><br/>
                <input placeholder="password"/><br/>
               
                <button>login</button><br/> 
                <Link className='linktag' to='otp'>Forgot password?</Link><br/>
                <Link className='linktag' to='register'>don't have an account?</Link>
            </form>
        </div>
        </>
    )
}
export default Login;
