import React, { useState, useEffect } from "react";
import { images } from "../../constants/index";
import styled, { css } from "styled-components";
import { NavLink } from "react-router-dom";
import { MobileMenu } from "../../components/index";

const Header = styled.header`
  padding: 15px 30px;
  background: #0c0c0c;
  font-family: "Open Sans", sans-serif;
`;
const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const NavLogo = styled.img`
  width: 120px;
  &.nav__logo {
    @media (min-width: 680px) {
      width: 150px;
    }
  }
`;

const Ul = styled.ul`
  display: flex;
  align-items: center;
  display: none;
  &.nav__menu {
    @media (min-width: 1150px) {
      display: flex;
    }
  }
  &.nav__reg {
    display: none;
    @media (min-width: 650px) {
      display: flex;
    }
  }
`;
const Li = styled.li`
  margin-right: 35px;
  list-style-type: none;
`;
const Hamburger = styled.div`
  cursor: pointer;
  display: block;
  z-index: 99999;
  transition: all 0.5s ease-out;
  &.hamburger {
    @media (min-width: 1150px) {
      display: none;
    }
  }
  &.active {
    transform: rotate(360deg);
    *:nth-child(1) {
      transform: rotate(45deg) translateY(10px);
    }
    *:nth-child(2) {
      transform: translateX(-200px);
      opacity: 0;
    }
    *:nth-child(3) {
      transform: rotate(-45deg) translateY(-10px);
    }
  }
`;
const HamburgerLine = styled.div`
  width: 25px;
  height: 3px;
  margin-bottom: 4px;
  background-color: #fff;
  transition: all 0.5s;
`;

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "visible";
    }
  }, [isMenuOpen]);
  return (
    <Header className="header">
      <Nav className="nav">
        <NavLogo
          className="nav__logo"
          width="160"
          src={images.gericht}
          alt="website logo"
        />
        <Ul className="nav__menu">
          <Li>
            <NavLink className="nav__link" to="/">
              Home
            </NavLink>
          </Li>
          <Li>
            <NavLink className="nav__link" to="/about">
              About
            </NavLink>
          </Li>
          <Li>
            <NavLink className="nav__link" to="/menu">
              Menu
            </NavLink>
          </Li>
          <Li>
            <NavLink className="nav__link" to="/awards">
              Awards
            </NavLink>
          </Li>
          <Li>
            <NavLink className="nav__link" to="/contact">
              Contact
            </NavLink>
          </Li>
        </Ul>
        <Ul className="nav__reg">
          <Li>
            <NavLink className="nav__link nav__reg-link" to="/contact">
              Login / Registration
            </NavLink>
          </Li>
          <Li>
            <NavLink className="nav__link" to="/contact">
              Book a Table
            </NavLink>
          </Li>
        </Ul>
        <Hamburger
          className={isMenuOpen ? "active hamburger" : "hamburger"}
          onClick={toggleMenu}
        >
          <HamburgerLine></HamburgerLine>
          <HamburgerLine></HamburgerLine>
          <HamburgerLine></HamburgerLine>
        </Hamburger>
        {isMenuOpen && (
          <MobileMenu isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
        )}
      </Nav>
    </Header>
  );
}

export default Navbar;
