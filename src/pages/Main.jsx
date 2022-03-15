import React, { useState } from 'react';
import styled from 'styled-components';
import RepoContain from '../common/RepoContain';
import Search from '../components/Search';
import Spinner from '../components/Spinner';
import Added from '../components/Added';
import axios from 'axios';
import CautionModal from '../components/CautionModal';

export default function Main() {
  const [isLoading, setIsLoading] = useState(false);
  const [showFourModal, setShowFourModal] = useState(false);
  const [showAlreadyModal, setShowAlreadyModal] = useState(false);

  const modalHandler = () => {
    // 4개 이상 등록안되요
    // setShowFourModal(true);

    // 이미등록되있어요
    setShowAlreadyModal(true);
  };

  return (
    <>
      {showFourModal && (
        <CautionModal
          content="4개 이상 저장은 안돼요 😢"
          setShowModal={setShowFourModal}
        />
      )}
      {showAlreadyModal && (
        <CautionModal
          content="이미 저장 되었습니다 😢"
          setShowModal={setShowAlreadyModal}
        />
      )}
      <Container>
        <LeftBox>
          <Test>
            <Test2>
              <Search setIsLoading={setIsLoading} />
              {/* TestBtn 모달 테스트용  */}
              <TestBtn onClick={modalHandler} />
            </Test2>
            {isLoading ? <Spinner /> : <RepoContain />}
          </Test>
        </LeftBox>
        <RightBox>
          <Added />
        </RightBox>
      </Container>
    </>
  );
}

const Container = styled.div`
  width: 100%;
  max-width: 1920px;
  height: 100%;
  display: flex;
`;

const LeftBox = styled.div`
  width: 50%;
  height: auto;
  max-height: 100vh;
  overflow: scroll;
`;

const Test = styled.div`
  width: 100%;
  height: 100%;
`;

const Test2 = styled.div`
  width: 100%;
  height: 20%;
`;

const RightBox = styled.div`
  width: 50%;
  height: auto;
  display: flex;
  flex-direction: row;
`;

const TestBtn = styled.button`
  position: fixed;
  top: 0px;
  width: 100px;
  height: 100px;
  background-color: yellow;
`;
