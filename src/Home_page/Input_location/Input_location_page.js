import React from 'react';
import './design.css';
const Input_location_page=()=>{
    return(
    <>
        <div className='Vehicle_info_bg'>
            
            <form className='Vehicle_info'>

            <h1 className='VIheading'>Enter Location Details</h1>

            State: <input className='VI_input'></input><br/>

            City: <input className='VI_input'></input><br/>

            Pin-code: <input className='VI_input'></input><br/>

            landmark: <textarea className='VI_textarea'></textarea><br/>

            <button className='VI_submit'>Submit</button>

            </form>
        </div>
    </>)
}
export default Input_location_page;