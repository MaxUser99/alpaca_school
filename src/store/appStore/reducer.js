import {actionType} from "./actions";

const initialState = {
  msg: "",
  errorMsg: ""
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.TEST:
      return {...state, msg: action.payload};
    case actionType.PRINT_ERROR:
      return {...state, errorMsg: action.payload};
    default:
      return state;
  }
};

export default appReducer;
