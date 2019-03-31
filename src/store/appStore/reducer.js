import {actionType} from "./actions";

const initialState = {
  msg: "",
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.TEST:
      return {...state, msg: action.payload};
    default:
      return state;
  }
};

export default appReducer;
