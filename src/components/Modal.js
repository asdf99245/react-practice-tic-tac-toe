import React from 'react';
import styled, { keyframes } from 'styled-components';
import { BsXLg } from 'react-icons/bs';

const fadeIn = keyframes`
  from {
    opacity:0;
  }
  to{
    opacity:1;
  }
`;

const slideUp = keyframes`
  from {
    transform:translateY(100px);
  }
  to {
    transform:translateY(0px);
  }
`;

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

  animation-name: ${fadeIn};
  animation-duration: 0.5s;
  animation-timing-function: ease-out;
  animation-fill-mode: forwards;
`;

const ModalBox = styled.div`
  width: 500px;
  height: 180px;
  margin-top: 250px;
  z-index: 100;
  background-color: white;
  border-radius: 4px;
  color: black;
  font-size: 24px;
  font-weight: 500;
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  animation-name: ${slideUp};
  animation-duration: 0.5s;
  animation-timing-function: ease-out;
  animation-fill-mode: forwards;
`;

const CloseButton = styled.button`
  padding: 0;
  display: block;
  border: none;
  background-color: transparent;
  cursor: pointer;
  position: absolute;
  font-size: 18px;
  right: 10px;
  top: 10px;
`;

function Modal({ children, onClose }) {
  return (
    <Background onClick={onClose}>
      <ModalBox onClick={(e) => e.stopPropagation()}>
        <CloseButton onClick={onClose}>
          <BsXLg />
        </CloseButton>
        {children}
      </ModalBox>
    </Background>
  );
}

export default Modal;
