import React from "react";
import { Parallax } from "react-parallax";
import { useMediaQuery } from "react-responsive";
import "./App.css";
import Footer from "./components/Footer/Footer";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Navigation from "./components/Navigation/Nav";
import Projects from "./pages/Projects/Projects";
import forest from "./assets/images/ForestBG1.webp";
import sqdptLogo from "./assets/images/sqdptlogo.png";
import savMap from "./assets/images/savanahmap.webp";
import aboutBg from "./assets/images/Portland.png";

export default function App() {
  const scrollStr = 500;
  const isMobile = useMediaQuery({
    query: "(max-width: 1100px)",
  });

  return (
    <div className="App">

      {isMobile ? (
        <div>
          <div className="parallax-section">
            <div className="parallax-child-section">
              <section className="fw-main-row-head" id="frontlashID">
                <div className="image1">
                  <div className="box">
                    <img
                      className="logo"
                      src={sqdptLogo}
                      alt="Sequence Department logo"
                    />
                  </div>
                </div>
              </section>
            </div>
          </div>

          <div className="parallax-section">
            <div className="parallax-child-section">
              <section className="fw-main-row-abt" id="frontlashID">
                <About></About>
              </section>
            </div>
          </div>

          <div className="parallax-section">
            <div className="parallax-child-section">
              <section className="fw-main-row-proj" id="frontlashID">
                <Projects></Projects>
              </section>
            </div>
          </div>

          <div className="parallax-section">
            <div className="parallax-child-section">
              <section className="fw-main-row-cont" id="frontlashID">
                <Contact></Contact>
              </section>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <Navigation></Navigation>

          <section
            className="section-container"
            id="header"
            style={{ height: "100%" }}
          >
            <Parallax bgImage={forest} strength={scrollStr}>
              <div className="image1">
                <div className="box">
                  <img
                    className="logo"
                    src={sqdptLogo}
                    alt="Sequence Department logo"
                  />
                </div>
              </div>
            </Parallax>
          </section>

          <section className="section-container" id="about-page">
            <Parallax bgImage={aboutBg} strength={scrollStr}>
              <div>
                <About></About>
              </div>
            </Parallax>
          </section>

          <section className="section-container" id="project-page">
              <div className="div2">
                <Projects></Projects>
              </div>
          </section>

          <section className="section-container" id="contact-page">
            <Parallax bgImage={savMap} strength={scrollStr}>
              <div className="contact-box">
                <Contact></Contact>
              </div>
            </Parallax>
          </section>
        </div>
      )}
      <section>
        <Footer></Footer>
      </section>
    </div>
  );
}
