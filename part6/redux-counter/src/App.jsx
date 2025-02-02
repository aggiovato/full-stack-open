import { createStore } from "redux"; // deprecated
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

/******************************************************************************
 *
 * STORE
 *
 * ***************************************************************************/

// Create the reducer for store
const counterReducer = (state = 0, action) => {
  switch (action.type) {
    case "INCRMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    case "ZERO":
      return 0;
    default:
      return state;
  }
};

// Create the store
const store = createStore(counterReducer);

// Create the actions
const increment = () => {
  store.dispatch({ type: "INCRMENT" });
};
const decrement = () => {
  store.dispatch({ type: "DECREMENT" });
};
const zero = () => {
  store.dispatch({ type: "ZERO" });
};

/******************************************************************************
 *
 * COMPONENT
 *
 * ***************************************************************************/

const App = () => {
  return (
    <>
      <h1>Redux Counter</h1>
      <p style={{ margin: "10px" }}>{store.getState()}</p>

      <div style={{ display: "flex", gap: "1rem" }}>
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
        <button onClick={zero}>0</button>
      </div>
    </>
  );
};

export default App;

/******************************************************************************
 *
 * RENDER
 *
 * ***************************************************************************/

const root = createRoot(document.getElementById("root"));

const renderApp = () => {
  root.render(
    <StrictMode>
      <App />
    </StrictMode>
  );
};

renderApp();

// create the subscriber
store.subscribe(renderApp);
store.subscribe(() => {
  console.log(store.getState());
});
