const filterReducer = (state = "", action) => {
  switch (action.type) {
    case "SET_FILTER":
      return action.payload;
    case "CREATE":
      return "";
    default:
      return state;
  }
};

export default filterReducer;

// ACTION CREATORS (external functions)
export const setFilter = (query) => {
  return {
    type: "SET_FILTER",
    payload: query,
  };
};
