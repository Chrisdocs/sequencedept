import React from 'react';
import { Parallax, Background } from 'react-parallax';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Navigation from './components/Navigation/Nav';
import Projects from './pages/Projects/Projects';
import worldMap from './assets/images/Old-world-map.jpeg'
import forest from './assets/images/ForestBG1.png';
import woods from './assets/images/woods.png';
import sqdptLogo from './assets/images/logo.png';



function App() {

  return (
    <div className="App">
      <Parallax bgImage={forest} strength={500}>
        <div className="image1">
          <div className="box">
            <img className="logo" src={sqdptLogo} />
          </div>
        </div>
      </Parallax>
      <Parallax bgImage={worldMap} strength={800}>
      <div className="div2">
      <Projects></Projects>
      </div>
      </Parallax>
      <Parallax>
        <div>
          <About></About>
        </div>
      </Parallax>
      <Parallax>
        <div>
          <Contact></Contact>
        </div>
      </Parallax>
    </div>
  );
}


export default App;

