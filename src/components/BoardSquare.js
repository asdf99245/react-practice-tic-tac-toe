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
  // 선택된 square일시 cursor표시 뜨지않게
  ${(props) =>
    props.checked &&
    css`
      cursor: default;
    `}
`;

function BoardSquare({ id, mark, onChoose }) {
  if (mark !== null) {
    // 선택된 square는 마크를 표시해준다
    const shape = mark === 'O' ? <BsCircle /> : <BsXLg />;
    return <Square checked={true}>{shape}</Square>;
  }
  return <Square onClick={() => onChoose(id)}></Square>;
}

export default React.memo(BoardSquare);
