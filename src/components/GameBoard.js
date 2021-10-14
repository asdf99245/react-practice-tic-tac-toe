import React from 'react';
import styled from 'styled-components';
import BoardSquare from './BoardSquare';

const Board = styled.div`
  width: 460px;
  height: 460px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
`;

function GameBoard({ squares, onChoose }) {
  return (
    <Board>
      {squares.map((square, index) => (
        <BoardSquare key={index} id={index} mark={square} onChoose={onChoose} />
      ))}
    </Board>
  );
}

export default GameBoard;
