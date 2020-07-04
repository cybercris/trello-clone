import { all } from 'redux-saga/effects';
import Board from './Board/sagas';

export default function* rootSaga() {
  return yield all([Board]);
}
