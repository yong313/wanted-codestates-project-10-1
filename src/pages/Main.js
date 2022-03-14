import React from 'react';
import styled from 'styled-components';
import Added from '../components/Added';

export default function Main() {
  return (
    <Container>
      <Added />
    </Container>
  );
}

const Container = styled.div`
  width: 1920px;
  height: 1080px;
  display: flex;
  flex-direction: row;
  background-color: white;
`;
