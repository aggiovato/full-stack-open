import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";
import anecdoteReducer from "./reducers/anecdoteReducer";
import filterReducer from "./reducers/filterReducer";

// REDUCER
const reducer = combineReducers({
  anecdotes: anecdoteReducer,
  filter: filterReducer,
});

export const store = createStore(reducer); // create store

ReactDOM.createRoot(document.getElementById("root")).render(
  // Wrap the app in the redux provider
  <Provider store={store}>
    <App />
  </Provider>
);
