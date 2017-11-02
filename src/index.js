import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import "./index.css";
import registerServiceWorker from "./registerServiceWorker";

import App from "./components/app";
import reducer from "./reducers";
import { loadState, saveState } from "./localStorage";

const persistedState = loadState();
const store = createStore(reducer, persistedState);

store.subscribe(() => saveState(store.getState()));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
