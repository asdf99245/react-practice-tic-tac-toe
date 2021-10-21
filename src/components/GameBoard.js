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
`;

function GameBoard() {
  const { squares } = useSelector((state) => ({
    squares: state.game.squares,
  }));

  const dispatch = useDispatch();
  const onChoose = (id) => dispatch(chooseSquare(id));

  return (
    <Board>
      {squares.map((square, index) => (
        <BoardSquare key={index} id={index} mark={square} onChoose={onChoose} />
      ))}
    </Board>
  );
}

export default GameBoard;
