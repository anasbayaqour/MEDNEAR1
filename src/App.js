import React from "react";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import SpecialtyCards from "./components/SpecialtyCards";
import FeedbackSection from "./components/FeedbackSection";
import MapPreview from "./components/MapPreview";
import AboutUs from "./components/AboutUs";
import Footer from "./components/Footer";
import "./styles/main.css"; 
import heroImage from './assets/heroImage.jpg';  

function App() {
  return (
    <div className="mehdi">
      <Header />
      <div
        className="hero-image"
        style={{
          backgroundImage: `url(${heroImage})`, 
        }}
      >
      
        <SearchBar />
      </div>
      <SpecialtyCards />
      <FeedbackSection />
      <MapPreview />
      <AboutUs />
      <Footer />
    </div>
  );
}

export default App;
