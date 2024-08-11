import React from 'react';
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Domain from "./pages/Domain";
import Home from "./pages/Home";
import Coord from "./pages/Coord";
import "./App.css";
import ParticlesComponent from "./components/Particles";
import { Maps } from "./pages/Maps";
import InfoSection from './pages/InfoSection';

function App() {
  return (
      <div>
        <Navbar />
        <ParticlesComponent id="particles" />
        <Home />

      
        <Domain />
        
        <Maps />
        <Footer />
      </div>
  );
}

export default App;
