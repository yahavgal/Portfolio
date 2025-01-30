import React from 'react';
import styled from 'styled-components';

/*
  HeadlineContainer:
  - A container for the headline section.
  - Uses flexbox for better spacing and alignment.
  - Includes responsive gap adjustments for improved mobile layout.
*/
const HeadlineContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    gap: 5px; /* Increased gap for tablets */
  }

  h1 {
    font-size: 3rem;
    color: ${(props) => props.theme.textPrimary};
    margin: 0;
    line-height: 1.2;
    word-break: break-word;

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
    line-height: 1.4;

    @media (max-width: 768px) {
      font-size: 1rem;
    }

    @media (max-width: 480px) {
      font-size: 0.9rem;
    }
  }
`;

/*
  Headline Component:
  - Displays a title and tagline inside the HeadlineContainer.
  - Used for section headers or main titles on pages.
*/
const Headline = ({ title, tagline }) => {
  return (
    <HeadlineContainer>
      <h1>{title}</h1>
      <p>{tagline}</p>
    </HeadlineContainer>
  );
};

export default Headline;
