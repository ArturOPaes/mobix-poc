import reducer, { INITIAL_STATE } from '~/store/modules/track/reducer';
import * as Tracks from '~/store/modules/track/actions';

describe('Tracks reducer', () => {
  it('@album/SEARCH_REQUEST', () => {
    const state = reducer(
      INITIAL_STATE,
      Tracks.searchRequest({
        value: '1vCWHaC5f2uS3yhpwWbIA6',
        name: 'Avicii',
        color: '#7159c1',
      })
    );

    expect(state).toStrictEqual({
      filter: '',
      filterTracks: [],
      loading: true,
      tracks: [],
    });
  });
});
