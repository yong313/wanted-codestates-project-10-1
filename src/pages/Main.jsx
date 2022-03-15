import React, { useState } from 'react';
import styled from 'styled-components';
import RepoContain from '../common/RepoContain';
import Search from '../components/Search';
import Spinner from '../components/Spinner';
import Added from '../components/Added';
import CautionModal from '../components/CautionModal';


import MainTitle from '../components/MainTitle';

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
          <Test2>
            <MainTitle content="Github Repositories Searcher 🔍" />
            <Search setIsLoading={setIsLoading} />
            {/* TestBtn 모달 테스트용  */}
            <TestBtn onClick={modalHandler} />
          </Test2>
          {/* 맵 돌릴 구간 */}
          {isLoading ? <Spinner /> : <RepoContain />}
        </LeftBox>
        {/* view 작업 용 */}

        <RightBox>

    

          <MainTitle content="Search In Repository 😎" />
                  <RepoContain selectRepo />
          <Added />

        </RightBox>
      </Container>
    </>
  );
}

const Container = styled.div`
  width: 100%;
  max-width: 1200px;
  height: 100%;
  display: flex;
  padding-top: 8rem;
`;

const LeftBox = styled.div`
  /* background-color: pink; */
  width: 50%;
  height: 90vh;
  max-height: 90%;
  padding: 0 2.5rem;
`;

const Test2 = styled.div`
  width: 100%;
`;

const RightBox = styled.div`
  background-color: pink;
  width: 50%;
  height: auto;
  display: flex;
  flex-direction: column;
  padding: 0 2.5rem;
`;

const TestBtn = styled.button`
  position: fixed;
  top: 0px;
  width: 100px;
  height: 100px;
  background-color: yellow;
`;
