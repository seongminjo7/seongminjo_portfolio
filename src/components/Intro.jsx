import { useEffect, useRef } from "react"
import styled from "styled-components"
import gsap from "gsap";

export default function Intro() {

    const listRef = useRef(null);

    useEffect(() => {

        const ul = listRef.current;
        const items = ul.children;

        const itemHeight = items[0].offsetHeight;
        const total = items.length - 1;

        const tl = gsap.timeline({
            repeat: -1
        });

        for (let i = 1; i <= total; i++) {

            tl.to(ul, {
                y: -itemHeight * i,
                duration: 0.5,
                ease: "power2.out"
            })
                .to({}, { duration: 0.8 });
                // 속도 조절

        }

        tl.set(ul, { y: 0 });

    }, []);

    return (
        <IntroWrapper>
            <div className="TitleWrapper">
                <div className="hello"><p>Hello, I'm</p><p className="secondary">SeongMinJo</p></div>
                <div className="wellcome"><p>Wellcome to my</p><p className="italic">Portfolio</p></div>
            </div>

            <SubtitleWrapper>
                <p>I'm</p>
                <SubRotate>
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
    )
}

const IntroWrapper = styled.div`
    width: 100%;
    height: 906px;
    background-color: var(--background-color);
    color: var(--text-color);
    position: relative;
    transition: background-color 0.3s ease;

    .TitleWrapper{
        position: absolute;
        top: 210px;
        right: 80px;
        display: flex;
        flex-direction: column;
        gap: 10px;

        div{
            display: flex;
            align-items: flex-end;
            justify-content: flex-end;
            gap: 30px;

            p{
                font-family: var(--font-main);
                font-size: 64px;
                font-weight: 600;
            }
            p:first-child{
                margin-bottom: 30px !important;
                letter-spacing: -0.04em
            }
            .secondary{
                font-family: var(--font-secondary);
                font-size: 96px;
                color: var(--main-color);
            }

            .italic{
                font-size: 110px;
                font-family: var(--font-main);
                font-style: italic;
                font-weight: bold;
                color: var(--main-color);
            }
        }
    }
`

const SubtitleWrapper = styled.div`
    height: 68px;
    position: absolute;
    bottom: 134px;
    left: 80px;
    display: flex;
    /* align-items: flex-end; */
    gap: 10px;
    overflow: visible;
    align-items: center;

        p{
            font-family: var(--font-main);
            font-size: 48px;
        }
`

const SubRotate = styled.div`
    overflow: hidden;
    height: 68px;

    ul{
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        /* gap: 22px; */
        margin: 0;
        padding: 0;
        /* transition: transform 0.5s ease; */
        
            ::after{
            content: "";
            position: absolute;
            display: block;
            background-color: var(--main-color);
            width: 100%;
            height: 8px;
            left: 0;
            bottom: 0;
            width: 100%;
        }
    }

    li{
        height: 68px; /* ⭐ 한 줄 높이 */
        font-size: 56px;
        padding:0 15px 0 15px;
        position: relative;
        font-weight: bold;
    }
`