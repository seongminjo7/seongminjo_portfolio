import styled from "styled-components"
import { designSections } from "../data/designSections"
import { useState } from 'react';
import { IoMdArrowRoundBack } from "react-icons/io";
import { Element } from "react-scroll";

export default function Design() {
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
        <Element name="design">
            <DesignWrapper>
                <h2>DESIGN</h2>
                <DesignList>
                    {designSections.map((section, index) => {
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
                                        <p className="description">{section.description}</p>
                                    </DesignInfo>
                                </HeaderRow>

                                {/* 활성화 시 나타나는 상세 정보 영역 */}
                                <DesignInfoActive $active={isActive}>
                                    <TextBox>
                                        <p className="more-description">{section.moreDescription}</p>
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
                                        <IoMdArrowRoundBack
                                            size={35}
                                            onClick={handleBackClick}
                                            style={{ cursor: 'pointer' }}
                                        />
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
    height: 100vh;
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

    @media (max-width: 1460px){
           padding: 60px;

    }

      @media (max-width: 1024px){
    gap: 40px;
    box-sizing: content-box;

  }
`;

// 2. 리스트 컨테이너 (UL)
const DesignList = styled.ul`
height: 100%;
    display: flex;
    justify-content: space-evenly;
    /* 중요: stretch를 막기 위해 flex-start 설정 */
    align-items: flex-start; 
    gap: 60px;
    padding: 0;
    margin: 0;

    @media (max-width: 1024px){
        flex-direction: column;
        gap: 0;
    }
`;

const Lists = styled.li`
/* % 대신 확정적인 높이를 주어 브라우저의 재계산을 막습니다 */
    height: 70vh !important; 
    min-height: 70vh !important;
    max-height: 70vh !important;

    padding: 44px 32px;
    display: flex;
    flex: .5;
    flex-direction: column;
    background-color: var(--main-color);
    border-radius: 50px;
    box-sizing: border-box;
    color: var(--background-color);
    transition: flex 1000ms ease, width 1000ms ease;
    position: relative;
    overflow: hidden;
    cursor: pointer;

    /* 취소선 방지: align-self를 auto로 강제 */
    align-self: flex-start; 

    h3 {
        font-family: var(--font-italic);
        font-style: italic;
        font-size: 17.5rem;
        color: var(--background-color);
        transition: 800ms;
        margin: 0;
        line-height: 1; /* 숫자가 공간을 너무 차지하지 않게 함 */
    }

    &.active {
        flex: .8; 
        height: 70vh !important; /* 활성화 시에도 동일하게 유지 */
        cursor: default;
        
        h3 {
            font-size: 3rem;
        }
    }

    @media (max-width: 1024px){
        height: 40vh !important;
        min-height: 40vh !important;
        max-height: 40vh !important;
        width: 100%;
        justify-content: center;

        &.active{
             height: 40vh !important;
        }
    }
`;

// 숫자와 기본 정보를 가로로 배치하기 위한 래퍼
const HeaderRow = styled.div`
    /* height: 100%; */
    display: flex;
    flex-direction: column; /* 기본은 위아래 */
    justify-content: space-around;
    align-items: flex-start;
    gap: 10px;
    flex-shrink: 0;
    transition: all 800ms ease;
    gap: 60%;

    ${Lists}.active & {
        height: auto;
        justify-content: flex-start;
        flex-direction: row; /* 활성화 시 옆으로 */
        align-items: center;
        gap: 30px;
        margin-bottom: 30px;
    }

    @media (max-width: 1024px){
        flex-direction: row;
        justify-content: space-between;
        gap: 0;

        ${Lists}.active &{

            margin-bottom: 0;
        }
    }
`;

const DesignInfo = styled.div`
    display: flex;
    flex-direction: column;
    font-family: var(--font-main);
    transition: 1000ms;

    /* 비활성 상태일 때의 추가 스타일이 필요하면 여기에 작성 */

    .title {
        font-weight: bold;
        font-size: 1.5rem;
        white-space: nowrap; /* 제목 줄바꿈 방지 */
    }
    
    .description {
        font-size: 1rem;
        /* 활성화 시 부드럽게 사라지게 하고 싶다면 opacity 조절 가능 */
        display: ${props => props.$active ? 'none' : 'block'};
    }

    @media (max-width: 1024px){
        align-self: flex-end;
        padding-bottom: 20px;

        ${Lists}.active & {
            padding-bottom: 0;
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

    .more-description {
        font-size: 1.25rem;
        line-height: 1.4;
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
    }
`;