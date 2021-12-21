import React from 'react';
import "./styles.css";
import Sign from "../../assets/images/SQDPTsign.png"

function About() {
    return (
        <div id="container-div">
            <img id="sqdpt-sign" src={Sign} alt="National Park style sign" />
        </div>
    );
}

export default About;