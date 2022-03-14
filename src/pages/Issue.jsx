import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import IssueC from '../components/IssueC';
import Pagination from '../components/Pagination';
import axios from 'axios';
import { headers } from '../util/util';

const DISPLAY_CARD_LENGTH = 9;

export default function Issue() {
  const datas = [];
  const [issueDataArr, SetIssueDataArr] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(1);
  const [issues, setIssues] = useState(new Array(100).fill('hi'));
  const [numOfPages, setNumOfPages] = useState(0); // 페이지네이션 인덱스 길이(갯수)

  /* data 연동 시 받아올 형식 */

  //   const {userID,repoName} = JSON.parse(window.localStorage.getItem('repos'));
  //   const URL = `https://api.github.com/repos/${userId}/${repoName}/issues?state=all`;

  const URL =
    'https://api.github.com/repos/hinyc/wanted-codestates-project-10-6/issues?state=all';

  useEffect(() => {
    (async () => {
      const { data: dataArr } = await axios.get(URL, headers);
      dataArr.forEach((data) => {
        const {
          title,
          repository_url,
          created_at,
          state,
          user: { id, avatar_url },
        } = data;
        datas.push({
          title,
          repository_url,
          created_at,
          state,
          user: { id, avatar_url },
        });
      });
      SetIssueDataArr(datas);
    })();
  }, []);

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
    <Container>
      <Back>Home</Back>
      <Buttons>
        <button>All</button>
        <button>Open</button>
        <button>Closed</button>
      </Buttons>
      <P>hinyc/wanted-codestates-project-10-8 ISSUES</P>
      <IssueList>
        {issueDataArr.map((dataObj) => (
          <IssueC dataObj={dataObj} />
        ))}
      </IssueList>
      <Pagination issues={issues} />
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 1080px;
  background-color: white;
`;

const Back = styled.div`
  width: 12.6rem;
  height: 4.1rem;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 900;
  font-size: 3.5rem;
  line-height: 4.1rem;
  color: #00aaee;
`;
const Buttons = styled.div`
  width: 20.5rem;
  height: 5rem;
  border: 3px solid #ffffff;
  box-sizing: border-box;
  border-radius: 2rem;
`;
const P = styled.div`
  font-weight: 900;
  font-size: 4rem;
  line-height: 4.7rem;
  color: #eee;
`;
const IssueList = styled.div`
  width: 100%;
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(3, 1fr);
`;
