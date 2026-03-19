import styled from "styled-components"
import { projectSections } from "../data/projectSections";
import { GoArrowUpRight } from "react-icons/go";
import { Element } from "react-scroll";
import { useState } from "react";
import ProjectModal from "./ProjectModal";

export default function Portfolio() {
  const handleClick = (url) => {
    window.open(url, '_blank')
  }

  const [selectedProject, setSelectedProject] = useState(null);
  const openModal = (section) => setSelectedProject(section);
  const closeModal = () => setSelectedProject(null);

  return (
    <Element name="project" className="test">
      <ProjectWrapper>
        {projectSections.map((section, index) => (
          <PortfolioSection
            key={section.id}
            id={section.id}
            className={`portfolio ${section.id} ${index % 2 === 0 ? 'even' : 'odd'}`}
          >
            <Top>
              <h2>{`#${String(index + 1).padStart(2, "0")}`}</h2>
            </Top>

            <Bottom>
              <Left>
                <img src={section.image} alt={section.title} />
              </Left>

              <Right>
                <ProjectInfo>
                  <InfoTop>
                    <InfoSub>
                      <InfoTitle>
                        <h3>{section.title}</h3>
                        <span>{section.subTitle}</span>
                      </InfoTitle>
                      <InfoP>
                        <p className="responsive">{section.responsive ? "Responsive Web" : "Static Web"}</p>
                        <span>/</span>
                        <p>Contribution : {section.contribution}</p>
                      </InfoP>
                    </InfoSub>
                    <StackList>
                      <p>
                        {section.stack.map((item, index) => (
                          <span key={index}>#{item} </span>
                        ))}
                      </p>
                    </StackList>
                    <p className="description">{section.description}</p>
                  </InfoTop>
                  <InfoBottom>
                    <InfoBtns>
                      <button onClick={() => openModal(section)}>
                        view more <GoArrowUpRight size={24} strokeWidth={1.1} />
                      </button>
                    </InfoBtns>
                    <InfoBtns>
                      <button onClick={() => handleClick(section.siteUrl)}>
                        go site <GoArrowUpRight size={24} strokeWidth={1.1} />
                      </button>
                    </InfoBtns>
                  </InfoBottom>
                </ProjectInfo>
              </Right>
            </Bottom>
          </PortfolioSection>
        ))}
        <ProjectModal project={selectedProject} onClose={closeModal} />
      </ProjectWrapper>
    </Element>
  )
}

const ProjectWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  position: relative;
  background-color: var(--background-color);
  transition: 0.3s ease;
  box-sizing: border-box;
`;

const Top = styled.div`
  border-bottom: 5px solid var(--background-color);
  h2 {
    font-size: clamp(1.8rem, 2.5vh, 2.8rem);
    padding-bottom: 10px;
    font-family: var(--font-italic);
    font-style: italic;
    color: var(--background-color);
    margin: 0;
  }
`;

const Bottom = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  gap: clamp(20px, 4vw, 80px);
  padding: 2vh 0;

  @media (max-width: 1200px) {
    gap: 30px;
  }

  @media (max-width: 1024px) and (orientation: portrait) {
    flex-direction: column;
    padding: 30px 0;
  }
`;

const Left = styled.div`
  /* 1. 핵심: 컨테이너 자체의 가로폭을 명확히 제한 (양옆 튀어나옴 방지) */
  flex: 1.2;
  width: 100%;
  
  /* 데스크탑/태블릿 가로 모드일 때 너무 커지지 않게 제한 */
  width: clamp(300px, 45vw, 750px);
  
  /* 2. 비율 유지: 요청하신 비율은 유지하되, 컨테이너 크기에 맞춤 */
  aspect-ratio: 15 / 8.9; 
  
  /* 내부 디자인 스타일 유지 */
  padding: 20px; 
  box-sizing: border-box;
  background-color: var(--background-color);
  border-radius: 13px;
  overflow: hidden; /* 이미지가 튀어나가면 잘라버림 */
  
  display: flex;
  justify-content: center;
  align-items: center;

  /* 실제 아이폰(최신 프로 모델) 긴 비율 대응 핵심 미디어 쿼리 */
  @media (max-width: 1100px) and (orientation: landscape) {
    /* 아이패드 가로 등 세로가 짧을 때 이미지가 다차지 않게 높이 제한 */
    max-height: 45vh; 
    width: auto; /* 비율에 맞춰 너비 자동 조절 */
  }

  img {
    /* 3. 내부 이미지 설정: 부모 컨테이너를 절대 넘지 않게 함 (튀어나옴 방지) */
    width: 100%;
    height: 100%;
    object-fit: contain; /* 비율 유지하며 컨테이너 안에 쏙 맞춤 */
    
    transition: transform 0.4s;
    display: block;
  }

  &:hover img {
    transform: scale(1.13);
  }

  /* 4. 모바일 세로 모드 대응 */
  @media (max-width: 770px){
    padding: 10px;
    
    /* 가로폭 꽉 차게 하되 여백 고려 */
    width: 100%; 
    max-width: calc(100vw - 40px); /* 화면 양옆 여백 20px씩 고려 */
    margin: 0 auto; /* 중앙 정렬 */
    
    /* 모바일 세로 비율 (이미지 비율 유지 위해) */
    aspect-ratio: 15 / 8.7; 
  }
`;

const Right = styled.div`
  flex: 1;
  color: var(--background-color);
  display: flex;
  flex-direction: column;
  font-family: var(--font-main);

  h3 {
    font-family: var(--font-italic);
    font-size: clamp(2rem, 3vw, 3.5rem);
    font-style: italic;
    margin: 0;
    color: inherit; /* 부모인 Right의 컬러를 따르도록 설정 */
  }
`;

const ProjectInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: clamp(15px, 3vh, 50px);
`;

const InfoTop = styled.div`
  display: flex;
  flex-direction: column;
  gap: clamp(10px, 2vh, 30px);

  .description {
    font-size: clamp(1rem, 1.2vw, 1.8rem);
    letter-spacing: -1px;
    line-height: 1.4;
  }
`;

const InfoSub = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const InfoTitle = styled.div`
  display: flex;
  align-items: flex-end;
  border-bottom: 3px solid var(--background-color);
  padding-bottom: 5px;
  gap: 10px;
  width: fit-content;
  span { margin-bottom: 8px; font-size: 0.9rem; }
`;

const InfoP = styled.div`
  display: flex;
  font-size: clamp(1rem, 1.2vw, 1.6rem);
  gap: 16px;
`;

const StackList = styled.div`
  p { font-size: clamp(1rem, 1.1vw, 1.5rem); font-weight: 600; margin: 0; }
`;

const InfoBottom = styled.div`
  display: flex;
  gap: 20px;
`;

const InfoBtns = styled.div`
  button {
    background-color: var(--background-color);
    font-family: var(--font-main);
    font-size: clamp(0.9rem, 1vw, 1.3rem);
    color: var(--main-color);
    display: flex;
    padding: 8px 20px;
    align-items: center;
    gap: 4px;
    border: none;
    border-radius: 60px;
    cursor: pointer;
    transition: 300ms;
    white-space: nowrap;
  }
  button:hover {
    outline: 4px solid var(--background-color);
    background-color: var(--main-color);
    color: var(--background-color);
  }
  button svg { width: clamp(18px, 2vw, 24px); transition: 300ms; }
  button:hover svg { transform: rotate(360deg); }
`;

const PortfolioSection = styled.div`
  position: sticky;
  top: 0;
  height: 100dvh;
  width: 100%;
  max-width: 100vw;
  padding: clamp(30px, 6vh, 80px) clamp(20px, 8vw, 150px);
  box-sizing: border-box;
  background-color: var(--main-color);
  border-radius: 80px 80px 0 0;
  box-shadow: 0 -12px 15.6px -10px rgba(0,0,0,0.12);
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  &:first-child { margin-top: 0; }

  &.odd {
    background-color: var(--background-color);

    /* 1. 상단 번호 영역 */
    ${Top} {
      border-color: var(--main-color);
      h2 { color: var(--main-color); }
    }

    /* 2. 오른쪽 텍스트 영역 (모든 하위 태그 색상 강제 지정) */
    ${Right} {
      color: var(--main-color);
      h3, p, span { color: var(--main-color); }
      
      /* 제목 하단 라인 */
      ${InfoTitle} {
        border-color: var(--main-color);
      }
    }

    /* 3. 이미지 박스 배경 */
    ${Left} {
      background-color: var(--main-color);
    }

    /* 4. 버튼 스타일 반전 */
    ${InfoBtns} {
      button {
        background-color: var(--main-color);
        color: var(--background-color);
      }
      button:hover {
        outline: 4px solid var(--main-color);
        background-color: var(--background-color);
        color: var(--main-color);
      }
    }
  }

  /* 반응형 처리 */
  @media (max-width: 1460px) { padding: clamp(40px, 7vh, 70px) 150px clamp(40px, 8vh, 118px); }
  @media (max-width: 1024px) { padding: clamp(30px, 5vh, 50px) 100px clamp(40px, 8vh, 118px); }
  @media (max-width: 770px) { padding: 50px 60px 118px; border-radius: 50px 50px 0 0; }
  @media (max-height: 750px) { padding-top: 20px; padding-bottom: 30px; }
  @media (max-width: 676px) { padding: 46px 30px 118px; }
  @media (max-width: 512px) { padding: 46px 20px 118px; }
  @media (max-width: 486px) { padding: 80px 20px 118px; }
`;