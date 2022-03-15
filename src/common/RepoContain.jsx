import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import { ReactComponent as GithubIcon } from '../assets/github_icon.svg';
import useIntersect from '../hoooks/useIntersect';
import { useSelector, useDispatch } from 'react-redux';
import {
  searchAfterAdd,
  setFourModal,
  setOverlapModal,
} from '../modules/mainPage';

const RepoContain = (props) => {
  const targetRef = useRef(null);
  const dispatch = useDispatch();
  const [getSearchRepo, setGetSearchRepo] = useState(() => {
    // 저장된 값 가져오기
    const getRepos = window.localStorage.getItem('repos');
    const initialValue = JSON.parse(getRepos);
    return initialValue || '';
  });

  const newMatchRepoList = useIntersect(
    targetRef,
    getSearchRepo,
    setGetSearchRepo,
  );
  const repoLength = useSelector((state) => state.mainPage.addRepo);
  const handleAddClick = (e, target) => {
    const addData = getSearchRepo.filter(
      (current) =>
        current.userID === getSearchRepo[e.target.id].userID &&
        current.repoName === getSearchRepo[e.target.id].repoName,
    );
    if (repoLength.length < 4) {
      if (repoLength.length > 0) {
        const array = repoLength.map((el) => `${el.userID}${el.repoName}`);
        if (array.includes(`${target.userID}${target.repoName}`)) {
          dispatch(setOverlapModal());
        } else {
          dispatch(searchAfterAdd(addData[0]));
        }
      } else {
        dispatch(searchAfterAdd(addData[0]));
      }
    } else {
      dispatch(setFourModal());
    }
  };

  return (
    <>
      <InfinityScrollBox>
        {getSearchRepo ? (
          <>
            {newMatchRepoList.map((el, index) => (
              <RepoContainBox
                key={index}
                ref={
                  index + 10 === newMatchRepoList.length ? targetRef : undefined
                }
              >
                <LeftBox>
                  <GithubIcon className="github_icon" />
                  <RepoName>{el.repoName}</RepoName>
                </LeftBox>
                <RightBox>
                  <AddButton
                    className="add_btn"
                    id={index}
                    el={el}
                    onClick={(e) => handleAddClick(e, el)}
                  >
                    Add
                  </AddButton>
                </RightBox>
              </RepoContainBox>
            ))}
          </>
        ) : null}
      </InfinityScrollBox>
    </>
  );
};

const InfinityScrollBox = styled.div`
  width: 100%;
  height: 80%;
  overflow: scroll;
`;

const RepoContainBox = styled.div`
  width: 100%;
  height: 10rem;
  padding: 2rem 3rem;
  margin: 2rem 0;
  border-radius: 2rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  cursor: pointer;

  &:not(:hover) {
    background-color: #4f5864;
    color: #ccc;
    transition: all 0.25s ease;

    .github_icon {
      fill: #ccc;
    }
  }

  &:hover {
    background-color: #fff;
    color: #14161a;
    transition: all 0.25s ease;

    .github_icon {
      fill: #14161a;
    }

    .add_btn {
      background-color: #00acee;
      color: #fff;
    }
  }
`;

const LeftBox = styled.div`
  width: 80%;
  height: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const RepoName = styled.p`
  font-size: 3rem;
  font-weight: bold;
  margin-left: 0.8rem;
`;

const RightBox = styled(LeftBox)`
  width: 20%;
  height: 100%;
  justify-content: flex-end;
`;

const AddButton = styled.button`
  width: auto;
  height: auto;
  padding: 1rem 2rem;
  border-radius: 1rem;
  font-size: 3rem;
  font-weight: bold;
  color: #fff;
  background-color: #ccc;
`;

export default RepoContain;
