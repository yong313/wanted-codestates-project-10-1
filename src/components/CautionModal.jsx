import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import styled, { keyframes } from 'styled-components';

export default function CautionModal({ content, setShowModal }) {
  const dispatch = useDispatch();
  useEffect(() => {
    const timeOut = setTimeout(() => dispatch(setShowModal()), 1250);
    return () => {
      clearTimeout(timeOut);
    };
  }, [dispatch, setShowModal]);

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
  width: 38rem;
  height: 18rem;
  line-height: 18rem;
  text-align: center;
  border-radius: 20px;
  background-color: #fff;
  animation: ${rotate} 1.45s 1;
`;
const Content = styled.div`
  width: 100%;
  height: 100%;
  font-weight: bold;
  font-size: 2.55rem;
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
  background-color: rgba(0, 0, 0, 0.65);
  animation: ${rotate} 1.35s 1;
`;
