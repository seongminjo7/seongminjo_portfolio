import styled from "styled-components"
import { projectSections } from "../data/projectSections";
import { GoArrowUpRight } from "react-icons/go";
import { Element } from "react-scroll";
import { useState } from "react";
import { section } from "framer-motion/client";
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

    <Element name="project" className="test" >
      <ProjectWrapper >
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
                      <button onClick={() => handleClick(section.siteUrl)}>go site <GoArrowUpRight size={24} strokeWidth={1.1} /></button>
                    </InfoBtns>
                  </InfoBottom>
                </ProjectInfo>
              </Right>
            </Bottom>
          </PortfolioSection>
        ))}
        {/* 모달 */}
        <ProjectModal
          project={selectedProject}
          onClose={closeModal}
        />

      </ProjectWrapper>
    </Element >
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
    font-size: 2.8rem;
    padding-bottom: 10px;
    font-family: var(--font-italic);
    font-style: italic;
    color: var(--background-color);
  }

  @media (max-width: 770px){
    h2{
      font-size: 1.8rem;
    }
  }
`;

const Bottom = styled.div`
 display: flex;
  /* 화면 높이에 따라 40px에서 120px까지 유동적으로 변화 */
  padding: clamp(40px, 8vh, 120px) 30px; 
  gap: clamp(30px, 5vw, 80px);
  align-items: center;

  @media (max-width: 1600px){
    flex-direction: column;
    padding: 20px 0;
    gap: 3vh; /* 세로 모드일 땐 높이 기준 간격 */
  }
`;

const Left = styled.div`
  width: 100%;
  
  /* 1. 핵심: 전체 가로 크기를 줄입니다. (기존 800px -> 650px 정도로 축소) */
  max-width: 850px; 
  
  /* 2. 비율 조정: 16/9(약 1.77)에서 4/3(약 1.33) 또는 1.2/1 정도로 변경해 더 세로형에 가깝게 만듭니다. */
  aspect-ratio: 15 / 8.9; 
  
  /* 3. 패딩 조정: 상하 여백(20px)은 유지하고, 좌우 여백(5px)을 줄여 이미지가 옆으로 더 붙게 함 */
  padding: 20px; 
  box-sizing: border-box;
  
  background-color: var(--background-color);
  border-radius: 13px;
  overflow: hidden;
  
  /* 이미지 중앙 정렬 (이건 유지) */
  display: flex;
  justify-content: center;
  align-items: center;

    img {
      width: 100%;
      height: 100%;
      /* 4. 절대 잘리지 않게 안으로 맞춤 (이건 유지) */
      object-fit: contain; 
      
      transition: transform 0.4s;
      display: block;
    }

    &:hover img {
      transform: scale(1.13);
    }

    @media (max-width: 770px){
      padding: 10px;
      aspect-ratio: 15 / 8.7; 
    }
`;

const Right = styled.div`
  height: 100%;
  width: fit-content;
  /* width: 520px; */
  color: var(--background-color);
  display: flex;
  flex-direction: column;
  font-family: var(--font-main);

  h3 {
    font-family: var(--font-italic);
    font-size: 3.5rem;
    font-style: italic;
    color: var(--background-color);
    margin: 0;
  }

  p {
    margin-top: 20px;
  }

  @media (max-width: 1600px){
    width: 100%;
  }

  @media (max-width: 770px){
    h3{
      font-size: 2.5rem;
    }
  }
`;

const ProjectInfo = styled.div`
height: 100%;
  display: flex;
  flex-direction: column;
  /* 간격을 고정하지 않고 화면 높이에 맡김 */
  gap: clamp(30px, 6vh, 60px); 

  @media (max-width: 770px){
    /* 모바일에서는 간격을 더 좁게 설정 */
    gap: 4vh; 
  }
`;

const InfoTop = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;

  .description{
    font-size: 1.8rem;
    letter-spacing: -1px;
  }

  @media (max-width: 770px){
    .description{
      font-size: 1.2rem;
    }
  }

`;

const InfoSub = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const InfoTitle = styled.div`
width: fit-content;
  display: flex;
  align-items: flex-end;
  border-bottom: 3px solid var(--background-color);
  padding-bottom: 5px;
  gap: 10px;

  span {
    margin-bottom: 8px;
  }
`;

const InfoP = styled.div`
  display: flex;
  font-size: 2rem;
  letter-spacing: -1px;
  gap: 16px;

  @media (max-width: 770px){
    font-size: 1.2rem;
  }
`;

const StackList = styled.div`
  display: flex;
  width: 457px;
  flex-wrap: wrap;
  gap: 4px;

  p {
    font-size: 1.8rem;
    font-weight: 600;
  }

  @media (max-width: 1600px){
    width: 100%;
  }

  @media (max-width: 770px){
    p{
      font-size: 1.2rem;
    }
  }
`;

const InfoBottom = styled.div`
  display: flex;
  gap: 20px;

  @media (max-width: 1024px){
    /* padding-bottom: 80px; */
  }
`;

const InfoBtns = styled.div`
  
  button{
    background-color: var(--background-color);
    font-family:var(--font-main);
    font-size: 1.5rem;
    letter-spacing: -1px;
    color: var(--main-color);
    display: flex;
    padding: 10px 20px;
    justify-content: center;
    align-items: center;
    gap: 4px;
    border: none;
    border-radius: 60px;
    cursor: pointer;
    transition: 300ms;
  }
  button:hover{
    outline: 4px solid var(--background-color);
    background-color: var(--main-color);
    color: var(--background-color);
  }

  button svg{
    transition: 300ms;
  }

  button:hover svg{
    transform: rotate(360deg);
  }

    @media (max-width: 1600px){
    align-self: flex-end;
  }

  @media (max-width: 770px){
    button{
      font-size: 1.2rem;
    }
  }
`

const PortfolioSection = styled.div`
  position: sticky;
  top: 0;

  min-height: 100vh;
  width: 100%;
  max-width: 100vw;

  padding: 80px 150px 118px;
  box-sizing: border-box;

  background-color: var(--main-color);
  border-radius: 80px 80px 0 0;
  box-shadow: 0 -12px 15.6px -10px rgba(0,0,0,0.12);

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  &:first-child {
    margin-top: 0;
  }

  &.odd{
        background-color: var(--background-color);
    
        ${Top} {
          border-color: var(--main-color);
        }
    
        ${Top} h2,
        ${Right},
        ${Right} h3 {
          color: var(--main-color);
        }
    
        ${Left} {
          background-color: var(--main-color);
        }
    
        ${InfoTitle}{
          border-color: var(--main-color);
        }
        ${InfoBtns}{
           button{
            background-color: var(--main-color);
            color: var(--background-color);
           }
           button:hover{
            outline: 4px solid var(--main-color);
            background-color: var(--background-color);
            color: var(--main-color);
          }
        }
  }

  @media (max-width: 1600px){
  /* gap: min(60px); */
  }

  @media (max-width: 1460px){
    padding: 70px 150px 118px;
  }
  
  @media (max-width: 1024px){
   padding: 50px 100px 118px;
  }
    @media (max-width: 770px){
   padding: 50px 60px 118px;
   border-radius: 50px 50px 0 0;
   /* gap: min(30px); */
  }

    @media (max-width: 676px){
   padding: 46px 30px 118px;
  }

    @media (max-width: 512px){
   padding: 46px 20px 118px;
  }

      @media (max-width: 486px){
   padding: 80px 20px 118px;
  }
`;
