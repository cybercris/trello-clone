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

export function addCardRequest(card, listIndex) {
  return {
    type: '@trelloClone/ADD_CARD_REQUEST',
    payload: { card, listIndex },
  };
}

export function addCardSuccess(list) {
  return {
    type: '@trelloClone/ADD_CARD_SUCCESS',
    payload: { list },
  };
}
