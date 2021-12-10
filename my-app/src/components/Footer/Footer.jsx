import React from 'react';
import "./styles.css";
import logo from "../../assets/images/logo.png";
import yt from "../../assets/images/youtubeicon.png";
import insta from "../../assets/images/instaicon.png";
import vim from "../../assets/images/vimeo.png";

function Footer() {
    return (
        <div id="footer-div">
            <section id="footer-section">
                <div>
                    <img id="footer-logo" src={logo}></img>
                </div>
                <div id="footer-title">
                    <h3>Sequence Department</h3>
                    <p>Based out of Savanah Georgia</p>
                </div>
                <div id="footer-nav">
                    <nav>
                        <a>Contact</a>
                        <a>About</a>
                        <a>Projects</a>
                        <a>SQ-DPT</a>
                    </nav>
                </div>
                <div id="footer-social">
                    <img className="icon" src={vim}></img>
                    <img className="icon" src={yt}></img>
                    <img className="icon" src={insta}></img>
                </div>
            </section>
        </div>
    );
}
    
    export default Footer;