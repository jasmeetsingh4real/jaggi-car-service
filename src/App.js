import React from 'react';
import {Route,Switch} from 'react-router-dom';
import './Design.css';
import Home from './Home_page/Home';
import Navigation from './Nav_bar/Navigation';
import Error_page from './Error_page';
import TC from './T&C/TC';
import Contact from './Contact_us_page/Contact';
import Booking from './Booking_page/Booking';
import Profile from './User_profile/Profile';
 
import Login from './login and reg/login';
import Register from './login and reg/Register'
import Fp from './login and reg/Fp';
import Otp from './login and reg/Otp';
import Vehicle_input_page from './Home_page/Input_vehicle/Vehicle_input_page'
import Input_location_page from './Home_page/Input_location/Input_location_page'

const App=()=>{
  return(<>

  <div className='heading'>
    <h2>JAGGI CAR SERVICE</h2>
    <h5>your trip companion</h5>
  </div>
  <Navigation/>

  <Switch>
    <Route exact path='/' component={Home}/>
    <Route path='/contact' component={Contact}/>
    <Route path='/booking' component={Booking}/>
    <Route path='/tc' component={TC}/>
    <Route path='/profile' component={Profile}/>
    <Route path='/vehicle_input_page' component={Vehicle_input_page}/>
    <Route path='/input_location_page' component={Input_location_page}/>
    
      <Route component={Error_page}/>
  

  </Switch>


{/* <Switch>
<Route exact path='/' component={Login}/>
<Route path='/register' component={Register}/>
<Route path='/otp' component={Otp}/>
<Route path='/fp' component={Fp}/>
</Switch> */}


</>)
}

export default App;