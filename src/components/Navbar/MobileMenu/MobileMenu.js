import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { images } from "../../../constants/index";

const Nav = styled.nav`
  background: #0c0c0c;
  position: fixed;
  inset: 0;
  transform: translateY(-500px);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 2s ease-out;
  z-index: 999;
  &.active {
    transform: translateY(0);
  }
  @media (min-width: 1150px) {
    display: none;
  }
`;
const Menu = styled.ul`
  list-style: none;
`;
const MenuItem = styled.li`
  margin-bottom: 30px;
  text-align: center;
`;
const MenuLink = styled.span`
  font-size: 2rem;
  font-family: "Cormorant Upright";
  color: #dcca87;
`;

function MobileMenu({ isMenuOpen, toggleMenu }) {
  return (
    <Nav className={isMenuOpen ? "active" : ""}>
      <Menu>
        <MenuItem>
          <Link to="/" onClick={toggleMenu}>
            <MenuLink>Home</MenuLink>
          </Link>
        </MenuItem>
        <MenuItem>
          <Link to="/about" onClick={toggleMenu}>
            <MenuLink>About</MenuLink>
          </Link>
        </MenuItem>
        <MenuItem>
          <Link to="/menu" onClick={toggleMenu}>
            <MenuLink>Menu</MenuLink>
          </Link>
        </MenuItem>
        <MenuItem>
          <Link to="/awards" onClick={toggleMenu}>
            <MenuLink>Awards</MenuLink>
          </Link>
        </MenuItem>
        <MenuItem>
          <Link to="/contact" onClick={toggleMenu}>
            <MenuLink>Contact</MenuLink>
          </Link>
        </MenuItem>
      </Menu>
    </Nav>
  );
}

export default MobileMenu;
