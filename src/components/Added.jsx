import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

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
  const [dummyData, setDummyData] = useState(datas);
  const [addList, setAddList] = useState([]);

  const handleAddClick = (e) => {
    console.log(datas[e.target.id].name);
    let addData = dummyData.filter(
      (a) => a.name === dummyData[e.target.id].name,
    );
    setDummyData(
      dummyData.filter((a) => a.name !== dummyData[e.target.id].name),
    );
    console.log(datas);
    setAddList([...addList, addData]);
  };

  const handleDltClick = (e) => {
    console.log(addList[e.target.id][0].name);
    let clickedData = addList.filter(
      (a) => a[0].name === addList[e.target.id][0].name,
    );
    let deleteData = addList.filter(
      (a) => a[0].name !== addList[e.target.id][0].name,
    );
    setAddList(deleteData);
    setDummyData([...dummyData, clickedData]);
  };

  useEffect(() => {
    console.log(addList);
  }, [addList]);
  return (
    <Container>
      <DataListContainer>
        {dummyData.map((data, index) => {
          return (
            <DataList id={index} key={index}>
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
              <h1>{data[0].name}</h1>
              <span>{data[0].email}</span>
              <span>{data[0].date}</span>
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
  & button {
    width: 60px;
    height: 50px;
    background-color: skyblue;
    border: 1px solid black;
  }
`;
export default Added;
