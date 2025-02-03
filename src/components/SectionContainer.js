import React from 'react';
import styled from 'styled-components';

/*
  SectionContainer:
  - Ensures pages stretch to the full height of the viewport.
  - Uses flexbox to align content properly.
  - Adjusts padding on smaller screens.
*/
const SectionContainer = styled.section`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: top;
  padding: 20px;
  width: 100%;

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
