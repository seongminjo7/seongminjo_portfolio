import styled from "styled-components"
import { skillSections } from "../data/skillSections"
import { useState } from 'react';
import { IoMdArrowRoundBack } from "react-icons/io";
import { Element } from "react-scroll";

export default function Skills() {
    const [activeId, setActiveId] = useState(null);

    const handleClick = (id) => {
        if (activeId === id) return;
        setActiveId(id);
    };

    const handleBackClick = (e) => {
        e.stopPropagation();
        setActiveId(null);
    };

    return (
        <Element name="skills">
            <DesignWrapper>
                <h2>SKILLS</h2>
                <DesignList>
                    {skillSections.map((section, index) => {
                        const isActive = activeId === section.id;
                        return (
                            <Lists
                                key={section.id}
                                className={isActive ? 'active' : ''}
                                onClick={() => handleClick(section.id)}
                            >

                                {/* 상단 영역: 숫자와 기본 정보를 한 줄로 배치 */}
                                <HeaderRow>
                                    <h3>{index + 1}</h3>
                                    <DesignInfo $active={isActive}>
                                        <p className="title">{section.title}</p>
                                        {/*  <p className="description">{section.description}</p>*/}
                                    </DesignInfo>
                                </HeaderRow>

                                {/* 활성화 시 나타나는 상세 정보 영역 */}
                                <DesignInfoActive $active={isActive}>
                                    <TextBox>
                                        <p className="moreDescription">{section.moreDescription}</p>
                                    </TextBox>

                                    <DesignMore onWheel={(e) => e.stopPropagation()}>
                                        <ImageList>
                                            {/* {Array.isArray(section.moreImage) ? (
                                                section.moreImage.map((img, idx) => (
                                                    <img key={idx} src={img} alt={`${section.title} ${idx}`} />
                                                ))
                                            ) : (
                                                <div className="sampleImg" />
                                            )} */}
                                            <img src={section.moreImage} alt={`${section.title}`} />

                                        </ImageList>
                                    </DesignMore>

                                    <FooterBar>
                                        <ResponsiveBackIcon onClick={handleBackClick} />
                                    </FooterBar>
                                </DesignInfoActive>
                            </Lists>
                        );
                    })}
                </DesignList>
            </DesignWrapper>
        </Element>
    );
}

// 1. 전체 래퍼
const DesignWrapper = styled.div`
    height: fit-content;
    /* min-height: 100vh; */
    background-color: var(--background-color);
    display: flex;
    flex-direction: column;
    padding: 60px 150px;
    box-sizing: border-box;
    transition: background-color 300ms ease;
    gap: 80px;

    h2 {
        font-family: var(--font-main);
        font-size: 4rem;
        font-weight: bold;
        color: var(--main-color);
    }

    @media (max-width: 1800px){
        padding: 60px;
    }


    @media (max-width: 1024px){
    gap: 40px;
    box-sizing: content-box;
  }

  @media (max-width: 920px){
    padding: 90px 40px 20px 40px;
  }

      @media (max-width: 770px){

        h2{
            font-size: 3rem;
        }
    padding: 90px 20px;

    }
    @media (max-width: 460px){
    padding: 90px 10px;

    }
`;

// 2. 리스트 컨테이너 (UL)
const DesignList = styled.ul`
height: 100%;
    display: flex;
    justify-content: space-evenly;
    /* 중요: stretch를 막기 위해 flex-start 설정 */
    align-items: flex-start; 
    gap: 20px;
    padding: 0;
    margin: 0;

/* 2. 간격 변화를 부드럽게 (Lists의 transition 시간과 맞추면 좋아요) */
    transition: gap 800ms ease;

    /* 3. 자식 중 .active가 생겼을 때의 간격 */
    &:has(.active) {
        gap: 10px; /* 예: 활성화 시 아이템들이 더 넓어지므로 간격을 줄임 */
    }

    &:has(.active) li:not(.active) h3 {
    font-size: 8rem;
    opacity: 0.5;
  }

      &:has(.active) li:not(.active) p {
    font-size: 1.5rem;
    opacity: 0.5;
  }

  @media (max-width: 1600px){
          &:has(.active) li:not(.active) p {
    font-size: 1.2rem;
    opacity: 0.5;
  }
  }

    @media (max-width: 1340px){
        flex-direction: column;
        gap: 0;
        
        li:not(:first-child) {
        margin-top: 20px;
        }
    }
`;

const Lists = styled.li`
    /* 1. 기본 설정 (flex 대신 height를 우선시하도록 변경) */
    width: 100%;
    height: 70vh; 
    min-height: 500px;
    
    padding: 20px 20px 10px 20px;
    display: flex;
    flex: 0.5; /* 데스크탑 가로 배열용 */
    flex-direction: column;
    background-color: var(--main-color);
    border-radius: 30px;
    box-sizing: border-box;
    color: var(--background-color);
    position: relative;
    overflow: hidden;
    cursor: pointer;
    
    /* 애니메이션 속도와 대상 명시 */
    transition: flex 800ms ease, height 800ms ease, border-radius 800ms ease;

    h3 {
        font-family: var(--font-italic);
        font-style: italic;
        font-size: 13rem;
        color: var(--background-color);
        transition: 800ms;
        margin: 0;
        line-height: 1;
    }

    &.active {
        flex: 4; /* 활성화 시 가로로 더 많이 차지 */
        cursor: default;
        border-radius: 20px;
        
        h3 {
            font-size: 3rem;
        }
    }
    

    /* --- 모바일/태블릿 터치 대응 (핵심 수정 구간) --- */
    @media (max-width: 1340px) {
        /* 비활성 상태: 높이를 명확하게 고정 (!important 제거) */
        flex: none; 
        width: 100%;
        height: 20vh; 
        min-height: 100px;
        max-height: 20vh;
        
        display: flex;
        justify-content: center;
        align-items: flex-start; /* 내부 정렬 */

        h3 {
            font-size: 10rem;
        }

        /* 활성 상태: 여기서 높이를 압도적으로 높임 */
        &.active {
            /* !important를 써서 위쪽의 height: 35vh를 확실히 이기게 함 */
            height: 80vh !important; 
            min-height: 600px !important;
            max-height: 90vh !important;
            
            justify-content: flex-start;
            padding-top: 30px;
            
            h3 {
                font-size: 4rem;
            }
        }
    }

    @media (max-width: 636px) {
        padding: 20px 15px;
        
        h3 {
            font-size: 8rem;
        }

        &.active {
            height: 85vh !important; /* 작은 폰에선 더 길게 */
            
            h3 {
                font-size: 3rem;
            }
        }
    }
`;

// 숫자와 기본 정보를 가로로 배치하기 위한 래퍼
const HeaderRow = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column; /* 기본은 위아래 */
    justify-content: space-around;
    align-items: flex-start;
    flex-shrink: 0;
    transition: all 800ms ease;

    ${Lists}.active & {
        height: auto;
        justify-content: flex-start;
        flex-direction: row; /* 활성화 시 옆으로 */
        align-items: center;
        gap: 15px;
        margin-bottom: 10px;
    }

    @media (max-width: 1340px){
        flex-direction: row;
        /* justify-content: space-between; */
        gap: 15px;
        align-items: center;

        ${Lists}.active &{
            margin-bottom: 0;
        }
    }

    /* @media (max-width: 1024px) */
`;

const DesignInfo = styled.div`
    display: flex;
    flex-direction: column;
    font-family: var(--font-main);
    transition: 1000ms;
    box-sizing: border-box;

    /* 비활성 상태일 때의 추가 스타일이 필요하면 여기에 작성 */

    .title {
        font-weight: bold;
        font-size: 2rem;
        // white-space: nowrap; /* 제목 줄바꿈 방지 */
    }
    
    .description {
        font-size: 1.2rem;
        /* 활성화 시 부드럽게 사라지게 하고 싶다면 opacity 조절 가능 */
        display: ${props => props.$active ? 'none' : 'block'};
    }

    @media (max-width: 1340px){
        align-self: flex-end;
        padding-bottom: 30px;

        ${Lists}.active & {
            padding-bottom: 0;
        }
    }

    @media (max-width: 636px){
        
        .title{
            font-size: 1rem;
            padding-bottom: 5px;
        }

        .description{
            font-size: 1rem;
        }
    }
`;

// 5. 활성화 시 상세 정보 영역
const DesignInfoActive = styled.div`
    display: ${props => props.$active ? 'flex' : 'none'};
    flex-direction: column;
    flex: 1; /* 남은 세로 공간 모두 차지 */
    width: 100%;
    overflow: hidden; /* 자식의 스크롤만 허용 */
`;

const TextBox = styled.div`
    margin-bottom: 15px;
    flex-shrink: 0;

    .moreDescription {
        font-size: 1.2rem;
        line-height: 1.4;
    }

    @media (max-width: 636px){
        .moreDescription{
            font-size: 1rem;
        }
    }
`;

// 7. 추가 정보/이미지 스크롤 영역
const DesignMore = styled.div`
    flex: 1; /* 이미지가 들어가는 영역이 남은 높이를 다 씀 */
    overflow-y: auto; /* 여기서만 스크롤 발생 */
    padding-right: 10px;

    &::-webkit-scrollbar {
        width: 5px;
    }
    &::-webkit-scrollbar-thumb {
        background: rgba(255, 255, 255, 0.3);
        border-radius: 10px;
    }
`;

const ImageList = styled.div`
    display: flex;
    flex-direction: column;
    gap: 15px;
    
    img {
        width: 100%;
        display: block;
    }

    .sampleImg {
        width: 100%;
        height: 300px;
        background: rgba(255, 255, 255, 0.1);
        border-radius: 20px;
    }
`;


// const ImgBox = styled.div`
//     height: 1000px;
//     background-color: var(--background-color);
//     width: 100%;
// `;

// 뒤로가기 버튼 위치 고정 (이미지와 겹치지 않게 하단 영역 확보)
const FooterBar = styled.div`
    height: 60px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    flex-shrink: 0; /* 높이 고정 */

    @media (max-width: 1024px){
        height: fit-content;
        padding: 10px 0; /* 높이가 fit-content일 때 위아래 여백 */
    }
`;

// IoMdArrowRoundBack에 스타일 입히기
const ResponsiveBackIcon = styled(IoMdArrowRoundBack)`
    cursor: pointer;
    
    /* 기본 크기 (데스크탑: 1024px 초과 시) */
    font-size: 35px;

    /* 1024px 이하일 때 (태블릿/모바일) */
    @media (max-width: 1024px) {
        font-size: 28px;
    }

    /* 480px 이하일 때 (작은 모바일) */
    @media (max-width: 480px) {
        font-size: 22px;
    }
`;