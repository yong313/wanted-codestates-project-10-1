import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import IssueC from '../components/IssueC';
import axios from 'axios';
import { headers } from '../util/util';
export default function Issue() {
  const datas = [];
  const [issueDataArr, SetIssueDataArr] = useState([]);

  /* data 연동 시 받아올 형식 */

  //   const {userID,repoName} = JSON.parse(window.localStorage.getItem('repos'));
  //   const URL = `https://api.github.com/repos/${userId}/${repoName}/issues?state=all`;

  const URL =
    'https://api.github.com/repos/hinyc/wanted-codestates-project-10-6/issues?state=all';

  useEffect(() => {
    (async () => {
      const { data: dataArr } = await axios.get(URL, headers);
      dataArr.forEach((data) => {
        const {
          title,
          repository_url,
          created_at,
          state,
          user: { id, avatar_url },
        } = data;
        datas.push({
          title,
          repository_url,
          created_at,
          state,
          user: { id, avatar_url },
        });
      });
      SetIssueDataArr(datas);
    })();
  }, []);
  return (
    <Container>
      {issueDataArr.map((dataObj) => (
        <IssueC dataObj={dataObj} />
      ))}
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 1080px;
  background-color: white;
`;
