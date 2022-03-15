import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

function Pagination({ currentIndex, numOfPages, changePageIndex }) {
  const [pageIndexArray, setPageIndexArray] = useState(
    Array.from({ length: numOfPages }, (_, idx) => idx + 1),
  );

  useEffect(() => {
    setPageIndexArray(Array.from({ length: numOfPages }, (_, idx) => idx + 1));
  }, [numOfPages]);

  const clickEventHandler = (e) => {
    if (e.target.textContent === 'prev') {
      changePageIndex(currentIndex * 1 - 1);
    } else if (e.target.textContent === 'next') {
      changePageIndex(currentIndex * 1 + 1);
    } else {
      changePageIndex(e.target.textContent * 1);
    }
  };

  return (
    <Wrapper>
      <Button onClick={clickEventHandler}>prev</Button>
      <PagesWrapper>
        {pageIndexArray.map((pIndex) => {
          return pIndex === currentIndex ? (
            <li className="active" onClick={clickEventHandler}>
              {pIndex}
            </li>
          ) : (
            <li onClick={clickEventHandler}>{pIndex}</li>
          );
        })}
      </PagesWrapper>
      <Button onClick={clickEventHandler}>next</Button>
    </Wrapper>
  );
}

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
  cursor: pointer;
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
