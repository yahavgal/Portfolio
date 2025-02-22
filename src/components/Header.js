import React, { useState } from 'react';
import styled from 'styled-components';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

/*
  HeaderContainer:
  - Main container for the header.
  - Sets height, padding, and background color based on the theme.
  - Adjusted height for mobile responsiveness.
*/
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

/*
  ContentWrapper:
  - Ensures elements are spaced and aligned properly.
  - Restricts maximum width for consistent layout.
*/
const ContentWrapper = styled.div`
  width: 100%;
  max-width: 1200px;

  @media (max-width: 768px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

/*
  Spacer:
  - Used to create spacing between navigation and other header elements.
*/
const Spacer = styled.div`
  flex: 1;
`;

/*
  NavLinks:
  - Container for navigation links.
  - Hidden on small screens to make way for the mobile menu.
*/
const NavLinks = styled.nav`
  display: flex;
  gap: 20px;
  justify-content: center;
  flex: 2;

  @media (max-width: 768px) {
    display: none;
  }
`;

/*
  MobileMenu:
  - Icon button for toggling the mobile menu.
  - Displayed only on small screens.
*/
const MobileMenu = styled.div`
  display: none;
  font-size: 1.5rem;
  color: ${(props) => props.theme.textPrimary};

  @media (max-width: 768px) {
    display: block;
    cursor: pointer;
  }
`;

/*
  MobileNavLinks:
  - Sidebar navigation for mobile screens.
  - Adjusted height dynamically for different screen sizes.
*/
const MobileNavLinks = styled.div`
  position: fixed;
  top: 60px;
  left: 0;
  width: 250px;
  height: calc(100vh - 60px);
  background-color: ${(props) => props.theme.background};
  padding: 20px 0;
  text-align: left;
  display: ${(props) => (props.isOpen ? 'block' : 'none')};
  z-index: 100;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.2);

  @media (max-width: 480px) {
    top: 50px;
    height: calc(100vh - 50px);
  }
`;

/*
  NavLink:
  - Styled Link component for navigation.
  - Highlights the active link using background and text colors.
*/
const NavLink = styled(Link)`
  text-decoration: none;
  font-size: 1rem;
  padding: 10px 15px;
  border-radius: 5px;
  color: ${(props) => (props.isActive ? props.theme.textPrimary : props.theme.textSecondary)};
  background-color: ${(props) => (props.isActive ? props.theme.accent : 'transparent')};
  transition: all 0.3s;

  &:hover {
    color: ${(props) => props.theme.textPrimary};
    background-color: ${(props) => props.theme.accent};
  }
`;

/*
  MobileNavLink:
  - Specific styling for links in the mobile navigation menu.
*/
const MobileNavLink = styled(NavLink)`
  display: block;
  margin: 15px 20px;
  font-size: 1.2rem;
`;

/*
  Header Component:
  - Displays navigation links and a mobile menu.
  - Includes responsive mobile menu functionality with active route styling.
*/
const Header = ({ toggleTheme, isDarkMode }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  /* Toggles the mobile menu's visibility */
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  /* Checks if a link is active based on the current path */
  const isActive = (path) => location.pathname === path;

  return (
    <HeaderContainer>
      <ContentWrapper>
        <MobileMenu onClick={toggleMenu}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </MobileMenu>
        <Spacer />
        <NavLinks>
          <NavLink to="/" isActive={isActive('/')}>Home</NavLink>
          <NavLink to="/about" isActive={isActive('/about')}>About</NavLink>
          <NavLink to="/projects" isActive={isActive('/projects')}>Projects</NavLink>
          <NavLink to="/contact" isActive={isActive('/contact')}>Contact</NavLink>
        </NavLinks>
      </ContentWrapper>
      <MobileNavLinks isOpen={menuOpen}>
        <MobileNavLink to="/" onClick={toggleMenu} isActive={isActive('/')}>Home</MobileNavLink>
        <MobileNavLink to="/about" onClick={toggleMenu} isActive={isActive('/about')}>About</MobileNavLink>
        <MobileNavLink to="/projects" onClick={toggleMenu} isActive={isActive('/projects')}>Projects</MobileNavLink>
        <MobileNavLink to="/contact" onClick={toggleMenu} isActive={isActive('/contact')}>Contact</MobileNavLink>
      </MobileNavLinks>
    </HeaderContainer>
  );
};

export default Header;
