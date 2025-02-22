import React from 'react';
import styled from 'styled-components';
import { FaPhone, FaSuitcase } from 'react-icons/fa'; 
import { useNavigate } from 'react-router-dom';
import HeadlineContainer from '../components/HeadlineContainer';
import PageLayout from '../components/PageLayout';

/* 
  CTAContainer:
  - Container for Call-to-Action buttons.
  - Stacks buttons under 440px width.
*/
const CTAContainer = styled.div`
  display: flex;
  gap: 15px;

  @media (max-width: 440px) {
    flex-direction: column;
    align-items: center;
    width: 100%;
    gap: 10px; /* Reduce gap for stacked buttons */
  }
`;

/* 
  CTAButton:
  - Styled button with animations and responsiveness.
  - Adjusts padding on mobile for better fit.
*/
const CTAButton = styled.button`
  background-color: ${(props) => props.theme.accent};
  color: ${(props) => props.theme.textPrimary};
  border: 2px solid ${(props) => props.theme.textPrimary};
  border-radius: 10px;
  padding: 14px 28px;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  transition: background 0.2s ease, transform 0.3s ease, box-shadow 0.3s ease;
  min-width: 160px; /* Prevents button from becoming too small */
  
  &:hover {
    background-color: ${(props) => props.theme.textPrimary};
    color: ${(props) => props.theme.componentBackground};
    transform: scale(1.05);
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
  }

  &:active {
    background-color: ${(props) => props.theme.headerPrimary};
    color: ${(props) => props.theme.textSecondary};
  }

  &:focus {
    outline: 2px dashed ${(props) => props.theme.textPrimary};
    outline-offset: 4px;
  }

  &:disabled {
    background-color: ${(props) => props.theme.background};
    color: ${(props) => props.theme.textSecondary};
    cursor: not-allowed;
    opacity: 0.6;
  }

  @media (max-width: 440px) {
    width: 100%;
    padding: 12px 24px; /* Slightly smaller padding for mobile */
  }

  svg {
    font-size: 1.2rem; /* Ensures icon visibility */
    transition: transform 0.3s ease, color 0.3s ease;
    pointer-events: none; /* Prevent hover issues on mobile */
  }

  &:hover svg {
    transform: scale(1.15);
    color: ${(props) => props.theme.componentBackground};
  }
`;

/* 
  OutlineButton:
  - Secondary Call-to-Action button with border.
*/
const OutlineButton = styled(CTAButton)`
  background-color: transparent;
  border: 2px solid ${(props) => props.theme.textPrimary};
  color: ${(props) => props.theme.textPrimary};

  &:hover {
    background-color: ${(props) => props.theme.textPrimary};
    color: ${(props) => props.theme.componentBackground};
  }
`;

/* 
  Home Component:
  - Displays a headline and Call-to-Action buttons.
*/
const Home = () => {
  const navigate = useNavigate();

  return (
    <PageLayout>
      <HeadlineContainer
        title="Code Meets Intuition"
        tagline="Full-Stack Developer & Product Designer"
      />
      <CTAContainer>
        <CTAButton onClick={() => navigate('/contact')}>
          <FaPhone /> Get in Touch
        </CTAButton>
        <OutlineButton onClick={() => navigate('/projects')}>
          <FaSuitcase /> View my Work
        </OutlineButton>
      </CTAContainer>
    </PageLayout>
  );
};

export default Home;
