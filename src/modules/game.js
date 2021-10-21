import { checkBoard } from '../lib/checkBoard';

const CHOOSE_SQUARE = 'gqme/CHOOSE_SQUARE';
const RESET = 'game/RESET';

export const chooseSquare = (id) => ({ type: CHOOSE_SQUARE, id });
export const reset = () => ({ type: RESET });

const initialState = {
  squares: new Array(9).fill(null),
  currentPlayer: 'O',
  winner: null,
  modalText: null,
};

export default function game(state = initialState, action) {
  switch (action.type) {
    case CHOOSE_SQUARE:
      let squares = state.squares.slice();
      let winner = state.winner;
      let modalText = state.modalText;

      // 승자가 있다면
      if (winner) {
        return state;
      }

      squares[action.id] = state.currentPlayer;
      if (checkBoard.checkSuccess(squares, state.currentPlayer)) {
        winner = state.currentPlayer;
        modalText = `🏆승자는 ${winner}입니다.`;
      } else if (checkBoard.checkFull(squares)) {
        modalText = '⚔ 무승부입니다.';
      }

      return {
        ...state,
        squares,
        currentPlayer: state.currentPlayer === 'O' ? 'X' : 'O',
        winner,
        modalText,
      };
    case RESET:
      return {
        ...state,
        squares: new Array(9).fill(null),
        currentPlayer: 'O',
        winner: null,
        modalText: null,
      };
    default:
      return state;
  }
}
