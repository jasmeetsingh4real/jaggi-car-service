import React from 'react';
import Base from '../Base/Base';
import Navigation from '../Home_page/Nav_bar/Navigation'
import BookingItem from './BookingItem'
const Bookings=()=>{
    return(<>
    <Base title="Booking Page">
        <Navigation/>
        <BookingItem itemName='Item 1' date="2/9/2021"/>
        <BookingItem itemName='Item 2' date="2/9/2021"/>
        <BookingItem itemName='Item 3' date="2/9/2021"/>
        <BookingItem itemName='Item 4' date="2/9/2021"/>
        <BookingItem itemName='Item 5' date="2/9/2021"/>
        </Base>
        </>
    )
}
export default Bookings; 