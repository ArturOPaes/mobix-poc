import produce from 'immer';

const INITIAL_STATE = {
  loading: false,
  tracks: [],
  filterTracks: [],
  filter: '',
};

export default function track(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@track/SEARCH_REQUEST': {
        draft.loading = true;
        break;
      }
      case '@track/SEARCH_SUCCESS': {
        draft.loading = false;
        draft.tracks = action.payload.items;
        break;
      }
      case '@track/SEARCH_FAILURE': {
        draft.loading = false;
        break;
      }
      case '@track/FILTER_SEARCH_REQUEST': {
        draft.loading = true;
        break;
      }
      case '@track/FILTER_SEARCH_SUCCESS': {
        draft.loading = false;
        draft.filterTracks = action.payload.items;
        break;
      }
      case '@track/FILTER_SEARCH_FAILURE': {
        draft.loading = false;
        break;
      }
      case '@track/CLEAN_FILTER_SEARCH': {
        draft.filterTracks = [];
        break;
      }
      case '@track/SET_FILTER': {
        draft.filter = action.payload.filter;
        break;
      }
      default:
    }
  });
}
