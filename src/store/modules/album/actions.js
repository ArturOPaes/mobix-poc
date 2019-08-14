export function searchRequest(artist) {
  return {
    type: '@album/SEARCH_REQUEST',
    payload: { artist },
  };
}

export function searchSuccess(sortedItems) {
  return {
    type: '@album/SEARCH_SUCCESS',
    payload: { sortedItems },
  };
}

export function searchFailure() {
  return {
    type: '@album/SEARCH_FAILURE',
  };
}

export function selectArtist(artist) {
  return {
    type: '@album/SELECT_ARTIST',
    payload: { artist },
  };
}

export function selectYear(year) {
  return {
    type: '@album/SELECT_YEAR',
    payload: { year },
  };
}

export function selectAlbum(album) {
  return {
    type: '@album/SELECT_ALBUM',
    payload: { album },
  };
}

export function setRangeYears(rangeYears) {
  return {
    type: '@album/SET_RANGE_YEARS',
    payload: { rangeYears },
  };
}
