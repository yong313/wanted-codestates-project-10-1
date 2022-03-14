import React, { useState } from 'react';
import Styled from 'styled-components';
import Button from '../common/Button';
import { ReactComponent as GithubIcon } from '../assets/github_icon.svg';

const RepoContain = (props) => {
  const { selectRepo } = props;

  const [buttonDisabled, setButtonDisabled] = useState(false);

  if (selectRepo) {
    return (
      <>
        <SelectRepoContainBox>
          <LeftBox>
            <GithubIcon fill="#14161A" />
            <RepoName>wanted-codestates-project-1-10</RepoName>
          </LeftBox>
          <RightBox>
            <Button deleteBtn />
          </RightBox>
        </SelectRepoContainBox>
      </>
    );
  }

  return (
    <>
      <RepoContainBox disabled={!buttonDisabled}>
        <LeftBox>
          <GithubIcon className="github_icon" />
          <RepoName>wanted-codestates-project-1-10</RepoName>
        </LeftBox>
        <RightBox>
          <Button />
        </RightBox>
      </RepoContainBox>
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

  ${(props) =>
    props.disabled
      ? `
        color: #ccc; 
        background-color: #4F5864; 
        cursor: default;`
      : ``}

      .github_icon {
        fill: #4F5864;
        ${(props) => (props.disabled ? `fill: #ccc;` : ``)}
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

const SelectRepoContainBox = Styled(RepoContainBox)`
  background-color: #fff;
  color:#14161A;
`;

export default RepoContain;
