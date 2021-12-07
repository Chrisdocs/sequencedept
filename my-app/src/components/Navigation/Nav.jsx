import React from 'react';
import "./styles.css";

function Navigation() {

    window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("navbar").style.padding = "30px 10px";
    document.getElementById("logo").style.fontSize = "25px";
  } else {
    document.getElementById("navbar").style.padding = "80px 10px";
    document.getElementById("logo").style.fontSize = "35px";
  }
}

    return (
        <div>
            <section>
                <div id="navbar">
                    <a id="logo">SQ-DPT Logo</a>
                    <div id="navbar-right">
                        <a className="active">SQ-DPT</a>
                        <a>About</a>
                        <a>Contact</a>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Navigation;