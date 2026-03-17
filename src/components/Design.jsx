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

                                    <DesignMore>
                                        <ImageList>
                                            {Array.isArray(section.moreImage) ? (
                                                section.moreImage.map((img, idx) => (
                                                    <img key={idx} src={img} alt={`${section.title} ${idx}`} />
                                                ))
                                            ) : (
                                                <div className="sampleImg" />
                                            )}
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
        font-size: 64px;
        font-weight: bold;
        color: var(--main-color);
    }
`;

// 2. 리스트 컨테이너 (UL)
const DesignList = styled.ul`
    height: 100%;
    display: flex;
    justify-content: space-evenly;
    gap: 60px;
    padding: 0;
    margin: 0;
`;

const Lists = styled.li`
    height: 90% !important; /* 세로 고정 */
    padding: 44px 32px;
    display: flex;
    flex: .3;
    flex-direction: column; /* 세로로 쌓기 */
    background-color: var(--main-color);
    border-radius: 50px;
    box-sizing: border-box;
    color: var(--background-color);
    transition: flex 1000ms ease, width 1000ms ease;
    position: relative;
    overflow: hidden; /* 내부 스크롤 외에는 삐져나오지 못하게 함 */
    cursor: pointer;

    h3 {
        font-family: var(--font-italic);
        font-style: italic;
        font-size: 280px;
        color: var(--background-color);
        transition: 800ms;
        margin: 0;
    }

    &.active {
        flex: 1.5; /* 가로만 늘어남 */
        cursor: default;
        
        h3 {
            font-size: 50px; /* 활성화 시 숫자가 작아짐 */
        }
    }
`;

// 숫자와 기본 정보를 가로로 배치하기 위한 래퍼
const HeaderRow = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start; /* 세로 중앙 정렬 */
    gap: 20px;
    flex-shrink: 0;
    margin-bottom: 20px;

    ${Lists}.active & {
        flex-direction: row;
        align-items: center; /* 세로 중앙 정렬 */
        gap: 20px;
        flex-shrink: 0;
        margin-bottom: 20px;
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
        font-size: 24px;
        white-space: nowrap; /* 제목 줄바꿈 방지 */
    }
    
    .description {
        font-size: 16px;
        /* 활성화 시 부드럽게 사라지게 하고 싶다면 opacity 조절 가능 */
        display: ${props => props.$active ? 'none' : 'block'};
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
        font-size: 18px;
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
        border-radius:
        20px;
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
`;