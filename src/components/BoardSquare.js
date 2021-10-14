import React from 'react';
import styled from 'styled-components';
import { BsCircle, BsXLg } from 'react-icons/bs';

const Square = styled.div`
  background-color: transparent;
  border: 3px solid #e17055;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 70px;
  color: #f5f5f5;
`;

function BoardSquare({ id, mark, onChoose }) {
  let shape;
  if (mark !== null) {
    shape = mark === 'O' ? <BsCircle /> : <BsXLg />;
  }
  return <Square onClick={() => onChoose(id)}>{mark && shape}</Square>;
}

export default React.memo(BoardSquare);
