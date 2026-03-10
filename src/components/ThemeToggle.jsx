import React from 'react';
import styled from 'styled-components';
import { useTheme } from '../theme/ThemeContext';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMoon, FiSun } from "react-icons/fi";
import { FaArrowUp } from "react-icons/fa6";

const ButtonGroup = styled.div`
  position: fixed;
  bottom: 20px;
  right: 60px;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
  z-index: 1000;
`;

const ToggleWrapper = styled.button`
  width: 68px;
  height: 38px;
  border-radius: 999px;
  border: solid 3px #A98B5F;
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.accent};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 6px;
  cursor: pointer;
  position: relative;
  /* box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15); */
`;

const ToggleCircle = styled(motion.div)`
  position: absolute;
  top: 4px;
  left: ${({ isDark }) => (isDark ? '3px' : '3px')};
  width: 26px;
  height: 26px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.accent};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.background};
`;

const IconWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  z-index: 2;
  pointer-events: none;
`;

const TopButton = styled(motion.button)`
  width: 38px;
  height: 38px;
  border: none;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.accent};
  color: ${({ theme }) => theme.background};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
`;

export default function ThemeToggle() {
    const { themeName, toggleTheme } = useTheme();
    const isDark = themeName === 'dark';

    const handleScrollTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <ButtonGroup>
            {/* Toggle Switch */}
            <ToggleWrapper onClick={toggleTheme}>
                <IconWrapper>
                    <FiMoon size={20} />
                    <FiSun size={20} />
                </IconWrapper>
                <AnimatePresence mode="wait" initial={false}>
                    <ToggleCircle
                        key={isDark ? 'dark' : 'light'}
                        isDark={isDark}
                        initial={{ x: isDark ? -31 : 0 }}
                        animate={{ x: isDark ? 30 : 0 }}
                        transition={{ type: 'spring', stiffness: 300, damping: 25, mass: 0.5, duration: 0.5 }}
                    />
                </AnimatePresence>
            </ToggleWrapper>

            {/* Scroll Top */}
            <TopButton whileTap={{ scale: 0.9 }} onClick={handleScrollTop}>
                <FaArrowUp size={16} />
            </TopButton>
        </ButtonGroup>
    );
}
