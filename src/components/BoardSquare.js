import React from 'react';
import styled, { css } from 'styled-components';
import { BsCircle, BsXLg } from 'react-icons/bs';

const Square = styled.div`
  background-color: transparent;
  border: 3px solid #ff6b6b;
  box-shadow: 0px 2px 10px black;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 70px;
  color: white;

  // 선택된 square일시 cursor표시 뜨지않게
  ${(props) =>
    props.checked &&
    css`
      cursor: default;
    `}

  ${(props) =>
    props.highlight &&
    css`
      border-color: #8ce99a;
    `}
`;

function BoardSquare({ id, mark, resultSet, onChoose }) {
  if (mark !== null) {
    // 선택된 square는 마크를 표시해준다
    const shape = mark === 'O' ? <BsCircle /> : <BsXLg />;
    return (
      // 세 가지 사각형중 하나라면 highlight 표시해준다
      <Square checked={true} highlight={resultSet.has(id)}>
        {shape}
      </Square>
    );
  }
  return <Square onClick={() => onChoose(id)}></Square>;
}

export default React.memo(BoardSquare);
