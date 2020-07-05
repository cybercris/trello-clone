import produce from 'immer';

const INITIAL_STATE = {
  board: [],
  people: [],
  tags: [],
  listIndex: 0,
  loading: false,
};

export default function auth(state = INITIAL_STATE, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case '@trelloClone/SEARCH_REQUEST': {
        draft.loading = true;
        break;
      }
      case '@trelloClone/SEARCH_SUCCESS': {
        draft[action.payload.type] = action.payload.list;
        draft.loading = false;
        break;
      }
      case '@trelloClone/ADD_CARD_REQUEST': {
        draft.listIndex = action.payload.listIndex;
        break;
      }
      case '@trelloClone/ADD_CARD_SUCCESS': {
        draft.board = action.payload.board;
        break;
      }
      case '@trelloClone/EDIT_CARD_SUCCESS': {
        draft.board = action.payload.board;
        break;
      }
      case '@trelloClone/DELETE_CARD_SUCCESS': {
        draft.board = action.payload.board;
        break;
      }
      case '@trelloClone/UPDATE_LIST_SUCCESS': {
        draft.board = action.payload.board;
        break;
      }
      default:
    }
  });
}
