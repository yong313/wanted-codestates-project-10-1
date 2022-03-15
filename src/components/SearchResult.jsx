import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import RepoContainer from '../common/RepoContainer';
import styled from 'styled-components';
import { searchAfterAdd, setDatas } from '../modules/mainPage';
import useIntersect from '../hoooks/useIntersect';

function SearchResult() {
  const dispatch = useDispatch();
  const [currentData, setCurrentData] = useState([]);
  // -----------------------무한 스크롤---------------------
  const targetRef = useRef(null);
  useEffect(() => {
    const getRepos = window.localStorage.getItem('repos');
    const initialValue = JSON.parse(getRepos);
    const result = initialValue ? initialValue : '';
    setCurrentData(result);
  }, [window.localStorage.getItem('repos')]);
  const newMatchRepoList = useIntersect(targetRef, currentData, 10);
  console.log(currentData);
  console.log(newMatchRepoList);

  // ------------------------------------------------
  // useEffect(() => {
  //   const getRepos = window.localStorage.getItem('repos');
  //   const initialValue = JSON.parse(getRepos);
  //   const result = initialValue ? initialValue : '';
  //   setCurrentData(result);
  // }, [window.localStorage.getItem('repos')]);
  const handleAddClick = (e) => {
    const target = e.target.id;
    const addData = currentData.filter(
      (current) =>
        current.userID === currentData[e.target.id].userID &&
        current.repoName === currentData[e.target.id].repoName,
    );
    const changeData = currentData.filter((current, i) => Number(target) !== i);
    window.localStorage.setItem('repos', JSON.stringify(changeData));
    dispatch(searchAfterAdd(addData[0]));
  };
  return (
    <InfinityScrollBox>
      {currentData.length > 0 ? (
        <>
          {newMatchRepoList.map((data, index) => (
            <RepoContainer
              data={data}
              id={index}
              handleAddClick={(e) => handleAddClick(e)}
              button={'Add'}
              key={index}
              ref={
                index + 10 === newMatchRepoList.length ? targetRef : undefined
              }
            />
          ))}
        </>
      ) : null}
    </InfinityScrollBox>
  );
}

const InfinityScrollBox = styled.div`
  width: 100%;
  height: 80%;
  overflow: scroll;
`;

export default SearchResult;

// 1.Dispatch 해서 -> changeData를 currentData를 변경
// 2.useState에 저런식으로 식을 걸어놓는게 아니라, useEffect 사용해서 currentData에 변경사항이 생길 때마다 getItem 될 수 있도록 수정.
