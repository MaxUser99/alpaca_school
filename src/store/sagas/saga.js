import {takeEvery, put, call} from "redux-saga/effects";
import {actionType} from "../appStore/actions";

function* testSaga({payload : newMessage}){
  console.log("this is saga, ", newMessage);
}

export function* appSaga(){
  yield takeEvery(actionType.TEST, testSaga);
}
