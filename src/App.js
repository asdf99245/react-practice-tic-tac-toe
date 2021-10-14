import React, { useCallback, useState } from 'react';
import { createGlobalStyle } from 'styled-components';
import styled from 'styled-components';
import GameBoard from './components/GameBoard';
import { checkBoard } from './lib/checkBoard';

const GlobalStyle = createGlobalStyle`
 *{
    box-sizing:border-box;
 }
 body {
   background-color: black;
 }
`;

const Container = styled.div`
  width: 500px;
  margin: 0 auto;
  margin-top: 50px;
  height: 650px;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    font-size: 24px;
  }
  span {
    font-size: 18px;
    margin: 12px 0px 18px;
  }
  button {
    font-size: 24px;
  }
`;

function App() {
  const [currentPlayer, setCurrentPlayer] = useState('O');
  const [squares, setSquares] = useState(new Array(9).fill(null));

  const changePlayer = () => {
    if (currentPlayer === 'O') setCurrentPlayer('X');
    else setCurrentPlayer('O');
  };

  const onReset = () => {
    setSquares(new Array(9).fill(null));
    setCurrentPlayer('O');
  };

  const onChoose = useCallback(
    (id) => {
      setSquares(
        squares.map((square, index) => (index === id ? currentPlayer : square))
      );
      console.log(squares, currentPlayer);
      if (checkBoard(squares, currentPlayer)) {
        onReset();
      } else changePlayer();
    },
    [squares, currentPlayer]
  );

  return (
    <>
      <GlobalStyle />
      <Container>
        <h1>React Tic Tac Toe with Hooks</h1>
        <GameBoard squares={squares} onChoose={onChoose} />
        <span>Current Player: {currentPlayer}</span>
        <button onClick={onReset}>Reset</button>
      </Container>
    </>
  );
}

export default App;
