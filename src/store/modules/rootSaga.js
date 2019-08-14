import { all } from 'redux-saga/effects';

import album from './album/sagas';
import track from './track/sagas';

export default function* rootSaga() {
  return yield all([album, track]);
}
