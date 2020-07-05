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

export function addCardSuccess(board) {
  return {
    type: '@trelloClone/ADD_CARD_SUCCESS',
    payload: { board },
  };
}

export function editCardRequest(card, listIndex) {
  return {
    type: '@trelloClone/EDIT_CARD_REQUEST',
    payload: { card, listIndex },
  };
}

export function editCardSuccess(board) {
  return {
    type: '@trelloClone/EDIT_CARD_SUCCESS',
    payload: { board },
  };
}

export function deleteCardRequest(id, listIndex) {
  return {
    type: '@trelloClone/DELETE_CARD_REQUEST',
    payload: { id, listIndex },
  };
}

export function deleteCardSuccess(board) {
  return {
    type: '@trelloClone/DELETE_CARD_SUCCESS',
    payload: { board },
  };
}

export function updateListRequest(lists) {
  return {
    type: '@trelloClone/UPDATE_LIST_REQUEST',
    payload: { lists },
  };
}

export function updateListSuccess(board) {
  return {
    type: '@trelloClone/UPDATE_LIST_SUCCESS',
    payload: { board },
  };
}

export function addColumnRequest(column, index) {
  return {
    type: '@trelloClone/ADD_COLUMN_REQUEST',
    payload: { column, index },
  };
}

export function addColumnSuccess(board) {
  return {
    type: '@trelloClone/ADD_COLUMN_SUCCESS',
    payload: { board },
  };
}

export function editColumnRequest(column, index) {
  return {
    type: '@trelloClone/EDIT_CARD_REQUEST',
    payload: { column, index },
  };
}

export function editColumnSuccess(board) {
  return {
    type: '@trelloClone/EDIT_CARD_SUCCESS',
    payload: { board },
  };
}

export function deleteColumnRequest(id, index) {
  return {
    type: '@trelloClone/DELETE_CARD_REQUEST',
    payload: { id, index },
  };
}

export function deleteColumnSuccess(board) {
  return {
    type: '@trelloClone/DELETE_CARD_SUCCESS',
    payload: { board },
  };
}
