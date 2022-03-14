import React, { useState } from 'react';
import styled from 'styled-components';
import RepoContain from '../common/RepoContain';
import Search from '../components/Search';
import Spinner from '../components/Spinner';
import Added from '../components/Added';

export default function Main() {
  const [isLoading, setIsLoading] = useState(false);
  return (
    <>
      <Container>
        {/* view 작업 용 */}
        <LeftBox>
          <Test>
            <Test2>
              <Search setIsLoading={setIsLoading} />
            </Test2>
            {/* 맵 돌릴 구간 */}
            {isLoading ? (
              <Spinner />
            ) : (
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
            )}
          </Test>
        </LeftBox>
        {/* view 작업 용 */}
        <RightBox>
          <Added />
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
`;

const Test = styled.div`
  width: 100%;
  height: 100%;
`;

const Test2 = styled.div`
  width: 100%;
  height: 20%;
`;

const Test3 = styled.div`
  width: 100%;
  height: 80%;
`;

const RightBox = styled.div`
  width: 50%;
  height: auto;
  display: flex;
  flex-direction: row;
`;
