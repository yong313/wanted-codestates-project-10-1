import React from 'react';
import styled from 'styled-components';

export default function MainTitle({ content }) {
  return <Title>{content}</Title>;
}

const Title = styled.div`
  width: 100%;
  color: #fff;
  font-size: 3.5rem;
  font-weight: 700;
  margin-bottom: 4rem;
`;
