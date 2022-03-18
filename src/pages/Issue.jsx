import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import styled, { css } from 'styled-components';
import IssueC from '../components/IssueC';
import Pagination from '../components/Pagination';
import axios from 'axios';
import { headers } from '../util/util';
import Spinner from '../components/Spinner';

const DISPLAY_CARD_LENGTH = 6; // 한 페이지에 나타낼 인덱스 카드 갯수

export default function Issue() {
  const navigate = useNavigate();
  const datas = useMemo(() => [], []);
  const [issueDataArr, setIssueDataArr] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(1);
  const [numOfPages, setNumOfPages] = useState(0); // 페이지네이션 인덱스 길이(갯수)
  const [clickedText, setClickedText] = useState('All');
  const [showWarnings, setShowWarnings] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const { userID, repoName } = JSON.parse(
    window.localStorage.getItem('selectedRepos'),
  );
  console.log(userID, repoName);
  const URL = `https://api.github.com/repos/${userID}/${repoName}/issues?state=all&&per_page=100`;
  useEffect(() => {
    setIsLoading(true);
    (async () => {
      const { data: dataArr } = await axios.get(URL, headers);
      if (dataArr.length) {
        dataArr.forEach((data) => {
          const {
            title,
            repository_url,
            created_at,
            state,
            html_url,
            number,
            user: { id, avatar_url },
          } = data;
          datas.push({
            title,
            repository_url,
            created_at,
            state,
            html_url,
            number,
            user: { id, avatar_url },
          });
        });
        setIssueDataArr(datas);
        setIsLoading(false);
      } else {
        setShowWarnings('no issue');
      }
    })();
  }, []);

  useEffect(() => {
    // 페이지네이션 인덱스 갯수 계산
    const len = issueDataArr.length;
    const pagesLength = Math.ceil(len / DISPLAY_CARD_LENGTH);

    setNumOfPages(pagesLength);
    // 첫 번째 인덱스로 페이지 초기화
    setCurrentIndex(1);
  }, [issueDataArr]);

  const changePageIndex = useCallback((newIndex) => {
    // 클릭된 페이지 활성화
    setCurrentIndex(newIndex);
  }, []);

  const chageData = (text) => {
    const newDatas = datas.filter((obj) => {
      switch (text) {
        case 'All':
          return obj;
        case 'Open':
          return obj.state === 'open';
        case 'Closed':
          return obj.state === 'closed';
        default:
          throw new Error(`Invalid text : ${text}`);
      }
    });
    setIssueDataArr(newDatas);
  };
  const setOnClick = (text) => {
    setClickedText(text);
    chageData(text);
  };
  return (
    <Container>
      <Nav>
        <Back onClick={() => navigate('/')}> {'<'} Home</Back>
        <Buttons>
          {['All', 'Open', 'Closed'].map((text, idx) => (
            <Button
              key={idx}
              text={text === clickedText}
              onClick={() => setOnClick(text)}
            >
              <span>{text}</span>
            </Button>
          ))}
        </Buttons>
      </Nav>
      <P>{userID + ' / ' + repoName}</P>
      {isLoading ? (
        <SpinnerWrapper>
          <Spinner />
        </SpinnerWrapper>
      ) : (
        <IssueList>
          {issueDataArr.length ? (
            issueDataArr
              .slice(
                DISPLAY_CARD_LENGTH * (currentIndex - 1),
                DISPLAY_CARD_LENGTH * currentIndex - 1 + 1,
              )
              .map((dataObj) => (
                <IssueC key={dataObj.number} dataObj={dataObj} />
              ))
          ) : (
            <ShowWarnings>{showWarnings}</ShowWarnings>
          )}
        </IssueList>
      )}

      {/* <IssueList>
        {isLoading ? (
          <Spinner />
        ) : issueDataArr.length ? (
          issueDataArr
            .slice(
              DISPLAY_CARD_LENGTH * (currentIndex - 1),
              DISPLAY_CARD_LENGTH * currentIndex - 1 + 1,
            )
            .map((dataObj) => <IssueC key={dataObj.number} dataObj={dataObj} />)
        ) : (
          <ShowWarnings>{showWarnings}</ShowWarnings>
        )}
      </IssueList> */}
      {issueDataArr.length ? (
        <Pagination
          currentIndex={currentIndex}
          numOfPages={numOfPages}
          changePageIndex={changePageIndex}
        />
      ) : null}
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  max-width: 1200px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  // justify-content: space-between;
  justify-content: flex-start;
  background-color: #14161a;
  padding: 8rem 0 6rem 0;
  @media (min-width: 1440px) {
    // padding: 4rem 0;
  }
  @media (min-width: 1920px) {
    padding: 8rem 0 6rem 0;
  }
`;
const Nav = styled.div`
  width: 100%;
  display: flex;
`;
const Back = styled.div`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 900;
  font-size: 3.5rem;
  color: #00aaee;
  cursor: pointer;
  width: 50%;
`;
const Buttons = styled.div`
  box-sizing: border-box;
  border-radius: 2rem;
  width: 50%;
  display: flex;
  justify-content: flex-end;
`;
const Button = styled.button`
  color: #ffffff;
  width: 6.9rem;
  font-weight: 900;
  font-size: 16px;
  line-height: 19px;
  height: 5rem;
  &:first-child {
    border-radius: 2rem 0 0 2rem;
    border-left: 3px solid #ffffff;
    border-top: 3px solid #ffffff;
    border-bottom: 3px solid #ffffff;
  }
  &:nth-child(2) {
    border-top: 3px solid #ffffff;
    border-bottom: 3px solid #ffffff;
  }
  &:last-child {
    border-radius: 0 2rem 2rem 0;
    border-right: 3px solid #ffffff;
    border-top: 3px solid #ffffff;
    border-bottom: 3px solid #ffffff;
  }
  ${({ text }) => {
    if (!text) return;
    return css`
      color: #14161a;
      background-color: #ffffff;
    `;
  }};
`;
const P = styled.div`
  font-weight: 900;
  font-size: 4rem;
  margin: 5rem 0;
  color: #eee;
  width: 100%;
`;
const ShowWarnings = styled.p`
  width: 120rem;
  font-size: 3rem;
  color: white;
  font-weight: 900;
  text-align: center;
`;
const IssueList = styled.div`
  width: 100%;
  display: grid;
  gap: 4.5rem;
  justify-items: center;
  grid-template-columns: repeat(3, 1fr);

  @media (min-width: 1440px) {
    gap: 2rem;
    padding: 3rem 2rem 4rem 2rem;
  }
`;
const SpinnerWrapper = styled.div`
  width: 100%;
  height: 49rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;
