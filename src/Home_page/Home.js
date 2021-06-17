import React from 'react';
import './home.css';
import {Link} from 'react-router-dom'

const Home =()=>
{
  // function SV(){
  //   console.log("vehicle");
  // }

  // const location=()=>{


  //   const success=(position)=> {
  //     console.log("success");
  //     const locInput=document.querySelector("#location_text");
  //     locInput.innerHTML='Khedi location mama?'

      // const latitude  = position.coords.latitude;
      // const longitude  = position.coords.longitude;
      
      
      // locLink.href = `https://www.openstreetmap.org/#map=18/${latitude}/${longitude}`;
     // mapLink.textContent = `Latitude: ${latitude} °, Longitude: ${longitude} °`;
    // }
  
    // function error() {
      // status.textContent = 'Unable to retrieve your location';
    // }



  //   if(!navigator.geolocation) {
  //     // status.textContent = 'Geolocation is not supported by your browser';
  //     console.log("not supported");
  //   } else {
  //     // status.textContent = 'Locating…';
  //     console.log("locating...");
  //     navigator.geolocation.getCurrentPosition(success, error);
  //   }
  // } 
  return(


    <div className='home_bg'>
      <div className='vehicle'>
      <Link to='vehicle_input_page'>
      <button  >Select Your Vehicle </button>
      </Link></div>
       
      <div className='loc'>
      <Link to='input_location_page'><button  id='location_text'>Detect Location</button>
      </Link></div>
      
      <form className='loc_car'>
        <div className='vehicle_input'>Vehicle<br/><input /></div>

        <div className='loc_input'>Location<br/><input /></div>

      
      <button className='home_btn'>Remote Servicing</button>
      <button className='home_btn'>Locate Service Center</button>
      <button className='home_btn'>Online Booking</button>
      </form>

      
    </div>
    )
} 
export default Home;