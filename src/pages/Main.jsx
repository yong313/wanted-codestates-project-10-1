import React, { useState } from 'react';
import styled from 'styled-components';
import RepoContain from '../common/RepoContain';
import Search from '../components/Search';
import Spinner from '../components/Spinner';

export default function Main() {
  const [isLoading, setIsLoading] = useState(false);
  return (
    <>
      <Container>
        {/* view 작업 용 */}
        <LeftBox>
          <Search setIsLoading={setIsLoading} />
          {isLoading ? <Spinner /> : null}
          <Test>
            <Test2 />
            {/* 맵 돌릴 구간 */}
            <Test3>
              <RepoContain />
              <RepoContain />
              <RepoContain />
              <RepoContain />
              <RepoContain />
              <RepoContain />
              <RepoContain />
              <RepoContain />
              <RepoContain />
              <RepoContain />
              <RepoContain />
            </Test3>
          </Test>
        </LeftBox>
        {/* view 작업 용 */}
        <RightBox>
          <RepoContain selectRepo />
        </RightBox>
      </Container>
    </>
  );
}

const Container = styled.div`
  width: 100%;
  max-width: 1920px;
  height: 100%;
  display: flex;
`;

const LeftBox = styled.div`
  width: 50%;
  height: auto;
  max-height: 100vh;
  overflow: scroll;
  padding: 3rem 4.7rem;
`;

const Test = styled.div`
  width: 100%;
  height: 100%;
`;

const Test2 = styled.div`
  width: 100%;
  height: 20%;
  background: blue;
`;

const Test3 = styled.div`
  width: 100%;
  height: 80%;
`;

const RightBox = styled.div`
  width: 50%;
  height: auto;
  padding: 0 4.7rem;
`;
