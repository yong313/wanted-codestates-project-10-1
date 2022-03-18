import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

const Pagination = React.memo(function Pagination({
  currentIndex,
  numOfPages,
  changePageIndex,
}) {
  const [pageIndexArray, setPageIndexArray] = useState(
    Array.from({ length: numOfPages }, (_, idx) => idx + 1),
  );
  const prevRef = useRef();
  const nextRef = useRef();

  useEffect(() => {
    setPageIndexArray(Array.from({ length: numOfPages }, (_, idx) => idx + 1));
  }, [numOfPages]);

  useEffect(() => {
    // 첫 번째 인덱스일 때 prev 버튼 숨기기
    if (currentIndex === 1) {
      prevRef.current.style.display = 'none';
    } else {
      prevRef.current.style.display = 'block';
    }
    // 마지막 인덱스일 때 next 버튼 숨기기
    if (currentIndex === pageIndexArray.length) {
      nextRef.current.style.display = 'none';
    } else {
      nextRef.current.style.display = 'block';
    }
  }, [currentIndex, pageIndexArray]);

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
      <ButtonWrapper>
        <Button ref={prevRef} onClick={clickEventHandler}>
          prev
        </Button>
      </ButtonWrapper>
      <PagesWrapper>
        {pageIndexArray
          .slice(
            Math.floor((currentIndex - 1) / 10) * 10,
            (Math.floor((currentIndex - 1) / 10) + 1) * 10,
          )
          .map((pIndex) => {
            return pIndex === currentIndex ? (
              <li className="active" onClick={clickEventHandler}>
                {pIndex}
              </li>
            ) : (
              <li onClick={clickEventHandler}>{pIndex}</li>
            );
          })}
      </PagesWrapper>
      <ButtonWrapper>
        <Button ref={nextRef} onClick={clickEventHandler}>
          next
        </Button>
      </ButtonWrapper>
    </Wrapper>
  );
});

const Wrapper = styled.div`
  height: auto;
  color: #fff;
  font-size: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 4rem 0;
`;
const ButtonWrapper = styled.div`
  width: 6rem;
  height: 3.5rem;
  margin: 0.6rem;
  padding: 0;
`;
const Button = styled.button`
  width: 6rem;
  height: 3.5rem;
  color: #00aaee;
  font-size: 2.5rem;
  font-weight: 600;
  cursor: pointer;
`;
const PagesWrapper = styled.ul`
  width: fit-content;
  display: flex;

  li {
    width: 4rem;
    height: 4rem;
    background-color: #4f5864;
    color: #ccc;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 2rem;
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
