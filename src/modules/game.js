import { checkBoard } from '../lib/checkBoard';

const CHOOSE_SQUARE = 'gqme/CHOOSE_SQUARE';
const RESET = 'game/RESET';
const CLOSE_MODAL = 'game/CLOSE_MODAL';
const GET_RECORD = 'game/GET_RECORD';

export const chooseSquare = (id) => ({ type: CHOOSE_SQUARE, id });
export const reset = () => ({ type: RESET });
export const closeModal = () => ({ type: CLOSE_MODAL });
export const getRecord = (id) => ({ type: GET_RECORD, id });

const initialState = {
  squares: [new Array(9).fill(null)], // board의 상태
  nth: 0, // board의 n번째 상태를 가르키는 idx
  currentPlayer: 'O', // 현재 player
  winner: null, // 승자
  modalText: null, // 승부가 났을시 모달에 띄워줄 텍스트
  result: false, // 승리 결과 배열
};

export default function game(state = initialState, action) {
  switch (action.type) {
    case CHOOSE_SQUARE:
      let nth = state.nth;
      let squares = state.squares[nth].slice();
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
        winner = 'draw';
        modalText = '⚔ 무승부입니다.';
      }

      return {
        ...state,
        squares: [...state.squares, squares],
        nth: nth + 1,
        currentPlayer: state.currentPlayer === 'O' ? 'X' : 'O',
        winner,
        modalText,
        result,
      };
    case RESET:
      return {
        ...state,
        squares: [new Array(9).fill(null)],
        currentPlayer: 'O',
        winner: null,
        modalText: null,
        result: null,
        nth: 0,
      };
    case CLOSE_MODAL:
      return {
        ...state,
        modalText: null,
      };
    case GET_RECORD: {
      return {
        ...state,
        nth: action.id,
      };
    }
    default:
      return state;
  }
}
