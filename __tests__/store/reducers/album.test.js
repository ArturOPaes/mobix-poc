import reducer, { INITIAL_STATE } from '~/store/modules/album/reducer';
import * as Albums from '~/store/modules/album/actions';

const artist = {
  value: '1vCWHaC5f2uS3yhpwWbIA6',
  name: 'Avicii',
  color: '#7159c1',
};

const expectSelectArtist = {
  albums: [],
  artists: [
    { color: '#7159c1', name: 'Avicii', value: '1vCWHaC5f2uS3yhpwWbIA6' },
    { color: '#ABCBCA', name: 'Pitbull', value: '0TnOYISbd1XYRBk9myaseg' },
    { color: '#a7f88f', name: 'Muse', value: '12Chz98pHFMPJEknJQMWvI' },
    { color: '#F8CF8F', name: 'Skank', value: '4C4kpaAdp6aKSkguw40SsU' },
    { color: '#ff6161', name: 'Kid Abelha', value: '4bOZtegYNmYOe3gMgPtt0H' },
  ],
  loading: false,
  rangeYears: [],
  selectedAlbum: '',
  selectedArtist: {
    color: '#7159c1',
    name: 'Avicii',
    value: '1vCWHaC5f2uS3yhpwWbIA6',
  },
  selectedYear: '',
};

describe('Albums reducer', () => {
  it('@album/SELECT_ARTIST', () => {
    const state = reducer(INITIAL_STATE, Albums.selectArtist(artist));

    expect(state).toStrictEqual(expectSelectArtist);
  });
  it('@album/SEARCH_REQUEST', () => {
    const state = reducer(INITIAL_STATE, Albums.searchRequest(artist));

    expect(state).toStrictEqual({
      albums: [],
      artists: [
        {
          value: '1vCWHaC5f2uS3yhpwWbIA6',
          name: 'Avicii',
          color: '#7159c1',
        },
        {
          value: '0TnOYISbd1XYRBk9myaseg',
          name: 'Pitbull',
          color: '#ABCBCA',
        },
        {
          value: '12Chz98pHFMPJEknJQMWvI',
          name: 'Muse',
          color: '#a7f88f',
        },
        {
          value: '4C4kpaAdp6aKSkguw40SsU',
          name: 'Skank',
          color: '#F8CF8F',
        },
        {
          value: '4bOZtegYNmYOe3gMgPtt0H',
          name: 'Kid Abelha',
          color: '#ff6161',
        },
      ],
      loading: true,
      rangeYears: [],
      selectedAlbum: '',
      selectedArtist: {},
      selectedYear: '',
    });
  });
});
