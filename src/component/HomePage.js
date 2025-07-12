import React from 'react';
import Header from './Header';
import Special from './Special';
import Testimonial from './Testimonial';
import About from './About';
import Footer from './Footer';

const HomePage = () => {
  return (
    <div className="homepage">
      <Header />
      <Special />
      <Testimonial />
      <About />
      <Footer />
    </div>
  );
};

export default HomePage;