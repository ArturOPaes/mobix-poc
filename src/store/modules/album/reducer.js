import produce from 'immer';

const INITIAL_STATE = {
  loading: false,
  selectedAlbum: '',
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
  selectedArtist: {},
  selectedYear: '',
  rangeYears: [],
};

export default function album(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@album/SEARCH_REQUEST': {
        draft.loading = true;
        break;
      }
      case '@album/SEARCH_SUCCESS': {
        draft.loading = false;
        draft.albums = action.payload.sortedItems;
        break;
      }
      case '@album/SEARCH_FAILURE': {
        draft.loading = false;
        break;
      }
      case '@album/SELECT_ARTIST': {
        draft.selectedArtist = action.payload.artist;
        break;
      }
      case '@album/SELECT_YEAR': {
        draft.selectedYear = action.payload.year;
        break;
      }
      case '@album/SELECT_ALBUM': {
        draft.selectedAlbum = action.payload.album;
        break;
      }
      case '@album/SET_RANGE_YEARS': {
        draft.rangeYears = action.payload.rangeYears;
        break;
      }
      default:
    }
  });
}
