import axios from 'axios';
import React, { useRef } from 'react';
import styled from 'styled-components';

export default function Search({ setIsLoading }) {
  const value = useRef(null);

  const inputHandler = (e) => {
    const url = 'https://api.github.com';
    const targetValue = value.current.value;
    if (e.code === 'Enter') {
      setIsLoading(true);
      axios
        .get(`${url}/search/repositories?q=${targetValue}&per_page=30&page=1`, {
          headers: {
            Authorization: process.env.REACT_APP_API_TOKEN,
          },
        })
        .then((res) => {
          const result = res.data.items.map((el) => {
            const fullName = el.full_name.split('/');
            return { userID: fullName[0], repoName: fullName[1] };
          });
          window.localStorage.setItem('repos', JSON.stringify(result));
          setIsLoading(false);
        });
    }
  };
  return (
    <Container>
      <Title>Github Repositories Searcher 🔍</Title>
      <Input
        ref={value}
        // onChange={inputHandler}
        onKeyPress={inputHandler}
        placeholder="Github 이슈를 검색해주세요.✨"
      />
    </Container>
  );
}

const Container = styled.div``;

const Title = styled.div`
  width: 800px;
  color: #fff;
  font-size: 4rem;
  font-weight: 700;
`;
const Input = styled.input`
  width: 100%;
  height: 100px;
  background-color: #4f5864;
  border-radius: 20px;
  font-size: 3rem;
  padding: 0 23px;
  outline: none;
  margin-top: 6.3rem;
  ::placeholder {
    color: #cccccc;
  }
`;
