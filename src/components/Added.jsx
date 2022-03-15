import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import RepoContain from '../common/RepoContain';

const datas = [
  {
    name: 'Sandra Barker',
    email: 'et.netus.et@hotmail.ca',
    date: 'Jul 16, 2022',
  },
  {
    name: 'Dennis Joyner',
    email: 'curabitur.consequat@hotmail.ca',
    date: 'Jan 18, 2022',
  },
  {
    name: 'Maxwell Wilkinson',
    email: 'in@google.couk',
    date: 'Jun 15, 2021',
  },
  {
    name: 'Nolan Horne',
    email: 'ante@icloud.com',
    date: 'Sep 26, 2021',
  },
  {
    name: 'Grace Meadows',
    email: 'nullam@protonmail.org',
    date: 'Nov 30, 2022',
  },
];

function Added() {
  const [getSearchRepo, setGetSearchRepo] = useState(() => {
    // 저장된 값 가져오기
    const getRepos = localStorage.getItem('repos');
    const initialValue = JSON.parse(getRepos);
    return initialValue || '';
  });
  const [unChangeData, setUnChangeData] = useState(datas);
  const [dummyData, setDummyData] = useState(datas);
  const [addList, setAddList] = useState([]);

  const handleAddClick = (e) => {
    let addData = dummyData.filter(
      (a) => a.name === dummyData[e.target.id].name,
    );
    setDummyData(
      dummyData.filter((a) => a.name !== dummyData[e.target.id].name),
    );
    setAddList([...addList, addData[0]]);
  };

  const handleDltClick = (e) => {
    let clickedData = addList.filter(
      (a) => a.name === addList[e.target.id].name,
    );
    let deleteData = addList.filter(
      (a) => a.name !== addList[e.target.id].name,
    );
    setAddList(deleteData);
    setDummyData(dummyData.push(clickedData[0]));
    const reJoinData = unChangeData.filter((a) =>
      dummyData.some((b) => b === a),
    );
    setDummyData(reJoinData);
  };

  useEffect(() => {}, [addList]);
  return (
    <Container>
      <DataListContainer>
        {dummyData.map((data, index) => {
          return (
            <DataList id={index} key={index} data={data}>
              <h1>{data.name}</h1>
              <span>{data.email}</span>
              <span>{data.date}</span>
              <button onClick={handleAddClick} id={index}>
                추가
              </button>
            </DataList>
          );
        })}
      </DataListContainer>

      <AddedListContainer>
        {addList.map((data, index) => {
          return (
            <AddedList id={index} key={index}>
              <h1>{data.name}</h1>
              <span>{data.email}</span>
              <span>{data.date}</span>
              <button onClick={handleDltClick} id={index}>
                삭제
              </button>
            </AddedList>
          );
        })}
      </AddedListContainer>
    </Container>
  );
}

const Container = styled.div`
  width: 80vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const DataListContainer = styled.div`
  margin-bottom: 20px;
  padding: 10px;
  border: 1px solid black;
`;

const DataList = styled.div`
  width: 400px;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #cccccc;
  color: white;
  & button {
    width: 60px;
    height: 50px;
    background-color: skyblue;
    border: 1px solid black;
  }
`;

const AddedListContainer = styled.div`
  padding: 10px;
  border: 1px solid black;
`;

const AddedList = styled.div`
  width: 400px;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #cccccc;
  color: white;
  & button {
    width: 60px;
    height: 50px;
    background-color: skyblue;
    border: 1px solid black;
  }
`;
export default Added;
