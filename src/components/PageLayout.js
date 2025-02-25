import React from 'react';
import styled from 'styled-components';

/* Styled Components */
const PageLayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  min-height: 100vh;
  padding-top: 80px;

  @media (max-width: 768px) {
    padding-top: 60px;
  }

  @media (max-width: 480px) {
    padding-top: 50px;
  }
`;

/* Layout Component */
const PageLayout = ({ children }) => {
  return <PageLayoutContainer>{children}</PageLayoutContainer>;
};

export default PageLayout;
