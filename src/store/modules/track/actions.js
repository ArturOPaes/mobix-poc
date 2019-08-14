export function searchRequest(album) {
  return {
    type: '@track/SEARCH_REQUEST',
    payload: { album },
  };
}

export function searchSuccess(items) {
  return {
    type: '@track/SEARCH_SUCCESS',
    payload: { items },
  };
}

export function searchFailure() {
  return {
    type: '@track/SEARCH_FAILURE',
  };
}

export function filterSearchRequest(query) {
  return {
    type: '@track/FILTER_SEARCH_REQUEST',
    payload: { query },
  };
}

export function filterSearchSuccess(items) {
  return {
    type: '@track/FILTER_SEARCH_SUCCESS',
    payload: { items },
  };
}

export function filterSearchFailure() {
  return {
    type: '@track/FILTER_SEARCH_FAILURE',
  };
}

export function cleanFilterSearch() {
  return {
    type: '@track/CLEAN_FILTER_SEARCH',
  };
}

export function setFilter(filter) {
  return {
    type: '@track/SET_FILTER',
    payload: { filter },
  };
}
