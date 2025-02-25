import React from 'react';
import styled from 'styled-components';

/* Styled Components */
const PageLayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  min-height: calc(100vh - 60px); 
  overflow: hidden;
`;

/* Layout Component */
const PageLayout = ({ children }) => {
  return <PageLayoutContainer>{children}</PageLayoutContainer>;
};

export default PageLayout;
