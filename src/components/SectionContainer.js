import React from 'react';
import styled from 'styled-components';

/*
  SectionContainer:
  - Ensures pages stretch to at least the full height of the viewport.
  - Uses flexbox to center or space content properly.
  - Adjusts padding on smaller screens for better spacing.
  - Allows scrolling if content exceeds the viewport.
*/
const SectionContainer = styled.section`
  min-height: 100vh; /* Ensures full-screen height */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start; /* Keeps content aligned at the top */
  padding: 20px;
  width: 100%;
  overflow-y: auto; /* Prevents content overflow issues */

  @media (max-width: 768px) {
    padding: 15px;
  }

  @media (max-width: 480px) {
    padding: 10px;
  }
`;

const Section = ({ children }) => {
  return <SectionContainer>{children}</SectionContainer>;
};

export default Section;
