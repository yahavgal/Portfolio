import React from 'react';
import styled from 'styled-components';
import { FaPhone, FaSuitcase } from 'react-icons/fa'; // Import icons from react-icons
import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom
import HeadlineContainer from '../components/HeadlineContainer'; // Import custom components
import Section from '../components/SectionContainer'; // Import custom components

/* 
  Styled Components
  - Define reusable and theme-aware styles for the Home page.
*/

/* 
  CTAContainer:
  - Container for Call-to-Action buttons.
  - Uses flexbox with a gap to space buttons evenly.
  - Buttons are row-aligned by default but switch to column-aligned under 440px width.
*/
const CTAContainer = styled.div`
  display: flex;
  gap: 15px; /* Space between the buttons */

  @media (max-width: 440px) {
    flex-direction: column; /* Stack buttons vertically */
    align-items: center; /* Center-align buttons */
    width: 100%; /* Ensures container spans full width */
  }
`;

/* 
  CTAButton:
  - Styled button for primary Call-to-Action.
  - Includes styling for hover, active, focus, and disabled states.
  - Buttons fill the width of their parent container only when column-aligned.
*/
const CTAButton = styled.button`
  /* Default State */
  background-color: ${(props) => props.theme.accent};
  color: ${(props) => props.theme.textPrimary};
  border: 2px solid ${(props) => props.theme.textPrimary};
  border-radius: 10px; /* Softer corners */
  padding: 15px 30px;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px; /* Space between the icon and text */
  transition: background 0.2s ease, transform 0.3s ease, box-shadow 0.3s ease; /* Smooth transitions */

  /* Hover State */
  &:hover {
    background-color: ${(props) => props.theme.textPrimary}; /* Background matches primary text color */
    color: ${(props) => props.theme.contrast}; /* Text contrasts against hover background */
    transform: scale(1.05); /* Slight scale effect */
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2); /* Adds subtle shadow for hover feedback */
  }

  /* Active State */
  &:active {
    background-color: ${(props) => props.theme.headerPrimary}; /* Uses headerPrimary for active feedback */
    color: ${(props) => props.theme.textSecondary}; /* Text adjusts to secondary theme color */
  }

  /* Focus State */
  &:focus {
    outline: 2px dashed ${(props) => props.theme.textPrimary}; /* Dashed outline for accessibility */
    outline-offset: 4px;
  }

  /* Disabled State */
  &:disabled {
    background-color: ${(props) => props.theme.background}; /* Disabled background matches general background */
    color: ${(props) => props.theme.textSecondary}; /* Uses muted secondary color for text */
    cursor: not-allowed;
    opacity: 0.6; /* Slight opacity to signal disabled state */
  }

  /* Responsive Full-Width for Stacked Layout */
  @media (max-width: 440px) {
    width: 100%; /* Button spans full width of parent only in column alignment */
  }

  /* Icon Animation */
  svg {
    transition: transform 0.3s ease, color 0.3s ease; /* Smooth animations for icons */
  }

  &:hover svg {
    transform: scale(1.2); /* Icons slightly enlarge on hover */
    color: ${(props) => props.theme.contrast}; /* Icon color changes for hover effect */
  }
`;

/* 
  OutlineButton:
  - Styled button for secondary Call-to-Action.
  - Extends CTAButton but with a transparent background.
  - Changes background and text colors on hover.
*/
const OutlineButton = styled(CTAButton)`
  background-color: transparent;
  border: 2px solid ${(props) => props.theme.textPrimary};
  color: ${(props) => props.theme.textPrimary};

  /* Hover State: Switches background and text colors */
  &:hover {
    background-color: ${(props) => props.theme.textPrimary};
    color: ${(props) => props.theme.contrast};
  }
`;

/* 
  Home Component:
  - Main component for the Home page.
  - Displays a headline with a tagline using HeadlineContainer.
  - Includes Call-to-Action buttons for navigation to Contact and Projects pages.
*/
const Home = () => {
  const navigate = useNavigate(); // Initialize useNavigate hook for navigation

  return (
    <Section>
      {/* HeadlineContainer displays the main title and tagline */}
      <HeadlineContainer
        title="Code Meets Intuition"
        tagline="Full-Stack Developer & Product Designer"
      />
      <CTAContainer>
        {/* Call-to-Action Buttons */}
        <CTAButton onClick={() => navigate('/contact')}>
          <FaPhone /> Get in Touch
        </CTAButton>
        <OutlineButton onClick={() => navigate('/projects')}>
          <FaSuitcase /> View my Work
        </OutlineButton>
      </CTAContainer>
    </Section>
  );
};

export default Home;
