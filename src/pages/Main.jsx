import React, { useState } from 'react';
import styled from 'styled-components';
import RepoContain from '../common/RepoContain';
import Search from '../components/Search';
import Spinner from '../components/Spinner';
import Added from '../components/Added';
import CautionModal from '../components/CautionModal';

import MainTitle from '../components/MainTitle';
import AddedResult from '../components/AddedResult';

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
          <MainTitle content="Github Repositories Searcher 🔍" />
          <Search setIsLoading={setIsLoading} />

          {/* 맵 돌릴 구간 */}
          <ResultBox>{isLoading ? <Spinner /> : <RepoContain />}</ResultBox>
        </LeftBox>
        {/* view 작업 용 */}
        <RightBox>
          <MainTitle content="Search In Repository 😎" />
          <AddedResult />
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
  padding-right: 50px;
`;

const ResultBox = styled.div`
  width: 100%;
  height: 670px;
  margin-top: 30px;
  overflow: scroll;
`;

const RightBox = styled.div`
  /* background-color: pink; */
  width: 50%;
  height: auto;
  /* display: flex;
  flex-direction: column; */
  padding-left: 50px;
`;
