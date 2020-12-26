/**
 * @format
 */

import React, { createContext, useEffect, useReducer } from "react";

import { useStorage } from "../hooks/useStorage";
import {
  ADD,
  REMOVE,
  INIT,
  initialState,
  reducer,
} from "../reducers/resolvedReducer";

export const ResolvedContext = createContext();

export const ResolvedProvider = (props) => {
  const { value, setValue, isLoaded } = useStorage("resolved", initialState);
  const [resolved, dispatch] = useReducer(reducer, value);

  const add = (id) => {
    dispatch({ type: ADD, payload: id });
    setValue([...value, id]);
  };

  const remove = (id) => {
    dispatch({ type: REMOVE, payload: id });
    setValue(value.filter((o) => id !== o.id));
  };

  useEffect(() => {
    dispatch({ type: INIT, payload: value });
  }, [value]);

  return (
    <ResolvedContext.Provider
      value={{ resolved, add, remove, isLoaded }}
      {...props}
    />
  );
};
