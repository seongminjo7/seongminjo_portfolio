import styled from "styled-components"

export default function Footer(){
    return(
        <FooterWrapper>
            <FooterInner>

            </FooterInner>
        </FooterWrapper>
    )
}

const FooterWrapper = styled.div`
    height: 1300px;
    padding: 0 40px;
    background-color: var(--background-color);
`

const FooterInner = styled.div`
    height: 1070px;
    background-color: var(--text-color);
`