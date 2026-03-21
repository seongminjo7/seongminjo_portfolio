import styled from 'styled-components';
import { IoMdClose } from 'react-icons/io';
import { useEffect } from 'react';

export default function ProjectModal({ project, onClose }) {

  useEffect(() => {
    // 1. project가 없으면(모달이 닫힌 상태면) 아무것도 안 함
    if (!project) return;

    // 2. 모달이 열릴 때만 스크롤 고정
    const scrollY = window.scrollY;
    document.body.style.cssText = `
        position: fixed; 
        top: -${scrollY}px; 
        width: 100%;
        overflow-y: scroll;
    `;

    // 3. 모달이 닫힐 때(정리 함수 실행 시) 복구
    return () => {
      const scrollY = document.body.style.top;
      document.body.style.cssText = '';
      window.scrollTo(0, parseInt(scrollY || '0') * -1);
    };
  }, [project]); // ★ 이 부분이 핵심입니다!

  // 데이터가 없을 때 렌더링 방지 (에러 해결 핵심)
  if (!project) return null;

  return (
    <ModalOverlay onClick={onClose}>
      <ModalContainer onClick={(e) => e.stopPropagation()}>
        <CloseBtn onClick={onClose}><IoMdClose size={40} /></CloseBtn>

        <ModalContent onWheel={(e) => e.stopPropagation()}>
          <ModalTitle>
            <h2>{project.title}</h2>
            <p className="sub">{project.subTitle}</p>
          </ModalTitle>

          <ModalBody>
            <InfoGrid>
              <Stack>
                <h4>STACK</h4>
                <p>{project.stack?.join(', ')}</p>
              </Stack>
              <Contribution>
                <h4>CONTRIBUTION</h4>
                <p>{project.contribution}</p>
              </Contribution>
            </InfoGrid>

            <Description>
              {/* <h4>DESCRIPTION</h4> */}
              <p>{project.moreDescription || project.description}</p>
            </Description>

            <ImageList>
              {project.detailImages?.map((img, idx) => (
                <img key={idx} src={img} alt={`${project.title} detail ${idx}`} />
              ))}
              {!project.detailImages?.length && <div className="sampleImg" />}
            </ImageList>
          </ModalBody>
        </ModalContent>
      </ModalContainer>
    </ModalOverlay>
  );
}

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(41, 41, 41, 0.50);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
  backdrop-filter: blur(8px);

    h4 {
    font-size: 1.8rem;
    letter-spacing: -.8px;
    /* color: var(--text-color); */
    margin-bottom: 10px;
  }

    @media (max-width: 770px){
      h4{
        font-size: 1.5rem;
      }
  }

      @media (max-width: 512px){
      h4{
        font-size: 1.2rem;
      }
  }
`;

const ModalContainer = styled.div`
  width: 90vw;
  max-width: 1400px;
  height: 85vh;
  background-color: var(--background-color);
  border-radius: 40px;
  position: relative;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  border: 12px solid var(--main-color);
`;

const ModalContent = styled.div`
  flex: 1;
  padding: 80px 120px;
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-thumb {
    background: var(--text-color);
    border-radius: 10px;
  }

  @media (max-width: 1024px){
    padding: 40px 60px;
  }

  @media (max-width: 770px){
    padding: 30px 30px;
  }

  @media (max-width: 512px){
    padding: 20px 15px;
  }
`;

const ModalTitle = styled.div`
  padding-bottom: 10px;
  margin-bottom: 30px;
  border-bottom: 5px solid var(--main-color);
  display: flex;
  gap: 10px;
  align-items: flex-end;

  h2 {
    font-family: var(--font-italic);
    font-style: italic;
    font-size: 3.5rem;
    color: var(--main-color);
    /* margin: 0; */
  }

  .sub {
    color: var(--main-color);
    font-size: 1.5rem;
    padding-bottom: 12px;
  }

  @media (max-width: 770px){
    h2{
      font-size: 3rem;
    }

    .sub{
      font-size: 1.2rem;
      padding-bottom: 8px;
    }
  }

    @media (max-width: 512px){
    h2{
      font-size: 2.5rem;
    }
  }
`;

const ModalBody = styled.div``;

const InfoGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  margin-bottom: 50px;

  @media (max-width: 770px){
    margin-bottom: 30px;
  }

`;

const Stack = styled.div`
  p {
    font-size: 1.5rem;
    font-weight: 500;
  }

  @media (max-width: 770px){
    p{
      font-size: 1.2rem;
    }
  }

        @media (max-width: 512px){
    p{
      font-size: 1rem;
    }
  }
`;

const Contribution = styled.div`


  p {
    font-size: 1.5rem;
    font-weight: 500;
  }

    @media (max-width: 770px){
    p{
      font-size: 1.2rem;
    }
  }

      @media (max-width: 512px){
    p{
      font-size: 1rem;
    }
  }
`;

const Description = styled.div`
  margin-bottom: 60px;


  p {
    font-size: 1.8rem;
    letter-spacing: -1px;
    line-height: 1.6;
    white-space: pre-line; /* \n 줄바꿈 인식 */
  }

    @media (max-width: 770px){
  margin-bottom: 40px;


    p{
      font-size: 1.4rem;
    }
  }

      @media (max-width: 512px){
    p{
      font-size: 1rem;
    }
  }
`;

const ImageList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  img {
    width: 100%;
    border-radius: 16px;
  }

  .sampleImg {
    width: 100%;
    height: 600px;
    background: #f0f0f0;
    border-radius: 20px;
  }

  @media (max-width: 770px){
      img {
    border-radius: 10px;
  }
  }
`;

const CloseBtn = styled.button`
  position: absolute;
  top: 40px;
  right: 50px;
  background: none;
  border: none;
  cursor: pointer;
  color: var(--main-color);
  z-index: 100;
  transition: transform 0.3s;

  &:hover {
    transform: rotate(90deg);
  }

  @media (max-width: 1024px){
    top: 25px;
    right: 20px;
  }
`;