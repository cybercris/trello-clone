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

export function addColumnRequest(title) {
  return {
    type: '@trelloClone/ADD_COLUMN_REQUEST',
    payload: { title },
  };
}

export function addColumnSuccess(board) {
  return {
    type: '@trelloClone/ADD_COLUMN_SUCCESS',
    payload: { board },
  };
}

export function editColumnRequest(title, index) {
  return {
    type: '@trelloClone/EDIT_COLUMN_REQUEST',
    payload: { title, index },
  };
}

export function editColumnSuccess(board) {
  return {
    type: '@trelloClone/EDIT_COLUMN_SUCCESS',
    payload: { board },
  };
}

export function deleteColumnRequest(id) {
  return {
    type: '@trelloClone/DELETE_COLUMN_REQUEST',
    payload: { id },
  };
}

export function deleteColumnSuccess(board) {
  return {
    type: '@trelloClone/DELETE_COLUMN_SUCCESS',
    payload: { board },
  };
}

export function updateColRequest(lists) {
  return {
    type: '@trelloClone/UPDATE_COL_REQUEST',
    payload: { lists },
  };
}

export function updateColSuccess(board) {
  return {
    type: '@trelloClone/UPDATE_COL_SUCCESS',
    payload: { board },
  };
}

export function filterCards(query, tags, owners) {
  return {
    type: '@trelloClone/FILTER_CARDS',
    payload: { query, tags, owners },
  };
}
