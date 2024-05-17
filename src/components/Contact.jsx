import React from 'react';
import whatsapp from '../assets/gh-whatsapp.svg';
import whatsapp_btn from '../assets/whatsapp-icon.svg';
import '../css/contacts.css';


const Contact = () => {
  return (
      <section className='contacts'>
          <div className='contact-left-col'>
              <p>We're here to provide affordable packages for you to be able experience the luxurious holiday of Thailand. </p>
              <br />
              <a href="https://wa.me/+66994398897" target="_blank" rel="noopener noreferrer" className='whatsapp-btn'><img src={whatsapp_btn} alt="" /> Get Quotes Now</a>

          </div>
          <div className='contact-right-col'>
              <img src={whatsapp} alt="" />
          </div>
          
      </section>
  )
}

export default Contact



