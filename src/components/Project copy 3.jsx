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

  const openModal = (section) => {
    setSelectedProject(section);
  }

  const closeModal = () => {
    setSelectedProject(null);
  }

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
                {/* 배경 박스와 이미지의 비율 유지를 위해 구조 변경 */}
                <ImageInnerBox>
                    <img src={section.image} alt={section.title} />
                </ImageInnerBox>
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
                        <p className="responsive">
                          {section.responsive ? "Responsive Web" : "Static Web"}
                        </p>
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
  top: 0;
  box-sizing: border-box;
`;

const Top = styled.div`
  border-bottom: 5px solid var(--background-color);
  justify-self: flex-start;

  h2 {
    font-size: clamp(1.8rem, 2.5vw, 2.8rem);
    padding-bottom: 10px;
    font-family: var(--font-italic);
    font-style: italic;
    color: var(--background-color);
    margin: 0;
  }

  @media (max-width: 770px){
    h2{ font-size: 1.8rem; }
  }
`;

const Bottom = styled.div`
  display: flex;
  flex: 1;
  width: 100%;
  /* 세로 높이에 민감하게 반응하도록 패딩 조절 */
  padding: clamp(10px, 3vh, 40px) 0; 
  gap: clamp(20px, 4vw, 80px);
  align-items: center;
  justify-content: center;

  @media (max-width: 1600px){
    flex-direction: column;
    padding: 1vh 0;
    gap: 2vh;
  }
`;

/* 이미지와 배경 비율 유지를 위한 스타일 전면 수정 */
const Left = styled.div`
  flex: 1.2; /* 텍스트보다 살짝 더 넓은 비중 유지 */
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  /* 1. 핵심: 고정 px 대신 비율(%)과 화면 높이(vh)를 혼합해 크기 조절 */
  /* 가로폭의 40%를 넘지 않으면서, 세로 화면의 55%도 넘지 않게 설정 */
  width: clamp(300px, 45vw, 750px);
  max-height: 55vh; 
  
  /* hover 효과를 배경 박스 전체에 적용 */
  transition: transform 0.4s;
  &:hover {
    transform: scale(1.03);
  }

  @media (max-width: 1600px){
    max-width: 600px;
    width: 100%;
    max-height: 40vh; /* 세로 모드일 땐 더 낮게 제한 */
  }

  @media (max-width: 770px){
    max-width: 100%;
    max-height: 35vh;
  }
`;

const ImageInnerBox = styled.div`
  width: 100%;
  height: 100%;
  
  /* 2. 비율 유지의 핵심: 배경 박스 자체에 고정 비율(aspect-ratio)을 줌 */
  aspect-ratio: 15 / 8.9; 
  
  /* 디자인 스타일 유지 */
  padding: clamp(10px, 1.5vw, 20px); 
  box-sizing: border-box;
  background-color: var(--background-color);
  border-radius: 13px;
  overflow: hidden;
  
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 100%;
    height: 100%;
    
    /* 3. 내부 이미지 비율 유지: 원본 비율을 깨지 않고 안으로 맞춤 */
    object-fit: contain; 
    display: block;
  }
`;

const Right = styled.div`
  flex: 1;
  height: fit-content;
  width: fit-content;
  color: var(--background-color);
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-family: var(--font-main);

  h3 {
    font-family: var(--font-italic);
    font-size: clamp(2rem, 3vw, 3.5rem);
    font-style: italic;
    color: var(--background-color);
    margin: 0;
  }

  @media (max-width: 1600px){
    width: 100%;
    align-items: center; /* 세로 모드 중앙 정렬 */
    text-align: center;
  }
`;

const ProjectInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: clamp(10px, 3vh, 40px); /* 세로 높이에 민감하게 반응 */

  @media (max-width: 770px){
    gap: 15px; 
    align-items: center;
  }
`;

const InfoTop = styled.div`
  display: flex;
  flex-direction: column;
  gap: clamp(8px, 1.5vh, 20px);

  .description{
    font-size: clamp(0.9rem, 1.1vw, 1.6rem);
    letter-spacing: -1px;
    line-height: 1.4;
    margin: 0;
    word-break: keep-all; /* 지저분한 줄바꿈 방지 */
  }

  @media (max-width: 1600px){
    align-items: center;
  }
`;

const InfoSub = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  @media (max-width: 1600px){ align-items: center; }
`;

const InfoTitle = styled.div`
  width: fit-content;
  display: flex;
  align-items: flex-end;
  border-bottom: 3px solid var(--background-color);
  padding-bottom: 5px;
  gap: clamp(5px, 1vw, 15px);

  span {
    margin-bottom: clamp(3px, 0.5vw, 8px);
    font-size: clamp(0.8rem, 0.9vw, 1.1rem);
  }
`;

const InfoP = styled.div`
  display: flex;
  font-size: clamp(0.9rem, 1vw, 1.4rem);
  letter-spacing: -1px;
  gap: 12px;
  margin-top: 5px;
`;

const StackList = styled.div`
  display: flex;
  width: 100%;
  max-width: 457px;
  flex-wrap: wrap;
  gap: 4px;
  @media (max-width: 1600px){ justify-content: center; }

  p {
    font-size: clamp(0.9rem, 1vw, 1.3rem);
    font-weight: 600;
    margin: 0;
  }
`;

const InfoBottom = styled.div`
  display: flex;
  gap: clamp(10px, 1.5vw, 20px);
`;

const InfoBtns = styled.div`
  button{
    background-color: var(--background-color);
    font-family:var(--font-main);
    font-size: clamp(0.8rem, 0.9vw, 1.2rem);
    letter-spacing: -1px;
    color: var(--main-color);
    display: flex;
    padding: clamp(6px, 1vh, 10px) clamp(12px, 1.5vw, 20px);
    justify-content: center;
    align-items: center;
    gap: 4px;
    border: none;
    border-radius: 60px;
    cursor: pointer;
    transition: 300ms;
  }
  button:hover{
    outline: 3px solid var(--background-color);
    background-color: var(--main-color);
    color: var(--background-color);
  }

  button svg{
    transition: 300ms;
    width: clamp(16px, 1.8vw, 22px);
  }

  button:hover svg{
    transform: rotate(360deg);
  }
`

const PortfolioSection = styled.div`
  position: sticky;
  top: 0;
  height: 100dvh; /* dvh로 모바일 주소창 대응 */
  width: 100%;
  max-width: 100vw;

  /* 상하 패딩을 vh 단위로 사용하여 화면 높이에 따라 유동적으로 조절 */
  padding: clamp(20px, 6vh, 80px) clamp(20px, 6vw, 150px);
  box-sizing: border-box;

  background-color: var(--main-color);
  border-radius: 80px 80px 0 0;
  box-shadow: 0 -12px 15.6px -10px rgba(0,0,0,0.12);

  display: flex;
  flex-direction: column;
  justify-content: space-between; /* 상단 제목과 하단 내용을 양끝 정렬 */

  &.odd{
    background-color: var(--background-color);
    ${Top} { border-color: var(--main-color); }
    ${Top} h2, ${Right}, ${Right} h3 { color: var(--main-color); }
    /* 배경 박스 색상 반전 적용 */
    ${ImageInnerBox} {
      background-color: var(--main-color);
    }
    ${InfoTitle}{ border-color: var(--main-color); }
    ${InfoBtns}{
       button{
        background-color: var(--main-color);
        color: var(--background-color);
       }
       button:hover{
        outline: 3px solid var(--main-color);
        background-color: var(--background-color);
        color: var(--main-color);
      }
    }
  }

  /* 다양한 해상도 대응 패딩 */
  @media (max-width: 1024px){ padding: 5vh 6vw; }
  @media (max-width: 770px){
    padding: 30px 20px 50px;
    border-radius: 40px 40px 0 0;
  }

  /* 세로가 극단적으로 짧은 환경 대응 (최후의 보루) */
  @media (max-height: 650px) {
    padding-top: 2vh;
    padding-bottom: 2vh;
  }
`;