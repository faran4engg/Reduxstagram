import React from "react";
import ReactDOM from "react-dom";

import { Provider } from "react-redux";

import store from "../src/redux/store/store";

import App from "./containers/App/App";

ReactDOM.render(
  <Provider store={store}>
    {" "}
    <App />
  </Provider>,
  document.getElementById("root")
);
