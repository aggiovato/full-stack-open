import ReactDOM from "react-dom/client";
import { createStore } from "redux";
import { Provider } from "react-redux";
import App from "./App";
import anecdoteReducer from "./reducers/anecdoteReducer";

const store = createStore(anecdoteReducer); // create store

ReactDOM.createRoot(document.getElementById("root")).render(
  // Wrap the app in the redux provider
  <Provider store={store}>
    <App />
  </Provider>
);
