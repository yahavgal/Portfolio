import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import styled, { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './themes';
import Header from './components/Header';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

/* 
  AppContainer:
  - Ensures the app takes the full viewport height.
  - Uses flex to make pages take remaining space.
*/
const AppContainer = styled.div`
  height: 100vh; /* Ensures full viewport height */
  display: flex;
  flex-direction: column;
  background: ${(props) => props.theme.background};
`;

/* 
  PageWrapper:
  - Ensures the content below the header fills the remaining space.
*/
const PageWrapper = styled.div`
  flex: 1; /* Ensures content fills remaining space */
  display: flex;
  flex-direction: column;
`;

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <Router>
        <AppContainer>
          <Header toggleTheme={toggleTheme} isDarkMode={isDarkMode} />
          <PageWrapper>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </PageWrapper>
        </AppContainer>
      </Router>
    </ThemeProvider>
  );
}

export default App;
