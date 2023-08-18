import { useState } from "react";

//自己实现的useReducer

interface ReducerAction {
  type: string;
  payload?: any;
}

export const useReducer = <S, A extends ReducerAction>(
  reducer: (state: S, action: A) => S,
  initialState: S
): [S, (action: A) => void] => {
  const [state, updateState] = useState<S>(initialState);

  const dispatch = (action: A) => {
    updateState(reducer(state, action));
  };

  return [state, dispatch];
};