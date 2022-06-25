import React from 'react';
import './App.scss'
import { About, Footer, Header, Skills, Testimonial, Work } from './container';
import { Navbar } from './components';

const App = () => {
  return (
    <div className='app'>
      
      <Navbar />
      <Header />
      <About />
      <Work />
    </div>
  );
};

export default App;