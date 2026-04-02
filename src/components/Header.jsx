import { useState, useEffect } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoClose } from "react-icons/io5";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import { projectSections } from "../data/projectSections";
import kakaoIcon from "../img/header/kakao.svg";
import emailIcon from "../img/header/mail.svg";
import { Link } from "react-scroll";

export default function Header() {

    const [menuOpen, setMenuOpen] = useState(false)
    const [active, setActive] = useState(false);
    const toggleMenu = () => {
        if (menuOpen) {
            // 닫힐 때: Nav exit 애니메이션 끝난 뒤 active 해제
            setMenuOpen(false);
            setTimeout(() => {
                setActive(false);  // 500ms 후에 active 클래스 해제 (변경된 부분)
            }, 550); // exit duration 맞춰줌 (0.5초로 설정) (변경된 부분)
        } else {
            // 열릴 때는 즉시
            setActive(true);
            setMenuOpen(true);
        }
    };

    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        function handleScroll() {
            if (window.scrollY > 40) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        }

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <HeaderWrapper className={active ? "active" : ""} scrolled={scrolled}>
            <HeaderTop>
                <LogoWrapper>
                    <Logo onClick={scrollToTop}>Seongmin Jo</Logo>
                </LogoWrapper>
                <Btns onClick={toggleMenu}>
                    <AnimatePresence mode="wait" initial={false}>
                        {menuOpen ? (
                            <motion.div
                                key="close"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.3 }}
                            >
                                <IoClose className="icon-close" /> {/* size 제거, 클래스 추가 */}
                            </motion.div>
                        ) : (
                            <motion.div
                                key="hamburger"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.3 }}
                            >
                                <RxHamburgerMenu className="icon-hamburger" /> {/* size 제거, 클래스 추가 */}
                            </motion.div>
                        )}
                    </AnimatePresence>
                </Btns>
            </HeaderTop>


            <AnimatePresence>
                {menuOpen && (
                    <Nav
                        as={motion.ul}
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: .5, ease: 'easeInOut' }}
                        aria-hidden={!menuOpen}
                        style={{ overflow: 'hidden' }}
                    >
                        {/* <li className="about">
                            <Link to="about" smooth={true} duration={800} onClick={toggleMenu}>
                                <h2>About Me</h2>
                            </Link>
                        </li> */}
                        <li className="project">
                            <Link to="project" smooth={true} duration={800} onClick={() => setMenuOpen(false)}>
                                <h2>Project</h2>
                            </Link>
                            {/* <ProjectListWrapper>
                                {projectSections.map((section) => (
                                    <ProjectLists key={section.id}>
                                        <Link
                                        to={section.id}
                                        smooth={true}
                                        duration={800}
                                        onClick={toggleMenu}
                                        >
                                            <div className="textBox">
                                                <h3>{section.navTitle}</h3>
                                                <span>{section.subTitle}</span>
                                            </div>
                                        </Link>
                                    </ProjectLists>
                                ))}
                            </ProjectListWrapper> */}
                        </li>
                        <Link to="skills" smooth={true} duration={800} onClick={toggleMenu}>
                            <li className="skills"><h2>Skills</h2></li>
                        </Link>
                        <SnsLink>
                            <Sns><img src={kakaoIcon} alt="카카오톡 아이콘" /></Sns>
                            <Sns><img src={emailIcon} alt="이메일 아이콘" /></Sns>
                        </SnsLink>
                    </Nav>
                )}
            </AnimatePresence>
        </HeaderWrapper>
    )
}

const HeaderWrapper = styled.div`
width: fit-content;
  position: fixed;
  top: ${(props) => (props.scrolled ? '20px' : '60px')};
  left: 50%;
  transform: translateX(-50%);
  padding: 10px 25px 10px 30px;
  display: flex;
  background-color: var(--background-color);
  box-sizing: border-box;
  border: 5px solid var(--main-color);
  border-radius: 70px;
  z-index: 9999;
  transition: top 500ms, border-radius 300ms, padding 300ms;

  &.active {
    flex-direction: column;
    border-radius: 40px;
  }

  @media (max-width: 1460px){
    padding: 8px 25px 8px 30px;
  }

  @media (max-width: 1024px){
    padding: 4px 20px 4px 25px;
  }

  @media (max-width: 626px){
    padding: 4px 16px 4px 20px;
  }
`;

const HeaderTop = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    gap: 80px;

    ${HeaderWrapper}.active &{
        justify-content: space-between;
    }

    @media (max-width: 1460px){
        gap: 50px;
    }

        @media (max-width: 626px){
        gap: 20px;
    }
`
const LogoWrapper = styled.div`
    cursor: pointer;
`

const Logo = styled.h1`
    font-family: var(--font-secondary);
    font-size: 1.75rem;
    color: #C2C0B9;
    white-space: nowrap; /* 로고가 줄바꿈되어 너비가 줄어드는 것을 방지 */
`

const Btns = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 60px;
    height: 60px;
    background: transparent;
    border: none;
    cursor: pointer;
    color: var(--main-color);
    padding: 0;

    svg {
        display: block;
        transition: width 0.3s, height 0.3s, stroke-width 0.3s;
        /* 햄버거 아이콘의 선 두께를 여기서 조절합니다 */
        stroke-width: 1; /* 기본보다 약간 두껍게 설정 (취향에 따라 1.5~2.2 사이 조절) */
    }

    .icon-close {
        width: 48px;
        height: 48px;
        /* X 아이콘은 너무 두꺼우면 답답할 수 있으니 별도 조절 가능 */
        stroke-width: 1; 
    }

    .icon-hamburger {
        width: 38px;
        height: 38px;
    }

    /* 1024px 이하 */
    @media (max-width: 1024px) {
        width: 50px;
        height: 50px;
        .icon-close { width: 40px; height: 40px; }
        .icon-hamburger { 
            width: 32px; height: 32px; 
        }
    }

    /* 676px 이하 */
    @media (max-width: 676px) {
        width: 45px;
        height: 45px;
        .icon-close { width: 36px; height: 36px; }
        .icon-hamburger { width: 28px; height: 28px; }
    }

    /* 457px 이하 (헤더 작아지는 시점) */
    @media (max-width: 457px) {
        width: 38px;
        height: 38px;
        .icon-close { width: 30px; height: 30px; }
        .icon-hamburger { 
            width: 24px; height: 24px; 
        }
    }
`;

const Nav = styled.ul`
  width: 500px;
  max-width: 80vw; /* 화면이 작을 때는 화면 너비의 80%만 차지하도록 제한 */
  font-family: var(--font-secondary);
  overflow: hidden; // 꼭 필요: height 애니메이션 위해
  display: flex;
  flex-direction: column;
  /* transition: 500ms; */
  gap: 5px;

  li {
    width: fit-content;

    h2 {
        font-weight: normal;
            font-size: 3.5rem;
            color: var(--main-color);
            transition: 500ms;
    }

    &:hover h2 {
      font-weight: bold;
      cursor: pointer;
    }
  }

  .project {
    display: flex;
  }
  @media (max-width: 770px){
    width: 350px;
  }
    @media (max-width: 512px){
    width: 280px;
  }

    @media (max-width: 460px){
        padding-left: 10px;
    width: 200px;
  }
`;

const ProjectListWrapper = styled.ul`
    display: none;
    flex-direction: column;
    margin-top: 38px;
    gap: 10px;

    ${Nav} .project:hover &{
    display: flex;
    }
`

const ProjectLists = styled.li`
    cursor: pointer;

    .textBox{
        width: fit-content;
        position: relative;
        padding-bottom: 5px;
        display: flex;
        display: flex;
        align-items: flex-end;
        gap: 5px;
    }

    h3{
        color: var(--main-color);
        font-size: 1.5rem;
        font-weight: normal;
    }

/*     .textBox::after{
        content: "";
        display: block;
        width: 0;
        height: 3px;
        background-color: var(--main-color);
        position: absolute;
        bottom: 0;
        left: 0;
        opacity: 0;
        transition: 500ms;
    }

    .textBox:hover::after{
        width: 100%;
        opacity: 1;
    } */

    span{
        color: var(--main-color);
        font-size: 0.8rem;
        padding-bottom: 5px;
    }
`

const SnsLink = styled.div`
    width: 70px;
    height: 30px;
    display: flex;
    justify-content: space-between;
    align-self: flex-end;
    margin-right: 20px;
`

const Sns = styled.div`
    width: 30px;
    height: 30px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;

    img{
        width: 100%;
        height: 100%;
        transition: 400ms;

        &:hover{
            width: 120%;
            height: 120%;
        }
    }
`