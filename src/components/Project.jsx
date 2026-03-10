import styled from "styled-components"
import { projectSections } from "../data/projectSections";
import { GoArrowUpRight } from "react-icons/go";
import { Element } from "react-scroll";


export default function Portfolio() {

  const handleClick = (url) => {
    window.open(url, '_blank')
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
                        <p>{section.contribution}</p>
                      </InfoP>
                    </InfoSub>
                    <StackList>
                      <p>{section.stack}</p>
                    </StackList>
                    <p>{section.description}</p>
                  </InfoTop>
                  <InfoBottom>
                    <InfoBtns>
                      <button>view more <GoArrowUpRight size={24} strokeWidth={1.1} /></button>
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

  h2 {
    font-size: 36px;
    padding-bottom: 10px;
    font-family: var(--font-italic);
    font-style: italic;
    color: var(--background-color);
  }
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 120px 30px;
  gap: min(30px);
`;

const Left = styled.div`
  width: 100%;
  max-width: 712px;
  aspect-ratio: 16 / 9;
  /* 크기 조금 더 크게 */
  padding: 20px;
  background-color: var(--background-color);
  border-radius: 13px;
  overflow: hidden;

    img{
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.4s;
    }

    &:hover img{
      transform: scale(1.15);
    }
`;

const Right = styled.div`
  height: 100%;
  width: 560px;
  color: var(--background-color);
  display: flex;
  flex-direction: column;
  font-family: var(--font-main);

  h3 {
    font-family: var(--font-italic);
    font-size: 48px;
    font-style: italic;
    color: var(--background-color);
    margin: 0;
  }

  p {
    margin-top: 20px;
  }
`;

const ProjectInfo = styled.div`
height: 100%;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  gap: 50px;
`;

const InfoTop = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
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
  font-size: 18px;
  gap: 16px;
`;

const StackList = styled.div`
  display: flex;
  width: 457px;
  flex-wrap: wrap;
  gap: 4px;

  p {
    font-size: 24px;
  }
`;

const InfoBottom = styled.div`
  display: flex;
  gap: 20px;
`;

const InfoBtns = styled.div`
  
  button{
    background-color: var(--background-color);
    font-family:var(--font-main);
    font-size: 20px;
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
`

const PortfolioSection = styled.div`
  position: sticky;
  top: 0;

  min-height: 100vh;
  width: 100%;
max-width: 100vw;

  padding: 80px 150px 148px;
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
`;
