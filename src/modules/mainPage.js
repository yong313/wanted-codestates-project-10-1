export const SET_DATA = 'address/SET_DATA';
export const AFTER_DATA = 'address/AFTER_DATA';
export const DELETE_DATA = 'address/DELETE_DATA';
export const COUNTER_DATA = 'address/COUNTER_DATA';
export const SEARCH_DATA = 'address/SEARCH_DATA';
export const MODAL_OPEN = 'address/MODAL_OPEN';
export const SECOND_MODAL = 'address/SECOND_MODAL';

const initialState = {
  compareData: [],
  repoData: [],
  addRepo: [],
  pageCounter: 2,
  searchString: '',
  modalOpen: false,
  secondModal: false,
};

export const setFourModal = () => ({ type: MODAL_OPEN });
export const setOverlapModal = () => ({ type: SECOND_MODAL });

export const setDatas = (datas) => ({ type: SET_DATA, datas });
export const searchAfterAdd = (addData) => ({
  type: AFTER_DATA,
  addData,
});
export const deleteData = (deleted) => ({
  type: DELETE_DATA,
  deleted,
});
export const counterData = () => ({ type: COUNTER_DATA });
export const searchData = (searchText) => ({ type: SEARCH_DATA, searchText });

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case SET_DATA:
      console.log('payload', action.datas);
      return {
        ...state,
        repoData: action.datas,
        compareData: action.datas,
      };
    case AFTER_DATA:
      return {
        ...state,
        addRepo: [...state.addRepo, action.addData],
      };
    case DELETE_DATA:
      return {
        ...state,
        addRepo: action.deleted,
      };
    case COUNTER_DATA:
      return {
        ...state,
        pageCounter: state.pageCounter++,
      };
    case SEARCH_DATA:
      return {
        ...state,
        searchString: action.searchText,
      };
    case MODAL_OPEN:
      return {
        ...state,
        modalOpen: !state.modalOpen,
      };
    case SECOND_MODAL:
      return {
        ...state,
        secondModal: !state.secondModal,
      };

    default:
      return state;
  }
}
