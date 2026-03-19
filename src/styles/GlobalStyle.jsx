import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

 @import url("https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.min.css");
@import url('https://fonts.googleapis.com/css2?family=Edu+VIC+WA+NT+Hand+Pre:wght@400..700&family=Inter:ital,opsz,wght@1,14..32,100..900&display=swap');


  :root {
    --main-color: #A98B5F; /* 메인 색상 정의 */
    --background-color: #FAF6E8; /* 배경색 정의 */
    --text-color: #292929; /* 텍스트 색상 정의 */
    --font-main: 'Pretendard', sans-serif;
    --font-secondary: 'Edu VIC WA NT Hand Pre', cursive;
    --font-italic: 'Inter', sans-serif;
  }

  /* 전체적으로 적용될 기본 스타일 */

  *{
    /* 기본적으로 모든 텍스트의 줄바꿈 방식을 설정 */
    word-break: keep-all; 
    
    /* 혹시라도 단어가 너무 길어 레이아웃을 깨뜨릴 경우, 단어 중간에서라도 줄바꿈을 허용 */
    overflow-wrap: break-word;
  }

  html{
    font-size: 16px;

    @media (max-width: 1024px){
      font-size: 14px;
    }

    /* @media (max-width: 770px){
      font-size: 12px;
    } */

    @media (max-width: 676px){
      font-size: 10px;
    }
  }

  body {
    margin: 0;
    padding: 0;
    font-family: var(--font-main);
    background-color: var(--background-color);
    color: var(--text-color);
  }

  ::selection {
    color: var(--main-color);
    background-color: var(--text-color);
}

  h1, h2, h3, h4, h5, h6 {
    color: var(--text-color);
    margin: 0;
    padding: 0;
  }
  
 p {
  margin: 0 !important;
}
  a {
    color: var(--main-color);
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }

  ul{
    list-style: none;
  }
`;

export default GlobalStyle;
