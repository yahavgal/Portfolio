import React, { useState } from "react";
import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

/* Styled Components */
const HeaderContainer = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80px;
  padding: 20px;
  padding-bottom: 0;

  @media (max-width: 768px) {
    height: 60px;
    padding: 15px;
  }

  @media (max-width: 480px) {
    height: 50px;
    padding: 10px;
  }
`;

const ContentWrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Spacer = styled.div`
  flex: 1;
`;

const NavLinks = styled.nav`
  display: flex;
  gap: 20px;
  justify-content: center;
  flex: 2;

  @media (max-width: 768px) {
    display: none;
  }
`;

const MobileMenu = styled.div`
  display: none;
  font-size: 1.6rem;
  color: ${(props) => props.theme.textPrimary};

  @media (max-width: 768px) {
    display: block;
    cursor: pointer;
    z-index: 1100;
  }
`;

const MobileNavContainer = styled.div`
  position: fixed;
  top: 0;
  left: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
  width: 260px;
  height: 100vh;
  background-color: ${(props) => props.theme.background};
  box-shadow: 5px 0 15px rgba(0, 0, 0, 0.3);
  padding-top: 60px;
  transition: left 0.3s ease-in-out;
  z-index: 1000;
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(5px);
  opacity: ${({ isOpen }) => (isOpen ? "1" : "0")};
  pointer-events: ${({ isOpen }) => (isOpen ? "auto" : "none")};
  transition: opacity 0.3s ease-in-out;
  z-index: 900;
`;

const NavLink = styled(Link)`
  text-decoration: none;
  font-size: 1rem;
  padding: 10px 15px;
  border-radius: 5px;
  color: ${({ isActive, theme }) => (isActive ? theme.textPrimary : theme.textSecondary)};
  background-color: ${({ isActive, theme }) => (isActive ? theme.accent : "transparent")};
  transition: all 0.3s;

  &:hover {
    color: ${(props) => props.theme.textPrimary};
    background-color: ${(props) => props.theme.accent};
  }
`;

const MobileNavLink = styled(NavLink)`
  display: block;
  font-size: 1.2rem;
  padding: 15px 20px;
`;

/* Header Component */
const Header = ({ toggleTheme, isDarkMode }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const isActive = (path) => location.pathname === path;

  return (
    <>
      <HeaderContainer>
        <ContentWrapper>
          <MobileMenu onClick={toggleMenu}>
            {menuOpen ? <FaTimes /> : <FaBars />}
          </MobileMenu>
          <Spacer />
          <NavLinks>
            <NavLink to="/" isActive={isActive("/")}>
              Home
            </NavLink>
            <NavLink to="/about" isActive={isActive("/about")}>
              About
            </NavLink>
            <NavLink to="/projects" isActive={isActive("/projects")}>
              Projects
            </NavLink>
            <NavLink to="/contact" isActive={isActive("/contact")}>
              Contact
            </NavLink>
          </NavLinks>
        </ContentWrapper>
      </HeaderContainer>

      <Overlay isOpen={menuOpen} onClick={toggleMenu} />

      <MobileNavContainer isOpen={menuOpen}>
        <MobileNavLink to="/" onClick={toggleMenu} isActive={isActive("/")}>
          Home
        </MobileNavLink>
        <MobileNavLink to="/about" onClick={toggleMenu} isActive={isActive("/about")}>
          About
        </MobileNavLink>
        <MobileNavLink to="/projects" onClick={toggleMenu} isActive={isActive("/projects")}>
          Projects
        </MobileNavLink>
        <MobileNavLink to="/contact" onClick={toggleMenu} isActive={isActive("/contact")}>
          Contact
        </MobileNavLink>
      </MobileNavContainer>
    </>
  );
};

export default Header;
