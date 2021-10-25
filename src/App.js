import React from 'react';
import { createGlobalStyle } from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import GameBoard from './components/GameBoard';
import Modal from './components/Modal';
import { closeModal, reset } from './modules/game';
import RecordList from './components/RecordList';

const GlobalStyle = createGlobalStyle`
 *{
    box-sizing: border-box;
 }
 body {
   background-color: #212529;
 }
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const BoardContainer = styled.div`
  width: 500px;
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
  background-color: white;
  color: black;
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
  const { modalText, currentPlayer, winner } = useSelector((state) => ({
    modalText: state.game.modalText,
    currentPlayer: state.game.currentPlayer,
    winner: state.game.winner,
  }));
  const dispatch = useDispatch();

  // 게임 초기화
  const onReset = () => dispatch(reset());
  const onClose = () => dispatch(closeModal());

  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <BoardContainer>
          {modalText && <Modal onClose={onClose}>{modalText}</Modal>}
          <h1>React Tic Tac Toe</h1>
          <GameBoard />
          <span>Current Player : {currentPlayer}</span>
          <ResetButton onClick={onReset}>NEW GAME</ResetButton>
        </BoardContainer>
        {winner && <RecordList />}
      </Wrapper>
    </>
  );
}

export default App;
