import styled from "styled-components";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Footer() {
    const containerRef = useRef(null);

    // 스크롤 진행도를 추적합니다. (0: 푸터 시작, 1: 푸터 끝)
    const { scrollYProgress } = useScroll({
        target: containerRef,
        // "start end": 푸터 상단이 화면 바닥에 닿을 때 (모션 시작)
        // "end end": 푸터 하단이 화면 바닥에 딱 붙을 때 (모션 완료)
        offset: ["start end", "end end"]
    });

    // 패딩 대비를 150px 정도로 키워 가로가 좁아진 느낌을 확실히 줍니다.
    const padding = useTransform(scrollYProgress, [0, 0.8], ["0 150px", "0 0px"]);
    const borderRadius = useTransform(scrollYProgress, [0, 0.7], ["150px 150px 0 0", "0px 0px 0 0"]);
    const scale = useTransform(scrollYProgress, [0, 0.8], [0.9, 1]);

    return (
        <FooterWrapper ref={containerRef}>
            <FooterInner
                style={{
                    padding,
                    borderRadius,
                    scale
                }}
            >
                <Textbox>
                    <p className="thanks">THANK YOU</p>
                    <Mail><p>contact : 0727jsm@gmail.com</p></Mail>
                </Textbox>
            </FooterInner>
        </FooterWrapper>
    );
}

const FooterWrapper = styled.div`
    /* 높이를 100vh로 줄여 이전 섹션과의 간격을 좁힙니다. */
    height: 100vh; 
    background-color: var(--background-color);
    display: flex;
    /* flex-end 대신 center나 flex-start를 써서 공백을 조절할 수 있습니다. */
    align-items: flex-end; 
`;

const FooterInner = styled(motion.div)`
    width: 100%;
    height: 100vh;
    background-color: var(--text-color);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    box-sizing: border-box; /* 패딩이 안쪽으로 적용되게 필수! */
    transform-origin: bottom center; 
`;

const Textbox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 54px;
    color: var(--background-color);

    .thanks{
        font-size: 6rem;
        font-weight: 800;
        letter-spacing: -2px;
    }
`;

const Mail = styled.div`
    width: fit-content;
    padding: 10px 30px;
    background-color: var(--main-color);
    /* border-radius: 40px; */
    /* 메일 박스도 둥글게 하면 예쁩니다 */
    p{
        font-size: 2rem;
    }
`;