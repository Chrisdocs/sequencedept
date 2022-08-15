import React from "react";
import { router } from "react";
import './styles.css'

export default function Contact() {

  return (
		<div id='contact' className='contactContainer'>
		<p className='contactTitle'>Reach out</p>
		<p className='contactText'>Need help with a project? have a cool opportunity? Or maybe you just want to say hey!  Please shoot me an email and I will get back to you as soon as I can.</p>
		<button className='contactBtn' type="button" onClick={() => window.open('mailto:contact.sqdpt@gmail.com')}>
		Email us
	</button>
	</div>
  );
}