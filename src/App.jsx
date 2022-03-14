import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import GlobalStyles from './GlobalStyles';
import Main from './pages/Main';

import styled from 'styled-components';
import Issues from './pages/Issues';

import Issue from './pages/Issue';

function App() {
  return (
    <Router>
      <GlobalStyles />
      <Wrapper>
        <Container>
          <Routes>
            <Route path="/" element={<Main />} />

            <Route path="/issues" element={<Issues />} />

            <Route path="/issue" element={<Issue />} />
          </Routes>
        </Container>
      </Wrapper>
    </Router>
  );
}

export default App;

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  overflow: hidden;
  background-color: #14161a;
`;
const Container = styled.div`
  width: 1200px;
`;
