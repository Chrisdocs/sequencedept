import React from 'react';
import { Parallax } from 'react-parallax';
import './App.css';
import Footer from './components/Footer/Footer';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Navigation from './components/Navigation/Nav';
import Projects from './pages/Projects/Projects';
import forest from './assets/images/ForestBG1.webp';
import sqdptLogo from './assets/images/logo.webp';
import savMap from './assets/images/savanahmap.webp';
import aboutBg from './assets/images/portland.webp';
import logs from '../src/assets/images/longs.webp';



export default function App() {

  return (
    <div className="App">
      <Navigation></Navigation>

      <section id="header" style={{height: '100%'}}>
        <Parallax bgImage={forest} strength={500}>
          <div className="image1">
            <div className="box">
              <img className="logo" src={sqdptLogo} alt='Sequence Department logo'/>
            </div>
          </div>
        </Parallax>
      </section>

      <section id="about-page">
        <Parallax bgImage={aboutBg} strength={500}>
          <div>
            <About></About>
          </div>
        </Parallax>
      </section>

      <section id="project-page">
				<Parallax bgImage={logs} strength={500}>
        <div className="div2">
        <Projects></Projects>
        </div>
				</Parallax>
      </section>


      <section id="contact-page">
        <Parallax bgImage={savMap} strength={500}>
          <div className="contact-box">
            <Contact></Contact>
          </div>
        </Parallax>
      </section>

      <section>
        <Footer></Footer>
      </section>
    </div>
  );
}


