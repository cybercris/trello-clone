export function searchRequest() {
  return {
    type: '@trelloClone/SEARCH_REQUEST',
  };
}

export function searchSuccess(type, list) {
  return {
    type: '@trelloClone/SEARCH_SUCCESS',
    payload: { type, list },
  };
}
