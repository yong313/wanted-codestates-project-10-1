import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Pagination from '../components/Pagination';

// 스니펫: rsc / rscp

const DISPLAY_CARD_LENGTH = 9;

const Issues = () => {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [issues, setIssues] = useState(new Array(100).fill('hi'));
  const [numOfPages, setNumOfPages] = useState(0); // 페이지네이션 인덱스 길이(갯수)

  useEffect(() => {
    // 페이지네이션 인덱스 갯수 계산
    const len = issues.length;
    const pagesLength = Math.ceil(len / DISPLAY_CARD_LENGTH);

    console.log(pagesLength);
    setNumOfPages(pagesLength);
    // 첫 번째 인덱스로 페이지 초기화
    setCurrentIndex(1);
  }, [issues]);

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
        {issues
          .slice(
            DISPLAY_CARD_LENGTH * (currentIndex - 1),
            DISPLAY_CARD_LENGTH * currentIndex - 1 + 1,
          )
          .map((issue, index) => {
            return (
              <TempIssueCard issue={issue}>
                <p>{index}</p>
              </TempIssueCard>
            );
          })}
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
  overflow-y: scroll;
`;

const TempIssueCard = styled.article`
  width: 50rem;
  height: 30rem;
  margin: 2.2rem;
  background: #ffffff;
  box-shadow: 0px 2px 20px rgba(0, 0, 0, 0.1);
  border-radius: 20px;

  p {
    color: black;
    text-align: center;
    font-size: 4rem;
  }
`;

export default Issues;
