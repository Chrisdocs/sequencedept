import React from "react";
import { useState } from "react";
import "./styles.css";

function Navigation() {

	// detect top of page
	const [isTop, setIsTop] = useState(true);
	const [isScrolled, setIsScrolled] = useState(false);

	console.log("isTop", isTop);
	console.log("isScrolled", isScrolled);

// detect top of page
	window.addEventListener("scroll", () => {
		if (window.scrollY > 0) {
			setIsTop(false);
			setIsScrolled(true);
		} else {
			setIsTop(true);
			setIsScrolled(false);
		}
	}
	);


  return (
    <div>
      <section>
        <div id="navbar">
          <div id="navbar-right">
            <a className="nav-text active" href={"#header"}>
              SQ-DPT
            </a>
            <a className="nav-text" href={"#about-page"}>
              About
            </a>
            <a className="nav-text" href={"#project-page"}>
              Projects
            </a>
            <a className="nav-text" href={"#contact-page"}>
              Contact
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Navigation;
