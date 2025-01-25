import React from 'react';
import styled from 'styled-components';

const HeadlineContainer = styled.div`
  text-align: center;
  margin-bottom: 30px;

  h1 {
    font-size: 3rem;
    color: ${(props) => props.theme.textPrimary};
    margin: 0;

    @media (max-width: 768px) {
      font-size: 2.5rem; /* Adjust for mobile */
    }
  }

  p {
    font-size: 1.25rem;
    color: ${(props) => props.theme.textSecondary};

    @media (max-width: 768px) {
      font-size: 1rem; /* Adjust for mobile */
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
