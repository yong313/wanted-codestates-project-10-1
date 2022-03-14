import React, { useState } from 'react';
import styled from 'styled-components';
import Search from '../components/Search';
import Spinner from '../components/Spinner';

export default function Main() {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <Container>
      <LeftWrapper>
        <Search setIsLoading={setIsLoading} />
        {isLoading ? <Spinner /> : null}
      </LeftWrapper>
    </Container>
  );
}

const Container = styled.div`
  width: 1920px;
  height: 1080px;
  background-color: white;
`;
const LeftWrapper = styled.div`
  width: 866px;
`;
