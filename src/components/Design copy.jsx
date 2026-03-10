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
                                <h3>{index + 1}</h3>

                                {/* 기본 정보 */}
                                <DesignInfo $active={isActive}>
                                    <p className="title">{section.title}</p>
                                    <p className="description">{section.description}</p>
                                </DesignInfo>

                                {/* 활성화 정보 */}
                                <DesignInfoActive $active={isActive}>
                                    <TextBox>
                                        <p className="title">{section.title}</p>
                                        <p className="description">{section.moreDescription}</p>
                                    </TextBox>

                                    <DesignMore>
                                        <ImgBox />
                                    </DesignMore>

                                    <IoMdArrowRoundBack
                                        size={30}
                                        style={{
                                            cursor: 'pointer',
                                            position: 'absolute',
                                            bottom: '30px',
                                            right: '30px',
                                        }}
                                        onClick={handleBackClick}
                                    />
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

// 3. 개별 리스트 아이템 (LI)
const Lists = styled.li`
    height: 90%;
    padding: 44px 32px;
    display: flex;
    flex: .3;
    flex-direction: column;
    align-items: flex-start;
    background-color: var(--main-color);
    border-radius: 50px;
    box-sizing: border-box;
    color: var(--background-color);
    transition: 1000ms;
    position: relative;
    overflow: hidden;
    cursor: pointer;

    h3 {
        font-family: var(--font-italic);
        font-style: italic;
        font-size: 280px;
        color: var(--background-color);
        margin-top: 20px;
        margin-bottom: 65px;
        transition: 800ms;
    }

    &.active {
        flex: 1.5;
        cursor: default;
        
        h3 {
            font-size: 50px;
            margin: 0 0 60px;
        }
    }
`;

// 4. 기본 정보 영역 (비활성 상태)
const DesignInfo = styled.div`
    display: ${props => props.$active ? 'none' : 'flex'};
    flex-direction: column;
    gap: 30px;
    font-family: var(--font-main);
    font-size: 18px;
    transition: 1000ms;

    .title {
        font-weight: bold;
        font-size: 24px;
    }

    .description {
        transition: 1000ms;
    }
`;

// 5. 활성화 시 상세 정보 영역
const DesignInfoActive = styled.div`
    display: ${props => props.$active ? 'block' : 'none'};
    width: 100%;
`;

// 6. 텍스트 박스 영역
const TextBox = styled.div`
    position: absolute;
    left: 80px;
    top: 53px;
    display: flex;
    gap: 10px;
    flex-direction: column;

    .title {
        font-family: var(--font-italic);
        font-style: italic;
        font-size: 40px;
        font-weight: bold;
    }
`;

// 7. 추가 정보/이미지 스크롤 영역
const DesignMore = styled.div`
    height: 460px;
    overflow-y: scroll;
    margin-top: 20px;

    /* 스크롤바 숨기기 (선택 사항) */
    &::-webkit-scrollbar {
        display: none;
    }
`;

const ImgBox = styled.div`
    height: 1000px;
    background-color: var(--background-color);
    width: 100%;
`;