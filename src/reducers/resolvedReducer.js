/**
 * @format
 */

export const ADD = "add";
export const REMOVE = "remove";
export const RESET = "reset";
export const INIT = "init";

export const initialState = [];

export const reducer = (state, action) => {
  switch (action.type) {
    case ADD:
      if (!state.includes(action.payload)) {
        return [...state, action.payload];
      }
      return state;
    case REMOVE:
      return state.filter((s) => s !== action.payload);
    case RESET:
      return initialState;
    case INIT:
      return action.payload;
    default:
      throw new Error("unknown type");
  }
};
