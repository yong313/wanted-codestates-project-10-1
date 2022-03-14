import React from 'react';
import styled from 'styled-components';
import Search from '../components/Search';

export default function Main() {
  return (
    <Container>
      <Search />
    </Container>
  );
}

const Container = styled.div`
  width: 1920px;
  height: 1080px;

  background-color: white;
`;
