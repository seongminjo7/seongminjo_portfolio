import styled from "styled-components"
import { Element } from "react-scroll"

export default function AboutMe() {
    return (
        <Element name="about" className="element">
            <AboutWrapper>

            </AboutWrapper>
        </Element>
    )
}

const AboutWrapper = styled.div`
    width: 100%;
    height: 890px;
    background-color: var(--background-color);
    color: var(--text-color);
    position: relative;
    transition: background-color 0.3s ease;
`