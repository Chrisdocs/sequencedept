import React from 'react';
import "./styles.css";
import Sign from "../../assets/images/SQDPTSignnew.png"

function About() {
    return (
        <div id="container-div">
            <img id="sqdpt-sign" src={Sign} loading="lazy" alt="sign reading Welcome tot he sequence department." />
						<p className='about-p'>The Sequence Department serves audiences and clients by taking a holistic approach to producing media. We thoughtfully craft video sequences inspired by nature, art, history, and humor.</p>
        </div>
    );
}

export default About;