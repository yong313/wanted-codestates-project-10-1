import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import RepoContainer from '../common/RepoContainer';
import { deleteData } from '../modules/mainPage';

function AddedResult() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const addRepositories = useSelector((state) => state.mainPage.addRepo);
  const handleDltClick = (e) => {
    e.stopPropagation();
    const target = e.target.id;
    let clickedData = addRepositories.filter(
      (current, i) => Number(target) === i,
    );
    let leftData = addRepositories.filter((current, i) => Number(target) !== i);
    dispatch(deleteData(leftData));
  };
  const handleSetLocalStorage = (e) => {
    const target = Number(e.target.id);
    const clickedData = addRepositories[target];
    window.localStorage.setItem('selectedRepos', JSON.stringify(clickedData));
    navigate('/issue');
  };
  return (
    <>
      {addRepositories &&
        addRepositories.map((repo, index) => {
          return (
            <RepoContainer
              repo={repo}
              id={index}
              handleDltClick={(e) => handleDltClick(e)}
              handleSetLocalStorage={(e) => handleSetLocalStorage(e)}
              button={'REMOVE'}
              selectRepo
            />
          );
        })}
    </>
  );
}

export default AddedResult;
