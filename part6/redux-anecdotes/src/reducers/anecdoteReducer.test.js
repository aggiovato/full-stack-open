import anecdoteReducer, { initialState } from "./anecdoteReducer";
import deepFreeze from "deep-freeze";

describe("anecdoteReducer", () => {
  test("should return initial state", () => {
    const invalidAction = { type: "INVALID_ACTION" };
    expect(anecdoteReducer(undefined, invalidAction)).toEqual(initialState);
  });

  test("should handle VOTE action", () => {
    const action = { type: "VOTE", payload: { id: 1 } };
    const state = [
      { content: "anecdote 1", id: 1, votes: 0 },
      { content: "anecdote 2", id: 2, votes: 0 },
      { content: "anecdote 3", id: 3, votes: 0 },
    ];
    deepFreeze(state); // check immutability

    const expected = [
      { content: "anecdote 1", id: 1, votes: 1 },
      { content: "anecdote 2", id: 2, votes: 0 },
      { content: "anecdote 3", id: 3, votes: 0 },
    ];

    const newState = anecdoteReducer(state, action);
    expect(newState).toEqual(expected);
  });
});
