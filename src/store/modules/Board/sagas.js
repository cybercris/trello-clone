import { takeLatest, call, put, all, select } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import { getMaxCardId } from '../../../utils/getMaxCardId';

import api from '../../../services/api';

import { searchSuccess } from './actions';
import { addCardSuccess } from './actions';

export function* getBoard() {
  try {
    const board = yield call(api.get, 'boards/1');

    yield put(searchSuccess('board', board.data));
  } catch (err) {
    toast.error('Um erro aconteceu: ', err);
  }
}

export function* getTags() {
  try {
    const tags = yield call(api.get, 'tags');

    yield put(searchSuccess('tags', tags.data));
  } catch (err) {
    toast.error('Um erro aconteceu: ', err);
  }
}

export function* getPeople() {
  try {
    const people = yield call(api.get, 'people');

    yield put(searchSuccess('people', people.data));
  } catch (err) {
    toast.error('Um erro aconteceu: ', err);
  }
}

export function* addCard({ payload }) {
  try {
    const { card: title, listIndex } = payload;

    const board = yield select((state) => state.Board.board);
    const newBoard = { ...board };
    const columns = newBoard.columns;
    const id = getMaxCardId(columns) + 1;
    const cards = [...columns[listIndex].cards];
    console.log('antes do push', cards);

    cards.push({
      id,
      title,
      tags: [],
    });

    console.log('depois: ', cards);

    newBoard.columns[listIndex].cards = cards;

    console.log('depois +: ', cards);

    yield call(api.put, 'boards/1', newBoard);
    yield put(addCardSuccess(cards));
  } catch (err) {
    toast.error('Um erro aconteceu: ', err);
  }
}

// export function* editCard() {
//   try {
//   } catch (err) {
//     toast.error('Um erro aconteceu: ', err);
//   }
// }

export default all([
  takeLatest('@trelloClone/SEARCH_REQUEST', getBoard),
  takeLatest('@trelloClone/SEARCH_REQUEST', getTags),
  takeLatest('@trelloClone/SEARCH_REQUEST', getPeople),
  takeLatest('@trelloClone/ADD_CARD_REQUEST', addCard),
]);
