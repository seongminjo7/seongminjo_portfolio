import styled from 'styled-components';
import { IoMdClose } from 'react-icons/io';
import { useEffect } from 'react';

export default function ProjectModal({ project, onClose }) {

    // 데이터가 없을 때 렌더링 방지 (에러 해결 핵심)
    if (!project) return null;

    return (
        <ModalOverlay onClick={onClose}>
            <ModalContainer onClick={(e) => e.stopPropagation()}>
                <CloseBtn onClick={onClose}>
                    <IoMdClose size={40} />
                </CloseBtn>

                <ModalContent>
                    <div className="header">
                        <h2>{project.title}</h2>
                        <p className="sub">{project.subTitle}</p>
                    </div>

                    <hr />

                    <div className="body">
                        <div className="info-grid">
                            <div>
                                <h4>STACK</h4>
                                <p>{project.stack?.join(', ')}</p>
                            </div>
                            <div>
                                <h4>CONTRIBUTION</h4>
                                <p>{project.contribution}</p>
                            </div>
                        </div>

                        <div className="description">
                            <h4>DESCRIPTION</h4>
                            <p>{project.moreDescription || project.description}</p>
                        </div>

                        {/* 이미지가 있다면 매핑 */}
                        <div className="image-list">
                            {project.detailImages?.map((img, idx) => (
                                <img key={idx} src={img} alt={`${project.title} detail ${idx}`} />
                            ))}
                            {/* 이미지가 없는 경우를 대비한 샘플 박스 */}
                            <div className="sample-img" />
                        </div>
                    </div>
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
  background-color: rgba(0, 0, 0, 0.9);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
  backdrop-filter: blur(8px);
`;

const ModalContainer = styled.div`
  width: 90vw;
  max-width: 1400px;
  height: 85vh;
  background-color: var(--background-color);
  border-radius: 40px;
  position: relative;
  overflow: hidden;
`;

const ModalContent = styled.div`
  height: 100%;
  padding: 80px 120px; /* 요청하신 패딩 */
  overflow-y: auto;
  box-sizing: border-box;

  .header {
    margin-bottom: 30px;
    h2 { font-size: 56px; color: var(--main-color); margin: 0; }
    .sub { font-size: 20px; opacity: 0.8; margin-top: 10px; }
  }

  hr { border: 0.5px solid rgba(0,0,0,0.1); margin: 40px 0; }

  .info-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 40px;
    margin-bottom: 50px;
    h4 { font-size: 14px; color: #888; margin-bottom: 10px; }
    p { font-size: 18px; font-weight: 500; }
  }

  .description {
    margin-bottom: 60px;
    h4 { font-size: 14px; color: #888; margin-bottom: 15px; }
    p { font-size: 20px; line-height: 1.6; white-space: pre-line; }
  }

  .image-list {
    display: flex;
    flex-direction: column;
    gap: 30px;
    img { width: 100%; border-radius: 20px; }
    .sample-img { width: 100%; height: 600px; background: #f0f0f0; border-radius: 20px; }
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
  &:hover { transform: rotate(90deg); }
`;