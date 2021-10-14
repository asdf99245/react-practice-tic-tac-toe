export const checkBoard = (squares, currentPlayer) => {
  // 세로줄 확인
  for (let i = 0; i < 3; i++) {
    if (squares[i] === currentPlayer) {
      if (squares[i] === squares[i + 3] && squares[i + 3] === squares[i + 6]) {
        return true;
      }
    }
  }
  // 가로줄 확인
  for (let i = 0; i < 9; i += 3) {
    if (squares[i] === currentPlayer) {
      if (squares[i] === squares[i + 1] && squares[i + 1] === squares[i + 2]) {
        return true;
      }
    }
  }

  // 대각선 확인
  if (squares[4] === currentPlayer) {
    if (squares[0] === squares[4] && squares[4] === squares[8]) {
      return true;
    }
    if (squares[2] === squares[4] && squares[4] === squares[6]) {
      return true;
    }
  }

  return false;
};
