import { takeLatest, call, put, all, select } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import produce from 'immer';
import { getMaxCardId } from '../../../utils/getMaxCardId';

import api from '../../../services/api';

import { searchSuccess, addCardSuccess, deleteCardSuccess } from './actions';

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

    const boardToUpdate = produce(board, (draft) => {
      const columns = board.columns;
      const id = getMaxCardId(columns) + 1;

      draft.columns[listIndex].cards.push({
        id,
        title,
        tags: [],
      });
    });

    const cards = boardToUpdate.columns[listIndex].cards;

    yield call(api.put, 'boards/1', boardToUpdate);
    yield put(addCardSuccess(cards));
  } catch (err) {
    toast.error('Um erro aconteceu: ', err);
  }
}

export function* editCard({ payload }) {
  try {
    const { card: cardToUpdate, listIndex } = payload;

    const board = yield select((state) => state.Board.board);

    const boardToUpdate = produce(board, (draft) => {
      let column = draft.columns[listIndex];
      column.cards = column.cards.map((card) =>
        card.id === cardToUpdate.id ? cardToUpdate : card
      );
    });

    const cards = boardToUpdate.columns[listIndex].cards;

    yield put(addCardSuccess(cards));
  } catch (err) {
    toast.error('Um erro aconteceu: ', err);
  }
}

export function* deleteCard({ payload }) {
  try {
    const { id, listIndex } = payload;
    console.log(id);
    const board = yield select((state) => state.Board.board);

    const boardToUpdate = produce(board, (draft) => {
      draft.columns.forEach((column) => {
        column.cards = column.cards.filter((card) => card.id !== id);
      });
    });

    const { cards } = boardToUpdate.columns[listIndex];

    yield call(api.put, 'boards/1', boardToUpdate);
    yield put(deleteCardSuccess(cards));
  } catch (err) {}
}

export default all([
  takeLatest('@trelloClone/SEARCH_REQUEST', getBoard),
  takeLatest('@trelloClone/SEARCH_REQUEST', getTags),
  takeLatest('@trelloClone/SEARCH_REQUEST', getPeople),
  takeLatest('@trelloClone/ADD_CARD_REQUEST', addCard),
  takeLatest('@trelloClone/EDIT_CARD_REQUEST', editCard),
  takeLatest('@trelloClone/DELETE_CARD_REQUEST', deleteCard),
]);
