import React from 'react';
import './Design.css';
const Vehicle_input_page=()=>{
    return(
    <>
        <div className='Vehicle_info_bg'>
            
            <form className='Vehicle_info'>
            <h1 className='VIheading'>Enter Vehicle Details</h1>

            Select Vehicle: <input className='VI_input'></input><br/>

            Enter Model: <input className='VI_input'></input><br/>

            Enter Year: <input className='VI_input'></input><br/>

            Fault in vehicle: <input className='VI_input'></input><br/>

            <button className='VI_submit'>Submit</button>
            
            </form>
        </div>
    </>)
}
export default Vehicle_input_page;