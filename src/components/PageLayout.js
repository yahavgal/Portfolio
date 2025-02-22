import React from 'react';
import styled from 'styled-components';

const PageLayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  min-height: calc(100vh - 60px); /* 🔥 Prevents overflow, assumes header is ~60px */
  padding-top: 60px; /* Matches assumed header height */
  overflow: hidden; /* Prevents scrollbars */
`;

const PageLayout = ({ children }) => {
  return <PageLayoutContainer>{children}</PageLayoutContainer>;
};

export default PageLayout;
