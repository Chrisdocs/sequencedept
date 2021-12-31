import React from 'react';
import "./styles.css";
import logo from "../../assets/images/logo.png";
import yt from "../../assets/images/youtubeicon.png";
import insta from "../../assets/images/instaicon.png";
import vim from "../../assets/images/vimeo.png";
import patch from '../../assets/images/patch.png';

function Footer() {
    return (
        <div id="footer-div">
            <section id="container">
                <div>
                    <img id="footer-logo" src={patch}></img>
                </div>
                <div id="footer-title">
                    <h3>Sequence Department</h3>
                    <p>SQ-DPT is a production and creative company based our of Savannah, Georgia.</p>
                </div>
                <div id="footer-nav">
                        <a href={"#header"}>SQ-DPT</a>
                        <a href={"#about-page"}>About</a>
                        <a href={"#project-page"}>Projects</a>
                        <a href={"#contact-page"}>Contact</a>
                        <a href={"#privacy-page"}>Privacy Policy</a>
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