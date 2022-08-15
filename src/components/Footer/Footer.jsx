import React from 'react';
import "./styles.css";
import yt from "../../assets/images/youtubeicon.webp";
import insta from "../../assets/images/instaicon.webp";
import vim from "../../assets/images/vimeo.webp";
import patch from '../../assets/images/patch.webp';

const policy = 'https://www.termsfeed.com/live/3ff4cb31-9902-4140-a588-0e09210e1439'
const youtube = 'https://www.youtube.com/channel/UCwESxTwtk_cQMcAeRQvsN7g';
const vimeo = 'https://vimeo.com/user160167080';
const instagram = 'https://www.instagram.com/sequence_department/';

function Footer() {
    
    return (
        <div id="footer-div">
            <section id="container">
                <div>
                    <img id="footer-logo" src={patch} alt='sequence department logo, in style of fabric patch'/>
                </div>
                <div id="footer-title">
                    <h3>Sequence Department</h3>
                    <p>The Sequence Department is a media production company based out of Savannah, Georgia.</p>
                </div>
                <div id="footer-nav">
                        <a className='footer-text' href={"#header"}>SQ-DPT</a>
                        <a className='footer-text' href={"#about-page"}>About</a>
                        <a className='footer-text' href={"#project-page"}>Projects</a>
                        <a className='footer-text' href={"#contact-page"}>Contact</a>
                        <a className='footer-text' href={policy} rel="noreferrer" target='_blank'>Privacy Policy</a>
                </div>
                <div id="footer-social">
                    <a href={vimeo} rel="noreferrer" target='_blank'><img className="icon" src={vim} alt='Vimeo icon'></img></a>
                    <a href={youtube} rel="noreferrer" target='_blank'><img className="icon" src={yt} alt='Youtube icon'></img></a>
                    <a href={instagram} rel="noreferrer" target='_blank'><img className="icon" src={insta} alt='Instagram icon'></img></a>
                </div>
            </section>
        </div>
    );
}
    
    export default Footer;