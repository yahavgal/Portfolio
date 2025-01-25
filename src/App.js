import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './themes';
import Header from './components/Header';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

/* 
  Main application component
  - Manages theme state for light and dark modes.
  - Sets up routing for the app's different pages.
  - Wraps the app in a ThemeProvider for styled-components theme handling.
*/

function App() {
  /* 
    State for theme toggling
    - `isDarkMode` determines whether dark theme is active.
    - Default is set to true for dark mode.
  */
  const [isDarkMode, setIsDarkMode] = useState(true);

  /* 
    Function to toggle the theme
    - Inverts the current value of `isDarkMode`.
    - Updates the theme state when invoked.
  */
  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    /* 
      ThemeProvider:
      - Provides theme context (light or dark) to all styled-components in the app.
      - Chooses theme based on the current value of `isDarkMode`.
    */
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      
      {/* 
        Router setup:
        - Enables navigation between different pages in the app using React Router.
      */}
      <Router>
        
        {/* 
          Header component:
          - Displays the navigation menu and theme toggle button.
          - Receives `toggleTheme` to handle theme changes.
          - Receives `isDarkMode` to display the current theme mode.
        */}
        <Header toggleTheme={toggleTheme} isDarkMode={isDarkMode} />
        
        {/* 
          Routes:
          - Define the paths and their associated components for the app.
          - "/" -> Home component
          - "/about" -> About component
          - "/projects" -> Projects component
          - "/contact" -> Contact component
        */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

/* 
  Exporting the App component:
  - Makes the component available for rendering in `index.js`.
*/
export default App;
