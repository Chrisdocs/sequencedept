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
                            <a id="logo">SQ-DPT Logo</a>
                            <div id="navbar-right">
                                <a className="active" href={"#header"}>SQ-DPT</a>
                                <a href={"#about-page"}>About</a>
                                <a href={"#project-page"}>Projects</a>
                                <a href={"#contact-page"}>Contact</a>
                            </div>
                        </div>
            </section>
        </div>
    );
}

export default Navigation;