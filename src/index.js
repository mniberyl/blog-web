import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./styles/styles.scss";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer, { rootSaga } from "./stores";
import { tempSetUser, check } from "./stores/user";
/**
 * Saga를 실행하기 위해 redux-saga 미들웨어를 리덕스 스토어에 연결해야 함.
 * 그러기 위해 createSagaMiddle 사용
 */

// Saga 미들웨어 생성
const sagaMiddleware = createSagaMiddleware();
// 스토어에 mount
// 리덕스 상태 추적을 위해 redux-devtools-extension 확장모듈 사용 고려
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);

function loadUser() {
  try {
    const user = localStorage.getItem("user");
    if (!user) return;
    store.dispatch(tempSetUser(user)); // 로그인 상태 유지
    store.dispatch(check()); // 로그인 검증
  } catch (e) {
    console.log("localStorage is not working/");
  }
}

sagaMiddleware.run(rootSaga);
loadUser();

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
