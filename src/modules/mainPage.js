export const SET_DATA = 'address/SET_DATA';
export const AFTER_DATA = 'address/AFTER_DATA';
export const DELETE_DATA = 'address/DELETE_DATA';
export const COUNTER_DATA = 'address/COUNTER_DATA';
export const SEARCH_DATA = 'address/SEARCH_DATA';

const initialState = {
  compareData: [],
  repoData: [],
  addRepo: [],
  pageCounter: 2,
  searchString: '',
};

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
      console.log(action.addData);
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

    default:
      return state;
  }
}
