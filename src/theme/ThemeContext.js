import React, { createContext, useContext, useEffect, useState } from 'react';
import { ThemeProvider as StyledThemeProvider, createGlobalStyle } from 'styled-components';
import { lightTheme } from './light';
import { darkTheme } from './dark';
import { motion, AnimatePresence } from 'framer-motion';

const ThemeContext = createContext();

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    background-color: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.text};
    transition: color 0.3s ease;
    font-family: 'Pretendard', sans-serif;
    overflow-x: hidden;
  }
`;

export const ThemeProvider = ({ children }) => {
  const [themeName, setThemeName] = useState('light');
  const [theme, setTheme] = useState(lightTheme);
  const [ripple, setRipple] = useState(null);

  useEffect(() => {
    const stored = localStorage.getItem('theme') || 'light';
    setThemeName(stored);
    setTheme(stored === 'dark' ? darkTheme : lightTheme);
  }, []);

  const toggleTheme = (event) => {
    const next = themeName === 'dark' ? 'light' : 'dark';
    localStorage.setItem('theme', next);
    setThemeName(next);
    setRipple({
      x: event?.clientX || window.innerWidth / 2,
      y: event?.clientY || window.innerHeight / 2,
      theme: next,
    });
    setTheme(next === 'dark' ? darkTheme : lightTheme);
  };

  return (
    <ThemeContext.Provider value={{ themeName, toggleTheme }}>
      <StyledThemeProvider theme={theme}>
        <GlobalStyle />
        {children}
        <AnimatePresence>
          {ripple && (
            <motion.div
              key={ripple.x + ripple.y + ripple.theme}
              initial={{
                clipPath: `circle(0% at ${ripple.x}px ${ripple.y}px)`,
                backgroundColor: ripple.theme === 'dark' ? darkTheme.background : lightTheme.background,
                position: 'fixed',
                inset: 0,
                zIndex: 999,
              }}
              animate={{
                clipPath: `circle(150% at ${ripple.x}px ${ripple.y}px)`,
                transition: { duration: 0.8, ease: 'easeInOut' },
              }}
              exit={{ opacity: 0, transition: { duration: 0.3 } }}
              onAnimationComplete={() => setRipple(null)}
            />
          )}
        </AnimatePresence>
      </StyledThemeProvider>
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
