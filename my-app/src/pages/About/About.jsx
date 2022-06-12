import React from 'react';
import "./styles.css";
import Sign from "../../assets/images/SQDPTsign.webp"

function About() {
    return (
        <div id="container-div">
            <img id="sqdpt-sign" src={Sign} loading="lazy" alt="National Park style sign which reads, The Sequence Department serves audiences and clients by taking a holistic approach to producing media.  We produce thoughtfully crafted video sequences inspired by nature, art, history, and humor." />
        </div>
    );
}

export default About;