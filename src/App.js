import React, { useCallback, useEffect, useState } from 'react';
import { createGlobalStyle } from 'styled-components';
import styled from 'styled-components';
import GameBoard from './components/GameBoard';
import { checkBoard } from './lib/checkBoard';
import Modal from './components/Modal';

const GlobalStyle = createGlobalStyle`
 *{
    box-sizing: border-box;
 }
 body {
   background-color: black;
 }
`;

const Container = styled.div`
  width: 500px;
  margin: 0 auto;
  margin-top: 30px;
  height: 650px;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    font-size: 32px;
  }
  span {
    font-size: 24px;
    margin: 12px 0px 18px;
  }
  button {
    font-size: 24px;
    border-radius: 4px;
    border: none;
    padding: 10px 20px;
    cursor: pointer;
    transition: all 0.2s ease;
    &:hover {
      transform: scale(1.1);
    }
  }
`;

function App() {
  const [currentPlayer, setCurrentPlayer] = useState('O');
  const [squares, setSquares] = useState(new Array(9).fill(null));

  useEffect(() => {
    if (checkBoard(squares, currentPlayer === 'X' ? 'O' : 'X')) {
      onReset();
    }
  }, [squares, currentPlayer]);

  // 플레이어 변경
  const changePlayer = () => {
    if (currentPlayer === 'O') setCurrentPlayer('X');
    else setCurrentPlayer('O');
  };

  // 게임 초기화
  const onReset = () => {
    setSquares(new Array(9).fill(null));
    setCurrentPlayer('O');
  };

  // 칸 선택했을시에
  const onChoose = useCallback(
    (id) => {
      setSquares(
        squares.map((square, index) => (index === id ? currentPlayer : square))
      );
      changePlayer();
    },
    [squares]
  );

  return (
    <>
      <GlobalStyle />
      <Container>
        <h1>React Tic Tac Toe</h1>
        <GameBoard squares={squares} onChoose={onChoose} />
        <span>Current Player : {currentPlayer}</span>
        <button onClick={onReset}>RESET</button>
        {/* <Modal /> */}
      </Container>
    </>
  );
}

export default App;
