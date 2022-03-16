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
    let leftData = addRepositories.filter((current, i) => Number(target) !== i);
    dispatch(deleteData(leftData));
  };
  const handleSetLocalStorage = (e, idx) => {
    const target = Number(idx);
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
              key={index}
              repo={repo}
              id={index}
              handleDltClick={(e) => handleDltClick(e)}
              handleSetLocalStorage={(e) => handleSetLocalStorage(e, index)}
              button={'Delete'}
              selectRepo
            />
          );
        })}
    </>
  );
}

export default AddedResult;
