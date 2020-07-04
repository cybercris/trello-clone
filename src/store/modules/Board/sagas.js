import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from '../../../services/api';

import { searchSuccess } from './actions';

export function* getBoard() {
  try {
    const people = yield call(api.get, `/people`);
    const tags = yield call(api.get, `/tags`);
    const board = yield call(api.get, `/boards`);

    yield put(searchSuccess(board.data, people.data, tags.data));
  } catch (err) {
    toast.error('Um erro aconteceu: ', err);
  }
}

export default all([takeLatest('@trelloClone/SEARCH_REQUEST', getBoard)]);
