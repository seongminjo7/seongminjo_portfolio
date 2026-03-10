import styled from "styled-components"
import { designSections } from "../data/designSections"
import { useState } from 'react';
import { IoMdArrowRoundBack } from "react-icons/io";
import { Element } from "react-scroll";

export default function Design() {


    const [activeId, setActiveId] = useState(null)

    const handleClick = (id) => {
        setActiveId(id)
    };

    const handleBackClick = (e) => {
        e.stopPropagation();
        setActiveId(null)
    }

    return (
        <Element name="design">
            <DesignWrapper>
                <h2>DESIGN</h2>
                <DesignList>
                    {designSections.map((section, index) => (
                        <Lists
                            key={section.id}
                            className={`designs ${section.id} ${activeId === section.id ? 'active' : ''}`}
                            onClick={() => handleClick(section.id)}
                        >
                            <h3>{index + 1}</h3>
                            <div className="designInfo">
                                <p className="title">{section.title}</p>
                                <p className="description">{section.description}</p>
                            </div>{/* designInfo */}

                            <div className="designInfoActive">
                                <div className="textbox">
                                    <p className="title">{section.title}</p>
                                    <p className="description">{section.moreDescription}</p>
                                </div>{/* textbox */}

                                <div className="designMore">
                                    <div className="imgbox">

                                    </div>
                                </div>{/* designMore */}
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
                            </div>{/* designInfoActive */}

                        </Lists>
                    ))}
                </DesignList>
            </DesignWrapper>
        </Element>
    )
}

const DesignWrapper = styled.div`
    /* width: 100%; */
    height: 992px;
    background-color: var(--background-color);
    display: flex;
    flex-direction: column;
    padding: 60px 150px;
    box-sizing: border-box;
    justify-content: space-between;
    transition: background-color 300ms ease;


    h2{
        font-family: var(--font-main);
        font-size: 64px;
        font-weight: bold;
        color: var(--main-color);
    }
`

const DesignList = styled.ul`
    height: 700px;
    display: flex;
    justify-content: space-evenly;
    gap: 60px;
    padding: 0;
    margin: 0;
`

const Lists = styled.li`
    height: 100%;
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

    h3{
        font-family: var(--font-italic);
        font-style: italic;
        font-size: 280px;
        color: var(--background-color);
        margin-top: 20px;
        margin-bottom: 65px;
        transition: 800ms;

    }

    .designInfo{
        display: flex;
        flex-direction: column;
        gap: 30px;
        font-family: var(--font-main);
        font-size: 18px;
        transition: 1000ms;
        


        .title{
            font-weight: bold;
            font-size: 24px;
        }

        .description{
            transition: 1000ms;
        }
    }

    .designInfoActive{
        display: none;
            
        .textbox{
            position: absolute;
            left: 80px;
            top: 53px;
            display: flex;
            gap: 10px;
            flex-direction: column;

            .title{
                font-family: var(--font-italic);
                font-style: italic;
                font-size: 40px;
                font-weight: bold;
            }
        }


        .designMore{
            height: 460px;
            overflow-y: scroll;
            .imgbox{
                height: 1000px;
                background-color: var(--background-color);
            }
        }
    }

    &.active{
        display: block;
        flex: 1.5;
        
        h3{
            font-size: 50px;
            margin:0 0 60px;
        }

        .designInfo{
            display: none;
        }

        .designInfoActive{
            display: block;
        }
    }
`