import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import api from '~/services/api';
import { searchSuccess, searchFailure } from './actions';

export function* search({ payload }) {
  try {
    const { artist } = payload;
    const response = yield call(api.get, `/artists/${artist}/albums`, {
      params: {
        limit: 50,
      },
    });

    const { items } = response.data;

    const sortedItems = items.slice(0);

    sortedItems.sort((a, b) => {
      return a.release_date.substring(0, 4) - b.release_date.substring(0, 4);
    });

    yield put(searchSuccess(sortedItems));
  } catch (err) {
    toast.error('Consulta de albuns falhou, verifique o token');
    yield put(searchFailure());
  }
}

export default all([takeLatest('@album/SEARCH_REQUEST', search)]);
