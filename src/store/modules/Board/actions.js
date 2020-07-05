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

export function editCardRequest(card, listIndex) {
  return {
    type: '@trelloClone/EDIT_CARD_REQUEST',
    payload: { card, listIndex },
  };
}

export function editCardSuccess(list) {
  return {
    type: '@trelloClone/EDIT_CARD_SUCCESS',
    payload: { list },
  };
}

export function deleteCardRequest(id, listIndex) {
  return {
    type: '@trelloClone/DELETE_CARD_REQUEST',
    payload: { id, listIndex },
  };
}

export function deleteCardSuccess(list) {
  return {
    type: '@trelloClone/DELETE_CARD_SUCCESS',
    payload: { list },
  };
}
