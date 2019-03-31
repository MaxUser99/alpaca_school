import {takeEvery, takeLatest, put, call, delay} from "redux-saga/effects";
import {actionType, printError} from "../appStore/actions";

function* testSaga({payload : newMessage}){
  console.log("this is saga, ", newMessage);
  yield put(printError(newMessage));
  yield delay(1000);
  yield put(printError(""));
}

export function* appSaga(){
  yield takeLatest(actionType.TEST, testSaga);
}
