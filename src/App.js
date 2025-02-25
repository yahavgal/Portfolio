import React, { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import styled, { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./themes";
import Layout from "./components/Layout";

/* Styled Components */
const AppContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  background: ${(props) => props.theme.background};
`;

/* App Component */
function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const toggleTheme = () => setIsDarkMode(!isDarkMode);

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <Router>
        <AppContainer>
          <Layout toggleTheme={toggleTheme} isDarkMode={isDarkMode} />
        </AppContainer>
      </Router>
    </ThemeProvider>
  );
}

export default App;
