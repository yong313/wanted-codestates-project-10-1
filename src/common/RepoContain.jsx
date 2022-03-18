import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import { ReactComponent as GithubIcon } from '../assets/github_icon.svg';
import useIntersect from '../hoooks/useIntersect';
import { useSelector, useDispatch } from 'react-redux';
import {
  addSearchList,
  searchAfterAdd,
  setFourModal,
  setOverlapModal,
} from '../modules/mainPage';

const RepoContain = (props) => {
  const targetRef = useRef(null);
  const dispatch = useDispatch();

  const getSearchRepo = useSelector((state) => state.mainPage.searchList);
  const setGetSearchRepo = (data) => {
    dispatch(addSearchList(data));
  };

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
          window.localStorage.setItem(
            'savedRepo',
            JSON.stringify([...repoLength, addData[0]]),
          );
        }
      } else {
        dispatch(searchAfterAdd(addData[0]));
        window.localStorage.setItem('savedRepo', JSON.stringify([addData[0]]));
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
                  <RepoName>
                    {el.userID} / {el.repoName}
                  </RepoName>
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
  height: 100%;
  overflow: scroll;
`;

const RepoContainBox = styled.div`
  width: 100%;
  height: 6.4rem;
  padding: 1.2rem 2.5rem;
  margin: 2rem 0;
  border-radius: 2rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  cursor: pointer;

  .github_icon {
    width: 26px;
    height: 26px;
  }

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

  :first-child {
    margin-top: 0;
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
  font-size: 22.5px;
  font-weight: bold;
  padding-top: 2px;
  margin-left: 8px;
  overflow: hidden;
`;

const RightBox = styled(LeftBox)`
  width: 20%;
  height: 100%;
  justify-content: flex-end;
`;

const AddButton = styled.button`
  width: 8rem;
  height: 4rem;
  border-radius: 10px;
  font-size: 22px;
  font-weight: bold;
  color: #fff;
  background-color: #ccc;
`;

export default RepoContain;
