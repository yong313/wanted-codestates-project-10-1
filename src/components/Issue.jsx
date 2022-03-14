import React from 'react';
import styled from 'styled-components';
import img from '../assets/img.png';
export default function Main() {
  return (
    <Container>
      <Title>Modal 컴포넌트 에러 해결</Title>
      <RepoName>wanted-codestates-project-10-8</RepoName>
      <RegistDate>1 month ago</RegistDate>
      <State>Closed Issue</State>
      <ProfileImg />
    </Container>
  );
}
const Container = styled.div`
  position: relative;
  width: 50rem;
  height: 30rem;
  background: #4f5864;
  box-shadow: 0px 2px 2rem; rgba(0, 0, 0, 0.1);
  border-radius: 2rem;
  padding:3.6rem;
`;
const Title = styled.h1`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 900;
  font-size: 2.5rem;
  line-height: 2.9rem;
  color: #cccccc;
`;
const RepoName = styled.p`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 600;
  font-size: 1.6rem;
  line-height: 1.9rem;
  margin-top: 1.7rem;
  color: #31a44f;
`;
const RegistDate = styled.p`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 1.2rem;
  line-height: 1.4rem;
  margin-top: 0.5rem;
  color: #cccccc;
`;
const State = styled.p`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 900;
  font-size: 2.5rem;
  line-height: 2.9rem;
  margin-top: 11.8rem;
  color: #cccccc;
`;
const ProfileImg = styled.img.attrs({ src: img })`
  position: absolute;
  width: 8.18rem;
  height: 8.18rem;
  border-radius: 50%;
  object-fit: contain;
  bottom: 2.12rem;
  right: 2.12rem;
`;
