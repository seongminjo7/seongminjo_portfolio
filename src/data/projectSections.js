import guessImg from "../img/project/guess.png"
import guessModal00 from "../img/project/modal/guess00.png"
import guessModal01 from "../img/project/modal/guess01.png"
import guessModal02 from "../img/project/modal/guess02.png"
import guessModal03 from "../img/project/modal/guess03.png"

import ferrariImg from "../img/project/ferrari.png"
import ferrariModal00 from "../img/project/modal/ferrari00.png"
import ferrariModal01 from "../img/project/modal/ferrari01.png"
import ferrariModal02 from "../img/project/modal/ferrari02.png"
import ferrariModal03 from "../img/project/modal/ferrari03.png"
import ferrariModal04 from "../img/project/modal/ferrari04.png"

import animalcrossingImg from "../img/project/animalcrossing.png"
import animalcrossingModal00 from "../img/project/modal/animalcrossing00.png"

import coldplayiImg from "../img/project/coldplay.png"
import coldplayiModal00 from "../img/project/modal/coldplay00.png"
import coldplayiModal01 from "../img/project/modal/coldplay01.png"
import coldplayiModal02 from "../img/project/modal/coldplay02.png"

import peatiImg from "../img/project/peat.png"
import peatModal00 from "../img/project/modal/peat00.png"
import peatModal01 from "../img/project/modal/peat01.png"
import peatModal02 from "../img/project/modal/peat02.png"
import peatModal03 from "../img/project/modal/peat03.png"
import peatModal04 from "../img/project/modal/peat04.png"



// 배열 타입도 추론되게 export
export const projectSections = [
    {
        id: "Guess",
        title: "GUESS",
        description: "Firebase 기반 장바구니 기능을 구현한 Guess 커머스 리디자인",
        image: guessImg,
        responsive: true,
        contribution: "100%",
        stack: ["React", "Firebase", "Cloudinary", "Swiper", "Styled-Components"],
        moreDescription: "실제 Guess 사이트를 리디자인하고 반응형 웹 구조 설계, 상품 리스트 필터 기능, 장바구니 기능 등을 구현했습니다.",
        siteUrl: "https://guess-shop.netlify.app/",
        navTitle: "Guess",
        detailImages: [guessModal00, guessModal01, guessModal02, guessModal03],
    },
    {
        id: "ferrari",
        title: "SCUDERIA FERRARI",
        description: "GSAP 인터랙션과 실시간 경기 카운트다운을 담은 Scuderia Ferrari F1팀 팬페이지",
        image: ferrariImg,
        responsive: true,
        contribution: "100%",
        stack: ["GSAP", "ScrollTrigger"],
        moreDescription: "스쿠데리아 페라리의 팬사이트입니다.",
        siteUrl: "https://seongminjo7.github.io/ferrari2026/",
        navTitle: "Scuderia Ferrari",
        detailImages: [ferrariModal00, ferrariModal01, ferrariModal02, ferrariModal03, ferrariModal04]
    },
    {
        id: "animalCrossing",
        title: "ANIMAL CROSSING",
        description: "Nookipedia API를 연동한 모여봐요 동물의숲 주민 검색 및 아이템 정보 시스템",
        image: animalcrossingImg,
        responsive: false,
        contribution: "100%",
        stack: ["Vite", "API", "Styled-Components"],
        moreDescription: "Nookipedia API를 연동하여 모여봐요 동물의 숲 게임 속 등장하는 동물 주민들을 필터링, 검색 기능, 도구와 제작 제료 필터링 기능 등을 구현했습니다.",
        siteUrl: "https://animal-crossing-apipage.netlify.app/",
        navTitle: "Animal Crossing",
        detailImages: [animalcrossingModal00]
    },
    {
        id: "coldplay",
        title: "COLDPLAY",
        subTitle: "(Clone Coding)",
        description: "외부 사이트의 레이아웃과 UI 인터랙션을 Coldplay 팬 사이트로 재현한 클론 프로젝트",
        image: coldplayiImg,
        responsive: true,
        contribution: "100%",
        stack: [],
        moreDescription: "대혜건축의 웹사이트를 콜드플레이 팬페이지로 클론코딩을 하였습니다.",
        siteUrl: "https://seongminjo7.github.io/coldplay/",
        navTitle: "ColdPlay",
        detailImages: [coldplayiModal00, coldplayiModal01, coldplayiModal02]
    },
    {
        id: "peat",
        title: "PEAT",
        subTitle: "(Team Project)",
        description: "가상의 동물 환경 보호 단체 PEAT의 웹사이트",
        image: peatiImg,
        responsive: false,
        contribution: "Main 100%, Goods 80%",
        stack: ["Swiper"],
        moreDescription: "",
        siteUrl: "https://seongminjo7.github.io/peat/",
        navTitle: "Peat",
        detailImages: [peatModal00, peatModal01, peatModal02, peatModal03, peatModal04]
    }
];
