import { useEffect, useRef } from "react";
import styled from "styled-components";
import gsap from "gsap";

export default function Intro() {
    const listRef = useRef(null);
    const containerRef = useRef(null);
    const tlRef = useRef(null); // 타임라인을 참조에 저장

    useEffect(() => {
        const ul = listRef.current;
        const items = ul?.children;
        const container = containerRef.current;
        if (!ul || !items || !container) return;

        const total = items.length - 1;
        let tl;
        let resizeTimer;

        const createAnimation = () => {
            if (tl) {
                tl.kill();
                gsap.set([ul, items], { clearProps: "all" });
            }

            // 1. 소수점을 버린 정수 높이로 측정 (비침 방지의 핵심)
            // getBoundingClientRect().height 대신 offsetHeight를 쓰거나 Math.floor를 사용합니다.
            const rawHeight = items[0].getBoundingClientRect().height;
            const itemHeight = Math.floor(rawHeight); // 소수점 내림 처리

            // 2. 컨테이너와 li 높이를 정수값으로 강제 고정
            gsap.set(container, { height: itemHeight, overflow: "hidden" });

            for (let li of items) {
                gsap.set(li, {
                    height: itemHeight,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center"
                });
            }

            // 3. 타임라인 빌드
            tl = gsap.timeline({ repeat: -1 });

            for (let i = 1; i <= total; i++) {
                tl.to(ul, {
                    y: -itemHeight * i, // 정수 단위로 이동하여 오차 제거
                    duration: 0.5,
                    ease: "power2.out"
                })
                    .to({}, { duration: 1.0 });
            }
            tl.set(ul, { y: 0 });
        };

        const handleResize = () => {
            clearTimeout(resizeTimer);
            resizeTimer = setTimeout(() => {
                createAnimation();
            }, 200);
        };

        window.addEventListener("resize", handleResize);
        createAnimation();

        return () => {
            window.removeEventListener("resize", handleResize);
            clearTimeout(resizeTimer);
            if (tl) tl.kill();
        };
    }, []);

    return (
        <IntroWrapper>
            <div className="TitleWrapper">
                <div className="hello">
                    <p>Hello, I'm</p>
                    <p className="secondary">SeongMinJo</p>
                </div>
                <div className="wellcome">
                    <p>Wellcome to my</p>
                    <p className="italic">Portfolio</p>
                </div>
            </div>

            <SubtitleWrapper>
                <p>I'm</p>
                <SubRotate ref={containerRef}>
                    <ul ref={listRef}>
                        <li>Innovative</li>
                        <li>Passionate</li>
                        <li>Versatile</li>
                        <li>Adaptive</li>
                        <li>Creative</li>
                        <li>Innovative</li>
                    </ul>
                </SubRotate>
                <p>Developer</p>
            </SubtitleWrapper>
        </IntroWrapper>
    );
}

const IntroWrapper = styled.div`
    width: 100%;
    height: 100vh;
    background-color: var(--background-color);
    color: var(--text-color);
    position: relative;
    transition: background-color 0.3s ease;

    .TitleWrapper {
        position: absolute;
        top: 210px;
        right: 80px;
        display: flex;
        flex-direction: column;
        gap: 10px;

        div {
            display: flex;
            align-items: flex-end;
            justify-content: flex-end;
            gap: 30px;

            p {
                font-family: var(--font-main);
                font-size: 4rem;
                font-weight: 600;
                margin: 0;
            }
            p:first-child {
                margin-bottom: 30px !important;
                letter-spacing: -0.04em;
            }
            .secondary {
                font-family: var(--font-secondary);
                font-size: 6rem;
                color: var(--main-color);
            }
            .italic {
                font-size: 6.8rem;
                font-family: var(--font-main);
                font-style: italic;
                font-weight: bold;
                color: var(--main-color);
            }
        }
    }

    @media (max-width: 1180px) {
        .TitleWrapper div {
            p { font-size: 2.8rem; }
            .secondary { font-size: 4.5rem; }
            .italic { font-size: 5rem; }
        }
    }
    @media (max-width: 1024px) {
        .TitleWrapper { right: 40px; }
    }
    @media (max-width: 770px) {
        .TitleWrapper div {
            gap: 10px;
            /* p { font-size: 2.2rem; } */
            p:first-child { margin-bottom: 10px !important; }
            /* .secondary { font-size: 3.8rem; } */
            /* .italic { font-size: 4rem; } */
        }
    }
`;

const SubtitleWrapper = styled.div`
    position: absolute;
    bottom: 134px;
    left: 80px;
    display: flex;
    gap: 15px;
    align-items: center;

    p {
        font-family: var(--font-main);
        font-size: 3rem;
        margin: 0;
    }

    @media (max-width: 1024px) { left: 40px; }
    @media (max-width: 770px) {
        /* p { font-size: 2.2rem; } */
    }
`;

const SubRotate = styled.div`
    overflow: hidden;
    position: relative;
    /* 높이는 JS에서 실시간으로 계산하여 주입함 */

    ul {
        margin: 0;
        padding: 0;
        list-style: none;
        display: flex;
        flex-direction: column;
    }

    li {
        font-size: 3.5rem;
        font-weight: bold;
        padding: 0 10px;
        white-space: nowrap;
        display: flex;
        align-items: center;
        justify-content: center;
        /* line-height를 1.2정도로 고정하면 높이 계산이 깔끔해집니다 */
        line-height: 1.2; 
        position: relative; /* after의 기준점 */
        /* ✅ li의 높이도 JS에서 통일시켜 줍니다. */

        /* ✅ 처음에 하셨던 굵기와 간격 복원 */
        &::after {
            content: "";
            position: absolute;
            background-color: var(--main-color);
            height: 8px; /* 처음에 하신 굵기 */
            left: 0; /* 단어 좌우 패딩 없이 꽉 차게 */
            right: 0;
            bottom: 0px; /* 글자 맨 아래에 붙임 */
        }
    }

    /* ✅ 770px 이하 미디어 쿼리 수정 */
    @media (max-width: 770px) {
        li { 
            /* font-size: 2.2rem;  */
            line-height: 1.2; /* 1️⃣ 줄 간격을 줄여서 글자와 밑줄을 가깝게 만듦 */
        }
        li::after { 
            height: 5px; /* 2️⃣ 너무 굵으면 답답해 보일 수 있어 살짝 조절 */
            bottom: 0; /* 3️⃣ 밑줄을 위로 2px 살짝 올려서 간격 밀착 */
        }
    }
`;