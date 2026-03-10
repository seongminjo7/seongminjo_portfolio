import styled from "styled-components";
import { FiMoon, FiSun } from "react-icons/fi";
import { FaArrowUp } from "react-icons/fa6";
import { useEffect, useState } from "react";

export default function ToggleBtn() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.style.setProperty('--background-color', '#292929');
      document.documentElement.style.setProperty('--text-color', '#FAF6E8');
    } else {
      document.documentElement.style.setProperty('--background-color', '#FAF6E8');
      document.documentElement.style.setProperty('--text-color', '#292929');
    }
  }, [isDarkMode]);

  // 스크롤 최상단으로 이동하는 함수
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Buttons>
      <ToggleButton onClick={() => setIsDarkMode(prev => !prev)} aria-label="Toggle dark mode">
        {isDarkMode ? <FiSun size={20} /> : <FiMoon size={20} />}
      </ToggleButton>

      <TopButton onClick={scrollToTop}>
        <FaArrowUp size={16} />
      </TopButton>
    </Buttons>
  );
}

const Buttons = styled.div`
  position: fixed;
  bottom: 20px;
  right: 60px;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
  z-index: 1000;
`;

const ToggleButton = styled.button`
  height: 38px;
  width: 38px;
  border-radius: 999px;
  border: solid 3px var(--main-color);
  background: transparent;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--main-color);
  background-color: var(--background-color);
  transition: background-color 0.3s ease, color 0.3s ease;

  &:hover {
    background: var(--main-color);
    color: var(--text-color);
    transition: 0.3s;
  }
`;

const TopButton = styled.button`
  width: 38px;
  height: 38px;
  border-radius: 999px;
  border: solid 3px var(--main-color);
  background: var(--background-color);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--main-color);
  transition: background-color 0.3s ease, color 0.3s ease;

  &:hover {
    background: var(--main-color);
    color: var(--background-color);
    transition: 0.3s;
  }
`;




// import styled from "styled-components";
// import { FiMoon, FiSun } from "react-icons/fi";
// import { FaArrowUp } from "react-icons/fa6";
// import { useEffect, useState } from "react";

// export default function ToggleBtn() {

//     const [isDarkMode, setIsDarkMode] = useState(false); // 기본은 라이트 모드

//     // 다크 모드 상태에 따라 CSS 변수 업데이트
//     useEffect(() => {
//         if (isDarkMode) {
//             document.documentElement.style.setProperty('--background-color', '#292929');
//             document.documentElement.style.setProperty('--text-color', '#FAF6E8');
//         } else {
//             document.documentElement.style.setProperty('--background-color', '#FAF6E8');
//             document.documentElement.style.setProperty('--text-color', '#292929');
//         }
//     }, [isDarkMode]);

//     // onClick={() => setIsDarkMode(prev => !prev)

//     return (
//         <Buttons>
//             <ToggleBtn>
//                 <Icons >
//                     <FiMoon size={20} />
//                     <FiSun size={20} />
//                 </Icons>
//             </ToggleBtn>

//             <TopBtn>
//                 <FaArrowUp size={16} />
//             </TopBtn>

//         </Buttons>
//     )
// }

// const Buttons = styled.div`
//     position: fixed;
//     bottom: 20px;
//     right: 60px;
//     display: flex;
//     flex-direction: row;
//     align-items: center;
//     gap: 10px;
//     z-index: 1000;
//     `

// const Icons = styled.div`
//     height: 38px;
//     border-radius: 999px;
//     border: solid 3px var(--main-color);
// `

// const TopBtn = styled.div`
//     width: 38px;
//     height: 38px;
//     border-radius: 999px;
//     border: solid 3px var(--main-color);
// `