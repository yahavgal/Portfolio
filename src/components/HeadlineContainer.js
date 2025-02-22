import React from 'react';
import styled from 'styled-components';

const HeadlineContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center; /* Center it better */
  text-align: center;
  width: 100%;
  flex: 0 0 auto; /* 🔥 Ensures it does NOT grow beyond content size */
  max-height: 20vh; /* Prevents it from taking too much height */
  margin-bottom: 10px;

  h1 {
    font-size: 3rem;
    background: linear-gradient(
      90deg,
      ${(props) => props.theme.accent} 0%,
      ${(props) => props.theme.accentLight || '#6D5BF5'} 50%,
      #4F46E5 100%
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    color: ${(props) => props.theme.textPrimary};
    margin: 0;
    line-height: 1.2;

    @media (max-width: 768px) {
      font-size: 2.5rem;
    }

    @media (max-width: 480px) {
      font-size: 2rem;
    }
  }

  p {
    font-size: 1.25rem;
    color: ${(props) => props.theme.textSecondary};
    max-width: 700px;

    @media (max-width: 768px) {
      font-size: 1rem;
    }

    @media (max-width: 480px) {
      font-size: 0.9rem;
    }
  }
`;


const Headline = ({ title, tagline }) => {
  return (
    <HeadlineContainer>
      <h1>{title}</h1>
      <p>{tagline}</p>
    </HeadlineContainer>
  );
};

export default Headline;
