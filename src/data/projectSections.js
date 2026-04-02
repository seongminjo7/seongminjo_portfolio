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
import animalcrossingModal01 from "../img/project/modal/animalcrossing01.png"
import animalcrossingModal02 from "../img/project/modal/animalcrossing02.png"
import animalcrossingModal03 from "../img/project/modal/animalcrossing03.png"
import animalcrossingModal04 from "../img/project/modal/animalcrossing04.png"
import animalcrossingModal05 from "../img/project/modal/animalcrossing05.png"

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
        moreDescription: [
            {
                title: "E-commerce Redesign & UX Optimization",
                content: "브랜드 아이덴티티를 반영한 UI 리뉴얼 및 사용자 중심의 인터페이스 재설계"
            },
            {
                title: "Full Responsive Architecture",
                content: "유동적 레이아웃 설계를 통해 데스크톱, 태블릿, 모바일을 아우르는 일관된 사용자 경험 제공"
            },
            {
                title: "Cloud Database Integration",
                content: "Firebase를 활용한 실시간 데이터 바인딩 및 장바구니/찜하기 등의 동적 데이터 처리 로직 구현"
            },
            {
                title: "Efficient Product Filtering",
                content: "카테고리별 실시간 상품 필터링 기능을 구축하여 정보 탐색 효율성 극대화"
            },
            {
                title: "Image Asset Management",
                content: "Cloudinary 등 외부 스토리지를 활용한 대용량 이미지 로딩 최적화 및 고해상도 비주얼 구현"
            },
        ],
        stack: ["React", "Firebase", "Cloudinary", "Swiper", "Styled-Components", "Figma", "Git", "Netlify"],
        siteUrl: "https://guess-shop.netlify.app/",
        navTitle: "Guess",
        detailImages: [guessModal00, guessModal01, guessModal02, guessModal03],
    },
    {
        id: "ferrari",
        title: "SCUDERIA FERRARI",
        description: "GSAP 인터랙션과 실시간 경기 카운트다운을 담은\nScuderia Ferrari F1팀 팬페이지",
        image: ferrariImg,
        responsive: true,
        contribution: "100%",
        stack: ["GSAP", "ScrollTrigger", "Figma", "Photoshop", "Premiere", "Git"],
        moreDescription: [
            {
                title: "Responsive Design",
                content: "모바일 터치 인터랙션 최적화 및 적응형 레이아웃 구현"
            },
            {
                title: "GSAP & ScrollTrigger",
                content: "서킷 드로잉 및 차량 이동 애니메이션으로 브랜드 정체성 강화"
            },
            {
                title: "Interactive UI",
                content: "마우스 / 터치 좌표를 활용한 랜덤 이미지 제너레이팅 섹션 개발"
            },
            {
                title: "Real - time Countdown",
                content: "경기 일정에 맞춘 D-Day 카운트다운 시스템 구축"
            },
        ],
        siteUrl: "https://seongminjo7.github.io/ferrari2026/",
        navTitle: "Scuderia Ferrari",
        detailImages: [ferrariModal00, ferrariModal01, ferrariModal02, ferrariModal03, ferrariModal04]
    },
    {
        id: "animalCrossing",
        title: "ANIMAL CROSSING",
        description: "Nookipedia API를 연동한 모여봐요 동물의 숲의\n주민 검색 및 아이템 정보 시스템",
        image: animalcrossingImg,
        responsive: false,
        contribution: "100%",
        stack: ["Vite", "API", "Styled-Components", "Figma", "Photoshop", "Illustrator", "Git", "Netlify"],
        moreDescription: [
            {
                title: "Asset Branding & Consistency",
                content: "모여봐요 동물의 숲 특유의 톤앤매너를 유지하기 위한 커스텀 컴포넌트 제작 및 일관된 시각적 브랜딩 적용"
            },
            {
                title: "Game-Inspired Interface Design",
                content: "인게임 UI/UX 요소를 재해석한 테마 디자인 및 사용자 경험(UX) 중심의 인터페이스 설계"
            },
            {
                title: "Interactive Content Exploration",
                content: "사용자가 직관적으로 정보를 탐색할 수 있도록 설계된 콘텐츠 레이아웃 및 상호작용 최적화"
            },
            {
                title: "API Data Integration & Processing",
                content: "Nookipedia 외부 API 연동을 통한 실시간 데이터 패칭 및 비동기 통신 로직 구축"
            },
            {
                title: "Advanced Search & Filtering System",
                content: "동물 주민, 도구, 제작 재료 등 다각도 카테고리 필터링 및 실시간 검색 기능 구현"
            },
        ],
        siteUrl: "https://animal-crossing-apipage.netlify.app/",
        navTitle: "Animal Crossing",
        detailImages: [animalcrossingModal00, animalcrossingModal01, animalcrossingModal02, animalcrossingModal03, animalcrossingModal04, animalcrossingModal05]
    },
    {
        id: "coldplay",
        title: "COLDPLAY",
        subTitle: "(Clone Coding)",
        description: "외부 사이트의 레이아웃과 UI 인터랙션을\nColdplay 팬 사이트로 재현한 클론 프로젝트",
        image: coldplayiImg,
        responsive: true,
        contribution: "Publishing 100%",
        stack: ["Figma", "Premiere", "Git"],
        moreDescription: [
            {
                title: "UI/UX Reverse Engineering",
                content: "기존 웹사이트의 레이아웃 구조와 디자인 시스템을 분석하여 픽셀 단위의 정교한 클론 구현"
            },
            {
                title: "Component-Based Architecture",
                content: "재사용 가능한 UI 컴포넌트 설계를 통한 코드의 유지보수성 및 일관성 확보"
            },
            {
                title: "Visual Asset Optimization",
                content: "아티스트 이미지와 영상을 활용한 시각적 완성도 유지 및 브라우저 성능 고려"
            },
            {
                title: "Dynamic Tab Interface",
                content: "State 제어를 통한 탭 메뉴 전환 로직 구현 및 컨텐츠 렌더링 최적화"
            },
            {
                title: "Adaptive Responsive Layout",
                content: "미디어 쿼리를 활용해 다양한 디바이스 환경에 최적화된 적응형 웹 구조 설계"
            },
        ],
        siteUrl: "https://seongminjo7.github.io/coldplay/",
        navTitle: "ColdPlay",
        detailImages: [coldplayiModal00, coldplayiModal01, coldplayiModal02]
    },
    {
        id: "peat",
        title: "PEAT",
        subTitle: "(Team Project)",
        description: "가상의 동물 환경 보호 단체 PEAT의 웹사이트 제작 팀 프로젝트",
        image: peatiImg,
        responsive: false,
        contribution: "Main 100%, Goods 80%",
        stack: ["Swiper", "Figma", "Premiere", "Git"],
        moreDescription: [
            {
                title: "Brand Identity & Character Design ",
                content: "동물 환경 보호 단체 'PEAT'의 브랜드 로고 및 4종의 메인 캐릭터 아이덴티티 개발"
            },
            {
                title: "Visual Storytelling ",
                content: "브랜드 캐릭터를 활용한 시각적 스토리텔링으로 단체의 메시지를 효과적으로 전달하는 인터페이스 구축"
            },
            {
                title: "Main Page Design & Development (100%)",
                content: "메인 페이지의 UI/UX 기획, 디자인 및 프론트엔드 퍼블리싱 전과정 단독 수행"
            },
            {
                title: "Goods Page Development (70%)",
                content: "굿즈 판매 페이지의 기능 구현을 통한 프로젝트 기여"
            },
            {
                title: "Dynamic Interaction Design",
                content: "스크롤 위치에 반응하는 숫자 카운팅(Number Animation) 효과 구현"
            },
        ],
        siteUrl: "https://seongminjo7.github.io/peat/",
        navTitle: "Peat",
        detailImages: [peatModal00, peatModal01, peatModal02, peatModal03, peatModal04]
    }
];
