import React, { useState } from 'react';
import styled from 'styled-components';
import { Link, useLocation } from 'react-router-dom';
import { FaMoon, FaSun, FaBars, FaTimes } from 'react-icons/fa'; // Import icons

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  padding: 0 20px;
  background-color: ${(props) => props.theme.background};
`;

const LeftSection = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const NavLinks = styled.nav`
  display: flex;
  gap: 20px;

  @media (max-width: 768px) {
    display: none; /* Hide navlinks on small screens */
  }
`;

const MobileMenu = styled.div`
  display: none;
  font-size: 1.5rem;

  @media (max-width: 768px) {
    display: block;
    cursor: pointer;
  }
`;

const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: 700;
  color: ${(props) => props.theme.accent};
`;

const ToggleButton = styled.button`
  background: ${(props) => props.theme.accent};
  border: none;
  cursor: pointer;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: background 0.3s;

  &:hover {
    background: ${(props) => props.theme.hover};
  }

  svg {
    font-size: 1.5rem;
    color: ${(props) => props.theme.background};
  }
`;

const MobileNavLinks = styled.div`
  position: fixed; /* Stays within the viewport */
  top: 80px;
  left: 0; /* Stretches from the left edge */
  right: 0; /* Stretches to the right edge */
  background-color: ${(props) => props.theme.background};
  padding: 18px;
  text-align: center; /* Centers the content */
  display: ${(props) => (props.isOpen ? 'block' : 'none')};
  z-index: 100; /* Keeps it above other elements */

  a {
    display: block;
    margin: 10px 0;
    font-size: 1.2rem;

    &:hover {
      color: ${(props) => props.theme.accent};
    }
  }
`;


const NavLink = styled(Link)`
  text-decoration: none;
  font-size: 1rem;
  padding: 8px 12px;
  border-radius: 5px;
  color: ${(props) => props.theme.textPrimary};
  background-color: ${(props) => (props.isActive ? props.theme.accent : 'transparent')};
  color: ${(props) => (props.isActive ? props.theme.textPrimary : props.theme.textSecondary)};
  transition: all 0.3s;

  &:hover {
    color: ${(props) => props.theme.textPrimary};
  }
`;

const Header = ({ toggleTheme, isDarkMode }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const isActive = (path) => location.pathname === path;

  return (
    <HeaderContainer>
      {/* Show MobileMenu icon only on small screens */}
      <MobileMenu onClick={toggleMenu}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </MobileMenu>
      <LeftSection>
        <Logo>YG</Logo>
        <NavLinks>
          <NavLink to="/" isActive={isActive('/')}>Home</NavLink>
          <NavLink to="/about" isActive={isActive('/about')}>About</NavLink>
          <NavLink to="/projects" isActive={isActive('/projects')}>Projects</NavLink>
          <NavLink to="/contact" isActive={isActive('/contact')}>Contact</NavLink>
        </NavLinks>
      </LeftSection>
      {/* ToggleButton for toggling light/dark mode */}
      {/* <ToggleButton onClick={toggleTheme}>
        {isDarkMode ? <FaSun /> : <FaMoon />}
      </ToggleButton> */}
      <MobileNavLinks isOpen={menuOpen}>
        <NavLink to="/" onClick={toggleMenu} isActive={isActive('/')}>Home</NavLink>
        <NavLink to="/about" onClick={toggleMenu} isActive={isActive('/about')}>About</NavLink>
        <NavLink to="/projects" onClick={toggleMenu} isActive={isActive('/projects')}>Projects</NavLink>
        <NavLink to="/contact" onClick={toggleMenu} isActive={isActive('/contact')}>Contact</NavLink>
      </MobileNavLinks>
    </HeaderContainer>
  );
};

export default Header;
