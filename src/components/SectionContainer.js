import React from 'react';
import styled from 'styled-components';

const SectionContainer = styled.section`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 18px 20px;

  @media (max-width: 768px) {
    padding: 12px 15px;
  }

  @media (max-width: 480px) {
    padding: 10px;
    height: auto;
  }
`;

const Section = ({ children }) => {
    return <SectionContainer>{children}</SectionContainer>;
};

export default Section;
