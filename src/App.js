import React, { useState } from 'react';
import { createGlobalStyle } from 'styled-components';
import styled from 'styled-components';
import GameBoard from './components/GameBoard';

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

  return (
    <>
      <GlobalStyle />
      <Container>
        <h1>React Tic Tac Toe with Hooks</h1>
        <GameBoard currentPlayer={currentPlayer} />
        <span>Next Player: O</span>
        <button>Reset</button>
      </Container>
    </>
  );
}

export default App;
