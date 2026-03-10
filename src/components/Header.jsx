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
                                <IoClose size={48} />
                            </motion.div>
                        ) : (
                            <motion.div
                                key="hamburger"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.3 }}
                            >
                                <RxHamburgerMenu size={38} strokeWidth={1.1} />
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
                        <li className="about">
                            <Link to="about" smooth={true} duration={800} onClick={toggleMenu}>
                                <h2>About Me</h2>
                            </Link>
                        </li>
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
                        <Link to="design" smooth={true} duration={800} onClick={toggleMenu}>
                            <li className="design"><h2>Design</h2></li>
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
`;

const HeaderTop = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    gap: 80px;

    ${HeaderWrapper}.active &{
        justify-content: space-between;
    }
`
const LogoWrapper = styled.div`
    cursor: pointer;
`

const Logo = styled.h1`
    font-family: var(--font-secondary);
    font-size: 28px;
    color: #C2C0B9;
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

    svg {
      display: block;
    }
`

const Nav = styled.ul`
  width: 500px;
  font-family: var(--font-secondary);
  overflow: hidden; // 꼭 필요: height 애니메이션 위해
  display: flex;
  flex-direction: column;

  li {
    width: fit-content;

    h2 {
        font-weight: normal;
            font-size: 56px;
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
        font-size: 24px;
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
        font-size: 13px;
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