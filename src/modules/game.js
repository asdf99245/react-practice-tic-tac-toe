import { checkBoard } from '../lib/checkBoard';

const CHOOSE_SQUARE = 'gqme/CHOOSE_SQUARE';
const RESET = 'game/RESET';
const CLOSE_MODAL = 'game/CLOSE_MODAL';

export const chooseSquare = (id) => ({ type: CHOOSE_SQUARE, id });
export const reset = () => ({ type: RESET });
export const closeModal = () => ({ type: CLOSE_MODAL });

const initialState = {
  squares: new Array(9).fill(null),
  currentPlayer: 'O',
  winner: null,
  modalText: null,
  result: false, // 승리 결과 배열
};

export default function game(state = initialState, action) {
  switch (action.type) {
    case CHOOSE_SQUARE:
      let squares = state.squares.slice();
      let winner = state.winner;
      let modalText = state.modalText;
      let result = state.result;

      // 승자가 있다면
      if (winner) {
        return state;
      }

      squares[action.id] = state.currentPlayer;
      // 승자가 있는지
      if ((result = checkBoard.checkSuccess(squares, state.currentPlayer))) {
        winner = state.currentPlayer;
        modalText = `🏆승자는 ${winner}입니다.`;
      } // 승부가 나지 않았는지
      else if (checkBoard.checkFull(squares)) {
        modalText = '⚔ 무승부입니다.';
      }

      return {
        ...state,
        squares,
        currentPlayer: state.currentPlayer === 'O' ? 'X' : 'O',
        winner,
        modalText,
        result,
      };
    case RESET:
      return {
        ...state,
        squares: new Array(9).fill(null),
        currentPlayer: 'O',
        winner: null,
        modalText: null,
        result: null,
      };
    case CLOSE_MODAL:
      return {
        ...state,
        modalText: null,
      };
    default:
      return state;
  }
}
