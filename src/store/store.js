import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { appSaga } from "./sagas/saga";
import appReducer from "./appStore/reducer";

const sagaMiddl = createSagaMiddleware();
const store = createStore(appReducer, applyMiddleware(sagaMiddl));
sagaMiddl.run(appSaga);

export default store;
