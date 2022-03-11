import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home, About, Menu, Awards, Contact } from "./pages/index";
import { Navbar, Footer } from "./components/index";
import { images } from "./constants/index";
import styled from "styled-components";

const AppBox = styled.main`
  background: url(${images.bg});
  background-attachment: fixed;
  min-height: 1000px;
  color: "#fff";
`;

function App() {
  return (
    <Router>
      <AppBox className="app">
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/awards" element={<Awards />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </AppBox>
    </Router>
  );
}

export default App;

/**
 *  App
 *    Navbar - remove nav when screen size is smaller than 768px
 *
 *      MobileMenu - display mobile menu when screen size is smaller than 768px
 *    Home
 *      Hero
 *      Chef
 *      Intro
 *      Gallery
 *      SubscribeNewsLetter
 *    About
 *      Chef
 *      Intro
 *    SpecialMenu
 *      SpecialMenuRow
 *      Gallery
 *    Awards
 *    Contact
 *    Footer
 *
 *    MovablePieces
 *      Button
 *      SubHeading
 *      HeadingSecondary
 *
 *
 */
