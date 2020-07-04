import produce from 'immer';

const INITIAL_STATE = {
  loading: false,
  board: [],
  people: [],
  tags: [],
};

export default function auth(state = INITIAL_STATE, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case '@trelloClone/SEARCH_REQUEST': {
        draft.loading = true;
        break;
      }
      case '@trelloClone/SEARCH_SUCCESS': {
        draft.board = action.payload.board;
        draft.people = action.payload.people;
        draft.tags = action.payload.tags;
        draft.loading = false;
        break;
      }
      default:
    }
  });
}
