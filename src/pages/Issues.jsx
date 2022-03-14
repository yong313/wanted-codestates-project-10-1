import React, { useState } from 'react';
import styled from 'styled-components';
import Pagination from '../components/Pagination';

// 스니펫: rsc / rscp

const Issues = () => {
  const [currentPage, setCurrentPage] = useState('1');
  const [issues, setIssues] = useState(new Array(100).fill('hi'));

  const onClickHandler = () => {
    // 클릭된 페이지 활성화
    // 1. 이슈 목록 렌더링
    //
    // 2. 페이지네이션에서 활성화된 페이지 스타일 적용
  };

  return (
    <Wrapper>
      <h1>이슈 목록 페이지</h1>
      <CardWrapper>
        <TempIssueCard />
        <TempIssueCard />
        <TempIssueCard />
      </CardWrapper>
      <Pagination issues={issues} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const CardWrapper = styled.div`
  width: auto;
  height: auto;
  display: flex;
  flex-wrap: wrap;
`;

const TempIssueCard = styled.article`
  width: 50rem;
  height: 30rem;
  margin: 2.2rem;
  background: #ffffff;
  box-shadow: 0px 2px 20px rgba(0, 0, 0, 0.1);
  border-radius: 20px;
`;

export default Issues;
