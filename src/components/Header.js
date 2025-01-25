import React, { useState } from 'react';
import styled from 'styled-components';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa'; // Import icons

/* 
  HeaderContainer:
  - Main container for the header.
  - Sets height, padding, and background color based on the theme.
*/
const HeaderContainer = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80px;
  padding: 0 20px;
  background-color: ${(props) => props.theme.background};
`;

/* 
  ContentWrapper:
  - Wrapper for the header's content.
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
    display: none; /* Hide nav links on small screens */
  }
`;

/* 
  MobileMenu:
  - Icon button for toggling the mobile menu.
  - Displayed only on small screens.
  - Positioned on the left side for mobile view.
*/
const MobileMenu = styled.div`
  display: none;
  font-size: 1.5rem;
  color: ${(props) => props.theme.textPrimary};

  @media (max-width: 768px) {
    display: block;
    cursor: pointer;
    position: absolute;
    left: 20px; /* Position the icon on the left */
  }
`;

/* 
  MobileNavLinks:
  - Sidebar navigation for mobile screens.
  - Positioned on the left side of the viewport.
  - Toggles visibility based on the `isOpen` state.
*/
const MobileNavLinks = styled.div`
  position: fixed; /* Stays within the viewport */
  top: 80px;
  left: 0; /* Aligns to the left edge */
  width: 250px; /* Fixed width for the menu */
  height: calc(100vh - 80px); /* Fills remaining height below the header */
  background-color: ${(props) => props.theme.background};
  padding: 20px 0;
  text-align: left; /* Aligns content to the left */
  display: ${(props) => (props.isOpen ? 'block' : 'none')};
  z-index: 100; /* Keeps it above other elements */
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.2); /* Subtle shadow for the sidebar */
`;

/* 
  NavLink:
  - Styled Link component for navigation.
  - Highlights the active link using background and text colors.
  - Includes hover effects for interactivity.
  - Ensures consistent active styles for both desktop and mobile views.
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
  - Includes active state styling for the current route.
*/
const MobileNavLink = styled(NavLink)`
  display: block;
  margin: 15px 20px; /* Adds margin around the links */
  font-size: 1.2rem;
`;

/* 
  Header Component:
  - Main header component.
  - Displays navigation links and a theme toggle button.
  - Includes responsive mobile menu functionality with active route styling.
*/
const Header = ({ toggleTheme, isDarkMode }) => {
  const [menuOpen, setMenuOpen] = useState(false); // State to toggle the mobile menu
  const location = useLocation(); // Hook to get the current location

  /* Toggles the mobile menu's visibility */
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  /* Checks if a link is active based on the current path */
  const isActive = (path) => location.pathname === path;

  return (
    <HeaderContainer>
      <ContentWrapper>
        {/* Mobile menu icon for small screens, positioned on the left */}
        <MobileMenu onClick={toggleMenu}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </MobileMenu>

        {/* Left spacer for alignment */}
        <Spacer />

        {/* Navigation links for larger screens */}
        <NavLinks>
          <NavLink to="/" isActive={isActive('/')}>Home</NavLink>
          <NavLink to="/about" isActive={isActive('/about')}>About</NavLink>
          <NavLink to="/projects" isActive={isActive('/projects')}>Projects</NavLink>
          <NavLink to="/contact" isActive={isActive('/contact')}>Contact</NavLink>
        </NavLinks>
      </ContentWrapper>

      {/* Mobile navigation sidebar */}
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
