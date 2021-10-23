import React from 'react';
import { createGlobalStyle } from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import GameBoard from './components/GameBoard';
import Modal from './components/Modal';
import { closeModal, reset } from './modules/game';

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
`;

const ResetButton = styled.button`
  font-size: 24px;
  border-radius: 4px;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  transition: all 0.2s ease;
  &:hover {
    transform: scale(1.1);
  }
`;

function App() {
  const { modalText, currentPlayer } = useSelector((state) => ({
    modalText: state.game.modalText,
    currentPlayer: state.game.currentPlayer,
  }));
  const dispatch = useDispatch();

  // 게임 초기화
  const onReset = () => dispatch(reset());
  const onClose = () => dispatch(closeModal());

  return (
    <>
      <GlobalStyle />
      <Container>
        {modalText && <Modal onClose={onClose}>{modalText}</Modal>}
        <h1>React Tic Tac Toe</h1>
        <GameBoard />
        <span>Current Player : {currentPlayer}</span>
        <ResetButton onClick={onReset}>NEW GAME</ResetButton>
      </Container>
    </>
  );
}

export default App;
