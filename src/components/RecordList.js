import React from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import RecordItem from './RecordItem';
import { getRecord } from '../modules/game';

const Container = styled.div`
  color: white;
  margin-top: 100px;
  height: 100%;
  padding: 20px;
  background-color: #373737;
  width: 300px;
  border-radius: 20px;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px,
    rgba(0, 0, 0, 0.22) 0px 10px 10px;

  h2 {
    text-align: center;
  }
  ul {
    padding: 0;
  }
`;

function RecordList() {
  const { winner, squares } = useSelector((state) => ({
    squares: state.game.squares,
  }));
  const dispatch = useDispatch();

  const l = squares.length - 1;
  const onClick = (id) => {
    dispatch(getRecord(id));
  };

  const items = new Array(l);
  for (let i = 0; i < items.length; i++) items[i] = i + 1;

  return (
    <Container>
      <h2>GAME RECORD</h2>
      <ul>
        {items.map((i) => (
          <RecordItem key={i} id={i} onClick={onClick}>
            RECORD {i}
          </RecordItem>
        ))}
      </ul>
    </Container>
  );
}

export default RecordList;
