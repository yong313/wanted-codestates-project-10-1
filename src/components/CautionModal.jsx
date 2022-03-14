import React, { useEffect } from 'react';
import styled, { keyframes } from 'styled-components';

export default function CautionModal({ content, setShowModal }) {
  useEffect(() => {
    const timeOut = setTimeout(() => setShowModal(false), 700);
    return () => {
      clearTimeout(timeOut);
    };
  }, [setShowModal]);

  return (
    <>
      <Bg>
        <Container>
          <Content>{content}</Content>
        </Container>
      </Bg>
    </>
  );
}

const rotate = keyframes`
    0% {
      opacity: 1;
    }
    40% {
      opacity: 1;
    }
    100% {
      opacity: 0;
      display: none;
    } 
`;

const Container = styled.div`
  position: fixed;
  width: 700px;
  height: 270px;
  border-radius: 20px;
  background-color: #fff;
  padding: 111px 0;
  animation: ${rotate} 0.8s 1;
`;
const Content = styled.div`
  width: 100%;
  height: 100%;
  text-align: center;
  font-size: 4.8rem;
`;
const Bg = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0px;
  left: 0px;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.4);
  animation: ${rotate} 0.8s 1;
`;
