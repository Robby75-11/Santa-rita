import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SpiritualNavbar from "./components/SpiritualNavbar";
import HomePage from "./components/HomePage";
import GalleryPage from "./components/GalleryPage";
import MusicPlayer from "./components/MusicPlayer";
import backgroundMusic from "./assets/audio/Alexandra Burke - Halleluja.mp3";

const App: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const toggleMusic = () => {
    const audio = document.querySelector("audio");
    if (audio) {
      if (!isPlaying) {
        audio.muted = false;
        audio.play().catch((err) => console.warn("Play bloccato:", err));
      } else {
        audio.pause();
      }
    }
    setIsPlaying(!isPlaying);
  };


  return (
    <Router>
      <MusicPlayer audioSrc={backgroundMusic} isPlaying={isPlaying} />
      <SpiritualNavbar onToggleMusic={toggleMusic} isPlaying={isPlaying} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/gallery" element={<GalleryPage />} />
      </Routes>
    </Router>
  );
};

export default App;
