import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './styles/App.css';
import Navbar from "./components/Navbar";
import MessagesIcon from "./components/MessagesIcon";
import BottomSection from "./components/BottomSection";
import SportPsychologist from "./components/SportPsychologist";
import Home from "./pages/Home";
import TransferMarket from "./pages/TransferMarket";
import Profile from "./pages/Profile";
import Services from "./pages/Services";
import Community from "./pages/Community";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import OurMission from "./pages/OurMission";
import OurPartners from "./pages/OurPartners";
import OurResearch from "./pages/OurResearch";
import Clubs from "./pages/services/Clubs";
import Academy from "./pages/services/Academy";
import Retired from "./pages/services/Retired";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/about/mission" element={<OurMission />} />
          <Route path="/about/partners" element={<OurPartners />} />
          <Route path="/about/research" element={<OurResearch />} />
          <Route path="/services" element={<Services />} />
          <Route path="/transfer-market" element={<TransferMarket />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/community" element={<Community />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/services/clubs" element={<Clubs />} />
          <Route path="/services/academy" element={<Academy />} />
          <Route path="/services/retired" element={<Retired />} />
        </Routes>
        <MessagesIcon />
        <BottomSection />
        <SportPsychologist />
      </div>
    </Router>
  );
}

export default App;

