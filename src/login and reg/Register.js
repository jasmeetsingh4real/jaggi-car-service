import React from 'react';
import {Link} from 'react-router-dom';
import './loginDesign.css';
const Regester=()=>{

    return(
        <>
        <div className='carpic'></div>
        <div className='loginform'>
            <form>
            <h2>Create account</h2>
             
                <input placeholder="Username"/><br/>
                <input placeholder="Enter E-mail"/><br/>
                <textarea placeholder='Enter Address'/>
                <input placeholder="Car Company"/><br/>
                <input placeholder="Car Model"/><br/>
                <input placeholder="Manifacture date"/><br/>
                <Link to='/'>
                <button>Register</button><br/></Link>
              
            </form>
        </div>
        </>
    )
}
export default Regester;
