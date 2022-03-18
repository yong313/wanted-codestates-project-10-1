import React from 'react';
import Styled from 'styled-components';
import { ReactComponent as GithubIcon } from '../assets/github_icon.svg';

const RepoContainer = ({
  repo,
  data,
  id,
  handleAddClick,
  handleDltClick,
  selectRepo,
  button,
  handleSetLocalStorage,
  targetRef,
}) => {
  return (
    <>
      <RepoContainBox
        onClick={handleSetLocalStorage}
        ref={selectRepo ? null : targetRef}
      >
        <LeftBox>
          <GithubIcon className="github_icon" />
          <RepoName>
            {selectRepo
              ? `${repo.userID} / ${repo.repoName}`
              : `${data.userID} / ${data.repoName}`}
          </RepoName>
        </LeftBox>
        <RightBox>
          <AddButton
            className="add_btn"
            onClick={selectRepo ? handleDltClick : handleAddClick}
            id={id}
          >
            {button}
          </AddButton>
        </RightBox>
      </RepoContainBox>
    </>
  );
};

const RepoContainBox = Styled.div`
  width: 100%;
  height: 6.4rem;
  padding: 1.2rem 2.5rem;
  margin-bottom: 3rem;
  border-radius: 2rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background-color: #fff;
  cursor: pointer;
  
  .github_icon {
    width: 26px;
    height: 26px;
    fill: #14161a;
  }
`;

const LeftBox = Styled.div`
  width: 80%;
  height: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const RepoName = Styled.p`
  font-size: 22.5px;
  font-weight: bold;
  padding-top: 2px;
  margin-left: 8px;
  overflow: hidden;
`;

const RightBox = Styled(LeftBox)`
  width: 20%;
  height: 100%;
  justify-content: flex-end;
`;

const AddButton = Styled.button`
  width: 10rem;
  height: 4rem;
  border-radius: 10px;
  font-size: 22px;
  font-weight: bold;
  color: #fff;
  background-color: #EB2D4C;
`;

export default RepoContainer;
