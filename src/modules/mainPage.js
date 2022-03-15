export const SET_DATA = 'address/SET_DATA';
export const AFTER_DATA = 'address/AFTER_DATA';
export const DELETE_DATA = 'address/DELETE_DATA';

const initialState = {
  compareData: [],
  repoData: [],
  addRepo: [],
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

    default:
      return state;
  }
}
