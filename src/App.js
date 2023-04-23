import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Home from './Components/home/Home';
import About from './Components/About/About';
import Skills from './Components/Skills/Skills';
import Qualification from './Components/Qualifications/Qualification';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <>
      <Header />

      <main className='main'>
        <Home />
        <About />
        <Skills />
        <Qualification />
        <Contact />
        <Footer />
      </main>
    </>
  )
}

export default App;
