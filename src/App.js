import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import GlobalStyles from './GlobalStyles';
import Main from './pages/Main';
import Issue from './pages/Issue';
import styled from 'styled-components';
function App() {
  return (
    <Router>
      <GlobalStyles />
      <Wrapper>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/issue" element={<Issue />} />
        </Routes>
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
