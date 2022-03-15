import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import RepoContainer from '../common/RepoContainer';
import { searchAfterAdd, setDatas } from '../modules/mainPage';

function SearchResult() {
  const dispatch = useDispatch();
  // 로컬 스토리지에 있는 데이터
  const [detect, setDetect] = useState(false);
  const [currentData, setCurrentData] = useState();
  // const [getSearchRepo, setGetSearchRepo] = useState();
  // const currentData = useSelector((state) => state.mainPage.repoData);
  useEffect(() => {
    const getRepos = window.localStorage.getItem('repos');
    const initialValue = JSON.parse(getRepos);
    const result = initialValue ? initialValue : '';
    setCurrentData(result);
  }, [window.localStorage.getItem('repos')]);
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
  // console.log('current', currentData);
  // useEffect(() => {

  // }, detect);
  return (
    <>
      {currentData &&
        currentData.map((data, index) => {
          // console.log(data);
          return (
            <RepoContainer
              data={data}
              id={index}
              handleAddClick={(e) => handleAddClick(e)}
              button={'Add'}
            />
          );
        })}
    </>
  );
}

export default SearchResult;

// 1.Dispatch 해서 -> changeData를 currentData를 변경
// 2.useState에 저런식으로 식을 걸어놓는게 아니라, useEffect 사용해서 currentData에 변경사항이 생길 때마다 getItem 될 수 있도록 수정.
