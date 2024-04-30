import React from 'react';
import Navbar from './components/NavBar';
import Header from './components/Header';
import ProjectSection from './components/ProjectSection';
import AboutSection from './components/AboutSection';
import TeamSection from './components/TeamSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import LocationImage from './components/LocationImage';


const App = () => {
  return (
    <div className="MainDiv">
      <Navbar />
      <Header />
      <ProjectSection />
      <AboutSection />
      <TeamSection />
      <ContactSection />
      <LocationImage />
      <Footer />
    </div>
  );
};

export default App;
