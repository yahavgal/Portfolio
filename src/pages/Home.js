import React from 'react';
import styled from 'styled-components';
import { FaPhone, FaSuitcase } from 'react-icons/fa'; // Import icons from react-icons
import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom

// Styled Components for Home Section
const HomeContainer = styled.section`
  height: 100vh;
  background-color: ${(props) => props.theme.background};
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: left;
  align-items: start;
  height: 100vh;
  background-color: ${(props) => props.theme.background};
  padding: 18px 0 20px 20px;

  @media (max-width: 768px) {
    justify-content: center; /* Centers content vertically */
    align-items: center; /* Centers content horizontally */
    padding: 0 20px; /* Adjusts padding for mobile view */
  }
`;

const Headline = styled.h1`
  font-size: 3rem;
  color: ${(props) => props.theme.textPrimary};
  margin: 0;

  @media (max-width: 768px) {
    font-size: 2.5rem; /* Reduces font size for mobile */
    text-align: center; /* Centers the text */
  }
`;

const Tagline = styled.p`
  font-size: 1.25rem;
  color: ${(props) => props.theme.textSecondary};
  text-align: center;

  @media (max-width: 768px) {
    font-size: 1rem; /* Reduces font size for mobile */
  }
`;

const CTAContainer = styled.div`
  display: flex;
  gap: 15px; /* Space between the buttons */
`;

const CTAButton = styled.button`
  background-color: ${(props) => props.theme.accent};
  color: ${(props) => props.theme.textPrimary};
  border: none;
  padding: 15px 30px;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  border-radius: 5px;
  border: 2px solid ${(props) => props.theme.textPrimary};
  display: flex;
  align-items: center;
  gap: 10px; /* Space between the icon and text */
  transition: background 0.3s, transform 0.3s; /* Transition for smooth animation */

  &:hover {
    background-color: ${(props) => props.theme.hover};
    transform: scale(1.05); /* Slight scale effect */
  }

  &:active {
    background-color: ${(props) => props.theme.active};
  }
`;

const OutlineButton = styled(CTAButton)`
  background-color: transparent;
  border: 2px solid ${(props) => props.theme.textPrimary};
  color: ${(props) => props.theme.textPrimary};

  &:hover {
    background-color: ${(props) => props.theme.textPrimary};
    color: ${(props) => props.theme.contrast};
  }
`;

const Home = () => {
  const navigate = useNavigate(); // Initialize useNavigate hook

  return (
    <HomeContainer>
      <ContentContainer>
        <Headline>
          Creating Modern Digital Experiences
        </Headline>
        <Tagline>
          Full-Stack Developer & Product Designer
        </Tagline>
        <CTAContainer>
          <CTAButton onClick={() => navigate('/contact')}>
            <FaPhone /> Get in Touch
          </CTAButton>
          <OutlineButton onClick={() => navigate('/projects')}>
            <FaSuitcase /> View my Work
          </OutlineButton>
        </CTAContainer>
      </ContentContainer>
    </HomeContainer>
  );
};

export default Home;
