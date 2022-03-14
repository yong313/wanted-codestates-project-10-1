import React, { useState } from 'react';
import Styled from 'styled-components';
import { ReactComponent as GithubIcon } from '../assets/github_icon.svg';

const RepoContain = (props) => {
  const { selectRepo } = props;

  const [getSerchRepo, setGetSerchRepo] = useState(() => {
    // 저장된 값 가져오기
    const getRepos = localStorage.getItem('repos');
    const initialValue = JSON.parse(getRepos);
    return initialValue || '';
  });
  console.log(getSerchRepo);

  if (selectRepo) {
    return (
      <>
        <SelectRepoContainBox>
          <LeftBox>
            <GithubIcon />
            <RepoName>wanted-codestates-project-1-10</RepoName>
          </LeftBox>
          <RightBox>
            <DeleteButton>Delete</DeleteButton>
          </RightBox>
        </SelectRepoContainBox>
      </>
    );
  }

  return (
    <>
      {getSerchRepo.map((el, idx) => (
        <RepoContainBox key={idx}>
          <LeftBox>
            <GithubIcon className="github_icon" />
            <RepoName>{el.repoName}</RepoName>
          </LeftBox>
          <RightBox>
            <AddButton className="add_btn">Add</AddButton>
          </RightBox>
        </RepoContainBox>
      ))}
    </>
  );
};

const RepoContainBox = Styled.div`
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
    background-color: #4F5864;
    color: #ccc;
    transition: all 0.25s ease;

    .github_icon {
      fill: #ccc;
    }
  }

  &:hover {
    background-color: #fff;
    color: #14161A;
    transition: all 0.25s ease;

    .github_icon {
      fill: #14161A;
    }

    .add_btn {
      background-color: #00ACEE;
      color: #fff;
    }
  }
`;

const LeftBox = Styled.div`
  width: 80%;
  height: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const RepoName = Styled.p`
  font-size: 3rem;
  font-weight: bold;
  margin-left: 0.8rem;
`;

const RightBox = Styled(LeftBox)`
  width: 20%;
  height: 100%;
  justify-content: flex-end;
`;

const AddButton = Styled.button`
  width: auto;
  height: auto;
  padding: 1rem 2rem;
  border-radius: 1rem;
  font-size: 3rem;
  font-weight: bold;
  color: #fff;
  background-color: #ccc;
`;

const SelectRepoContainBox = Styled.div`
  width: 100%;
  height: 10rem;
  padding: 2rem 3rem;
  margin: 2rem 0;
  border-radius: 2rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background-color: #fff;
  color:#14161A;
  cursor: pointer;
`;

const DeleteButton = Styled.button`
  width: auto;
  height: auto;
  padding: 1rem 2rem;
  border-radius: 1rem;
  font-size: 3rem;
  font-weight: bold;
  color: #fff;
  background-color: #EB2D4C;
`;

export default RepoContain;
