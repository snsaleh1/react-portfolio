import React, { Component } from 'react';
import Header from './components/header/header';
import About from './components/about/about';
import Resume from './components/resume/resume';
import Portfolio from './components/portfolio/portfolio';
import ServicesCo from './components/servicesCo/servicesCo';
import Contact from './components/contact/contact';
import Footer from './components/footer/footer';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <About />
        <Resume />
        <Portfolio />
        <ServicesCo />
        <Contact />
        <Footer />
      </div>
    );
  }
}
export default App;