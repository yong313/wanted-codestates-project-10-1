import React, { useState } from 'react';
import Styled from 'styled-components';

const Button = (props) => {
  const { margin, deleteBtn } = props;

  const [buttonDisabled, setButtonDisabled] = useState(false);

  const styles = {
    margin: margin,
    delete: deleteBtn,
  };

  Button.defaultProps = {
    margin: '',
  };

  if (deleteBtn) {
    return (
      <DeleteButton {...styles} disabled={!buttonDisabled}>
        Delete
      </DeleteButton>
    );
  }

  return (
    <>
      <AddButton {...styles} disabled={!buttonDisabled}>
        Add
      </AddButton>
    </>
  );
};

const AddButton = Styled.button`
  width: auto;
  height: auto;
  padding: 1rem 2rem;
  border-radius: 1rem;
  font-size: 3rem;
  font-weight: bold;
  color: #fff;
  background-color: #00ACEE;

  ${(props) =>
    props.disabled
      ? `
  color: #fff;
  background-color: #ccc;
  cursor: default;
  `
      : ``}
`;

const DeleteButton = Styled.button`
  width: auto;
  height: auto;
  padding: 1rem 2rem;
  border-radius: 1rem;
  font-size: 3rem;
  font-weight: bold;
  color: #fff;
  background-color: #EB2D4C;
`;

export default Button;
