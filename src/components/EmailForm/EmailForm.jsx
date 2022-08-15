import React from "react";
import './styles.css'
import postcard from '../../assets/images/postcardws.png'

export default function Contact() {

  return (
		<div id='contact' className='contactContainer'>
		<button className='contactBtn' type="button" onClick={() => window.open('mailto:contact.sqdpt@gmail.com')}>
		<img className='emailCard' src={postcard} alt="A postcard reading, please write soon!" />
	</button>
	</div>
  );
}