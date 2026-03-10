import guessImg from "../img/project/guess.png"
import ferrariImg from "../img/project/ferrari.png"
import animalcrossingiImg from "../img/project/animalcrossing.png"
import coldplayiImg from "../img/project/coldplay.png"
import peatiImg from "../img/project/peat.png"

// 배열 타입도 추론되게 export
export const projectSections = [
    {
        id: "Guess",
        title: "GUESS",
        description: "게스 쇼핑몰 사이트",
        image: guessImg,
        responsive: true,
        contribution: "Contribution : 100%",
        stack: ["React", "Firebase"],
        moreDescription: "실제 Guess 사이트를 리디자인하고 반응형 웹 구조 설계, 상품 리스트 필터 기능, 장바구니 기능 등을 직접 구현했습니다.",
        siteUrl: "https://guess-shop.netlify.app/",
        navTitle: "Guess",
    },
    {
        id: "ferrari",
        title: "SCUDERIA FERRARI",
        description: "스쿠데리아 페라리 F1 팀의 팬사이트",
        image: ferrariImg,
        responsive: true,
        contribution: "Contribution : 100%",
        stack: ["GSAP", "ScrollTrigger"],
        moreDescription: "스쿠데리아 페라리의 팬사이트입니다.",
        siteUrl: "https://seongminjo7.github.io/ferrari2026/",
        navTitle: "Scuderia Ferrari",
    },
    {
        id: "animalCrossing",
        title: "ANIMAL CROSSING",
        description: "모여봐요 동물의 숲의 API를 이용한 정보 사이트",
        image: animalcrossingiImg,
        responsive: false,
        contribution: "Contribution : 100%",
        stack: ["Vite", "API"],
        moreDescription: "실제 Zara 사이트를 클론하며 반응형 웹 구조 설계, 상품 리스트 필터 기능 등을 직접 구현했습니다.",
        siteUrl: "https://animal-crossing-apipage.netlify.app/",
        navTitle: "Animal Crossing",
    },
    {
        id: "coldplay",
        title: "COLD PLAY",
        subTitle: "(Clone Coding)",
        description: "밴드 Coldplay의 팬사이트",
        image: coldplayiImg,
        responsive: true,
        contribution: "Contribution : 100%",
        stack: [],
        moreDescription: "대혜건축의 웹사이트를 콜드플레이 팬페이지로 클론코딩을 하였습니다.",
        siteUrl: "https://seongminjo7.github.io/coldplay/",
        navTitle: "Cold Play",
    },
    {
        id: "peat",
        title: "PEAT",
        subTitle: "(Team Project)",
        description: "가상의 동물 환경 보호 단체 PEAT의 웹사이트",
        image: peatiImg,
        responsive: false,
        contribution: "Contribution : Main Page 100%, Goods Page 80%",
        stack: ["React", "Styled-Components", "Firebase"],
        moreDescription: "",
        siteUrl: "https://seongminjo7.github.io/peat/",
        navTitle: "Peat",
    }
];
