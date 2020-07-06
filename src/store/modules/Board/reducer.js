import produce from 'immer';

const INITIAL_STATE = {
  board: [],
  people: [],
  tags: [],
  loading: false,
  filteredBoard: [],
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
      case '@trelloClone/ADD_COLUMN_SUCCESS': {
        draft.board = action.payload.board;
        break;
      }
      case '@trelloClone/EDIT_COLUMN_SUCCESS': {
        draft.board = action.payload.board;
        break;
      }
      case '@trelloClone/DELETE_COLUMN_SUCCESS': {
        draft.board = action.payload.board;
        break;
      }
      case '@trelloClone/FILTER_CARDS': {
        const query = action.payload.query;
        const owners = action.payload.owners;
        const tags = action.payload.tags;

        console.log(query);
        console.log(owners);
        console.log(tags);
        const idOwnersToSearch = owners?.map((owner) => owner.id);

        console.log(idOwnersToSearch);

        draft.filteredBoard = { ...draft.board };
        draft.filteredBoard.columns = draft.board.columns.map((column) => {
          return {
            ...column,
            cards: column.cards.filter((card) => {
              const haveTitleSearched = query
                ? card?.title?.includes(query)
                : true;
              const haveTagsSearched =
                tags?.length > 0
                  ? card?.tags?.find((tag) => tags.includes(tag))
                  : true;
              const haveOwnersSearched =
                owners?.length > 0
                  ? card?.owners?.find((owner) =>
                      idOwnersToSearch.includes(owner.id)
                    )
                  : true;
              return (
                haveTitleSearched && haveTagsSearched && haveOwnersSearched
              );
            }),
          };
        });
        break;
      }
      default:
    }
  });
}
