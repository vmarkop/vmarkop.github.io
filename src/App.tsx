import { useEffect, useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Experience from './components/Experience/Experience';
import FileCarousel from './components/FileCarousel/FileCarousel';
import FindMyLocation from './components/FindMyLocation/FindMyLocation';
import Footer from './components/Footer/Footer';
import Location from './components/Location/Location';
import Projects from './components/Projects/Projects';
import Resume from './components/Resume/Resume';
import Settings, { type SettingsState } from './components/Settings/Settings';
import Sidebar from './components/Sidebar/Sidebar';
import Topbar from './components/Topbar/Topbar';
import { WeatherCard } from './components/Weather/WeatherCard';

function App() {
  return (
    <div className="app-wrapper">
      <Sidebar />
      <div className="main-content">
        <About />
        <Experience />
        {/* <Projects /> */}
        {/* <Resume /> */}
        <FileCarousel />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;
