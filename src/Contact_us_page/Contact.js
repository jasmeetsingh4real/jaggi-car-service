import React from 'react';
import './contact_us.css';
import email_pic from './email_pic.png';
import phone from './whatsapp.png';
const Contact =()=>
{
    return(
        <div className='background'>
            <div className='contact_title'>
                <h1>Contact Us</h1>
                <a href="mailto:jaggi_car_service@gmail.com" target='_blank'>
                    <div className='sub_head1'>
                        <img src={email_pic} height='100px' />
                        <h3>E-mail us at</h3>
                        <h4>jaggi_car_service@gmail.com</h4>
                    </div>
                 </a>
                    <div className='sub_head2'>
                        <img src={phone} height='100px' />
                        <h3>Phone:</h3>
                        <h4>981322420</h4>
                    </div>
            </div>
       </div>
    )
}
export default Contact;