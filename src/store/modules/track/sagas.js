import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import api from '~/services/api';
import {
  searchSuccess,
  searchFailure,
  filterSearchSuccess,
  filterSearchFailure,
} from './actions';

export function* search({ payload }) {
  try {
    const { album } = payload;

    const result = [];

    for (let i = 0; i < album.length; i++) {
      const response = yield call(api.get, `/albums/${album[i].id}/tracks`, {
        params: {
          limit: 50,
        },
      });
      const { name, id } = album[i];
      const res = response.data;

      for (let j = 0; j < res.items.length; j++) {
        const responseTrack = yield call(api.get, `/tracks/${res.items[j].id}`);

        res.items[j].popularity = responseTrack.data.popularity;
      }

      const obj = {
        id,
        name,
        tracks: res,
      };
      result.push(obj);
    }
    const items = result;

    yield put(searchSuccess(items));
  } catch (err) {
    toast.error('Consulta de músicas falhou, verifique o token');
    yield put(searchFailure());
  }
}

export function* filterSearch({ payload }) {
  try {
    const { query } = payload;

    const response = yield call(api.get, `/search/`, {
      params: {
        q: query,
        limit: 10,
        type: 'track',
      },
    });

    const items = response.data;

    yield put(filterSearchSuccess(items));
  } catch (err) {
    toast.error('Consulta de músicas falhou, verifique o token');
    yield put(filterSearchFailure());
  }
}

export default all([
  takeLatest('@track/SEARCH_REQUEST', search),
  takeLatest('@track/FILTER_SEARCH_REQUEST', filterSearch),
]);
