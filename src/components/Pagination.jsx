import React, { useState } from 'react';
import styled from 'styled-components';

const Pagination = (props) => {
  return (
    <Wrapper>
      <Button>prev</Button>
      <PagesWrapper>
        <li className="active">1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
      </PagesWrapper>
      <Button>next</Button>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 20rem;
  height: 10rem;
  color: #fff;
  font-size: 1rem;
  // background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Button = styled.button`
  width: 6rem;
  height: 3.5rem;
  color: #00aaee;
  font-size: 3rem;
  font-weight: 600;
  margin: 0.6rem;
`;
const PagesWrapper = styled.ul`
  width: fit-content;
  display: flex;

  li {
    width: 5rem;
    height: 6.7rem;
    background-color: #4f5864;
    color: #ccc;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 3rem;
    font-weight: 600;
    line-height: 3.5rem;
    cursor: pointer;
    margin: 0.5rem;
  }
  li.active {
    background-color: #00aaee;
    color: #fff;
  }
`;

export default Pagination;
