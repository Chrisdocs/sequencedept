import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Navigation from './components/Navigation/Nav';
import Projects from './components/Projects/Projects';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Navigation></Navigation>
      <About></About>
      <Projects></Projects>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
}

export default App;
