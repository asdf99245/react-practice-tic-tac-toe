import React from 'react';
import styled from 'styled-components';

const Background = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  z-index: 99;
`;

const ModalBox = styled.div`
  width: 500px;
  height: 180px;
  margin-top: 250px;
  z-index: 100;
  background-color: white;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: black;
  font-size: 32px;
  font-weight: 500;
  box-shadow: 0px 8px 24px #373737;
`;

function Modal() {
  return (
    <Background>
      <ModalBox>Winner is O!</ModalBox>
    </Background>
  );
}

export default Modal;
