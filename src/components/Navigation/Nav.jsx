import React from 'react';
import "./styles.css";

function Navigation() {


window.addEventListener("scroll", function() {
	
    let elementTarget = this.document.getElementById("header");

    if (this.window.scrollY > (elementTarget.offsetTop + elementTarget.offsetHeight)) {
        document.getElementById("navbar").style.top = "0";
    } else {
      document.getElementById("navbar").style.top = "-50px";
    }
})

    return (
        <div>
            <section>
                        <div id="navbar">
                            <div id="navbar-right">
                                <a className='nav-text active' href={"#header"}>SQ-DPT</a>
                                <a className='nav-text' href={"#about-page"}>About</a>
                                <a className='nav-text' href={"#project-page"}>Projects</a>
                                <a className='nav-text' href={"#contact-page"}>Contact</a>
                            </div>
                        </div>
            </section>
        </div>
    );
}

export default Navigation;