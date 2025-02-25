import React from 'react';
import styled from 'styled-components';
import { FaPhone, FaSuitcase } from 'react-icons/fa'; 
import { useNavigate } from 'react-router-dom';
import HeadlineContainer from '../components/HeadlineContainer';
import PageLayout from '../components/PageLayout';
import PageTransition from "../components/PageTransition";

/* Styled Components */
const CTAContainer = styled.div`
  display: flex;
  gap: 15px;
  justify-content: center;
  width: 100%;
  margin-top: 20px;

  @media (max-width: 480px) {
    flex-direction: column;
    align-items: center;
    gap: 12px;
  }
`;

const CTAButton = styled.button`
  background-color: ${(props) => props.theme.accent};
  color: ${(props) => props.theme.textPrimary};
  border: none;
  border-radius: 5px;
  padding: 14px 24px;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  transition: all 0.3s ease-in-out;
  min-width: 170px;
  max-width: 220px;
  width: 100%;

  &:hover {
    transform: scale(1.05);
    background-color: ${(props) => props.theme.textPrimary};
    color: ${(props) => props.theme.componentBackground};
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
  }

  &:active {
    transform: scale(0.98);
  }

  @media (max-width: 480px) {
    min-width: 80%;
    max-width: 280px;
    padding: 12px 20px;
  }

  svg {
    font-size: 1.2rem;
    transition: transform 0.3s ease;
  }

  &:hover svg {
    transform: scale(1.2);
  }
`;

const OutlineButton = styled(CTAButton)`
  background-color: transparent;
  border: 2px solid ${(props) => props.theme.textPrimary};
  color: ${(props) => props.theme.textPrimary};

  &:hover {
    background-color: ${(props) => props.theme.textPrimary};
    color: ${(props) => props.theme.componentBackground};
  }
`;

/* Main component */
const Home = () => {
  const navigate = useNavigate();

  return (
    <PageTransition>
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
    </PageTransition>
  );
};

export default Home;
