import produce from 'immer';

const INITIAL_STATE = {
  board: [],
  people: [],
  tags: [],
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
      default:
    }
  });
}
