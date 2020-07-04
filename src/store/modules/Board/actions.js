export function searchRequest() {
  return {
    type: '@trelloClone/SEARCH_REQUEST',
  };
}

export function searchSuccess(board, people, tags) {
  return {
    type: '@trelloClone/SEARCH_SUCCESS',
    payload: { board, people, tags },
  };
}
