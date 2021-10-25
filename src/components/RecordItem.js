import React from 'react';
import styled from 'styled-components';

const Item = styled.li`
  list-style: none;
  padding: 10px;
  background-color: white;
  border-radius: 10px;
  color: #373737;
  cursor: pointer;
  transition: transform 0.2s ease;

  &:hover {
    transform: scale(1.3);
  }

  & + & {
    margin-top: 10px;
  }
`;

function RecordItem({ children, id, onClick }) {
  return <Item onClick={() => onClick(id)}>{children}</Item>;
}

export default React.memo(RecordItem);
