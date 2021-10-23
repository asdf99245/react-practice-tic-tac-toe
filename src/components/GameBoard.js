import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import { chooseSquare } from '../modules/game';
import BoardSquare from './BoardSquare';

const Board = styled.div`
  width: 460px;
  height: 460px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  gap: 10px;
`;

function GameBoard() {
  const { squares, result } = useSelector((state) => ({
    squares: state.game.squares,
    result: state.game.result,
  }));

  // 정답인 세 가지 사각형
  let resultSet = new Set();
  if (result) resultSet = new Set(result);

  const dispatch = useDispatch();
  const onChoose = (id) => dispatch(chooseSquare(id));

  return (
    <Board>
      {squares.map((square, index) => (
        <BoardSquare
          key={index}
          id={index}
          mark={square}
          onChoose={onChoose}
          resultSet={resultSet}
        />
      ))}
    </Board>
  );
}

export default GameBoard;
