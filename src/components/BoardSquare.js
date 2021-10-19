import React from 'react';
import styled, { css } from 'styled-components';
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
  ${(props) =>
    props.mark &&
    css`
      cursor: default;
    `}
`;

function BoardSquare({ id, mark, onChoose }) {
  if (mark !== null) {
    // 선택된 보드
    const shape = mark === 'O' ? <BsCircle /> : <BsXLg />;
    return <Square mark={mark}>{shape}</Square>;
  }
  return <Square onClick={() => onChoose(id)}></Square>;
}

export default React.memo(BoardSquare);
