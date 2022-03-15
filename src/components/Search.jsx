import axios from 'axios';
import React, { useRef } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { addSearchList, searchData } from '../modules/mainPage';

export default function Search({ setIsLoading }) {
  const value = useRef(null);
  const dispatch = useDispatch();

  const inputHandler = (e) => {
    const url = 'https://api.github.com';
    const targetValue = value.current.value;
    if (e.code === 'Enter') {
      setIsLoading(true);
      axios
        .get(`${url}/search/repositories?q=${targetValue}&per_page=20&page=1`, {
          headers: {
            Authorization: process.env.REACT_APP_API_TOKEN,
          },
        })
        .then((res) => {
          const result = res.data.items.map((el) => {
            const fullName = el.full_name.split('/');
            return { userID: fullName[0], repoName: fullName[1] };
          });
          dispatch(addSearchList(result));
          dispatch(searchData(targetValue));
          setIsLoading(false);
        });
    }
  };

  return (
    <Container>
      <Input
        ref={value}
        // onChange={inputHandler}
        onKeyPress={inputHandler}
        placeholder="Github Repository를 검색해주세요.✨"
      />
    </Container>
  );
}

const Container = styled.div``;

const Input = styled.input`
  width: 100%;
  height: 6.4rem;
  border-radius: 20px;
  font-size: 2.5rem;
  padding: 0 23px;
  outline: none;
  margin-top: 5rem;

  ::placeholder {
    color: #cccccc;
    font-weight: 700;
  }
`;
