import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import store, { persistor } from "./app/store";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";

// console.log(store)

ReactDOM.render(
  
        <App />
,
  document.getElementById("root")
);

reportWebVitals();
