import React from 'react'
import './bookingitem.css'
const BookingItem=(props)=> {
    return (
        <div className="item">
         <h3 className="itemName">{props.itemName}</h3>
         <h4 className="date">due date: {props.date}</h4>
        <button className="removeBtn btn">Remove</button>
        <button className="proceedBtn btn">Proceed Payment</button>
        </div>
    )
}
export default BookingItem;
