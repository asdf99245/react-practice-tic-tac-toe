export const checkBoard = {
  checkSuccess: (squares, player) => {
    // 세로줄 확인
    for (let i = 0; i < 3; i++) {
      if (squares[i] === player) {
        if (
          squares[i] === squares[i + 3] &&
          squares[i + 3] === squares[i + 6]
        ) {
          return [i, i + 3, i + 6];
        }
      }
    }
    // 가로줄 확인
    for (let i = 0; i < 9; i += 3) {
      if (squares[i] === player) {
        if (
          squares[i] === squares[i + 1] &&
          squares[i + 1] === squares[i + 2]
        ) {
          return [i, i + 1, i + 2];
        }
      }
    }

    // 대각선 확인
    if (squares[4] === player) {
      if (squares[0] === squares[4] && squares[4] === squares[8]) {
        return [0, 4, 8];
      }
      if (squares[2] === squares[4] && squares[4] === squares[6]) {
        return [2, 4, 6];
      }
    }

    return false;
  },
  checkFull: (squares) => {
    for (let i = 0; i < 9; i++) {
      if (squares[i] === null) return false;
    }

    return true;
  },
};
