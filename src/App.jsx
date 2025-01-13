// src/App.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import Timeline from "./components/Timeline";
import Details from "./components/Details";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Legacy from "./components/legacy";
import VirtualTour from "./components/virtual-tour";
import Chatbot from "./components/Chatbot";
import Quiz from "./components/Quiz";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/timeline" element={<Timeline />} />
        <Route path="/:eventId" element={<Details />} />
        <Route path="/legacy" element={<Legacy />} />
        <Route path="/virtual-tour" element={<VirtualTour />} />
        <Route path="/chatbot" element={<Chatbot />} />
        <Route path="/quiz/:eventId" element={<Quiz />} />
      </Routes>
    </>
  );
}

export default App;
