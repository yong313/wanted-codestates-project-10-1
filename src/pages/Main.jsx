import React, { useState } from 'react';
import styled from 'styled-components';
import RepoContain from '../common/RepoContain';
import Search from '../components/Search';
import Spinner from '../components/Spinner';
import CautionModal from '../components/CautionModal';
import MainTitle from '../components/MainTitle';
import AddedResult from '../components/AddedResult';
import { useSelector } from 'react-redux';
import { setFourModal, setOverlapModal } from '../modules/mainPage';

export default function Main() {
  const [isLoading, setIsLoading] = useState(false);

  const showFourModal = useSelector((state) => state.mainPage.modalOpen);
  const showAlreadyModal = useSelector((state) => state.mainPage.secondModal);

  return (
    <>
      {showFourModal && (
        <CautionModal
          content="4개 이상 저장은 안돼요 😢"
          setShowModal={setFourModal}
        />
      )}
      {showAlreadyModal && (
        <CautionModal
          content="이미 저장 되었습니다 😢"
          setShowModal={setOverlapModal}
        />
      )}
      <Container>
        <LeftBox>
          <SearchBox>
            <MainTitle content="Github Repositories Searcher 🔍" />
            <Search setIsLoading={setIsLoading} />
          </SearchBox>
          <ResultBox>{isLoading ? <Spinner /> : <RepoContain />}</ResultBox>
        </LeftBox>
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
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding-top: 4rem;
`;

const LeftBox = styled.div`
  width: 50%;
  height: 100%;
  max-height: 90%;
  padding-right: 50px;
`;

const SearchBox = styled.div`
  width: 100%;
  height: auto;
`;

const ResultBox = styled.div`
  width: 100%;
  height: 90%;
  overflow: scroll;

  @media (min-width: 1440px) {
    height: 77%;
  }
  @media (min-width: 1920px) {
    height: 82%;
  }
`;

const RightBox = styled.div`
  width: 50%;
  height: 100%;
  padding-left: 50px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
