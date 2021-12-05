import { useEffect, useRef, useState } from "react"

export function useStateWithCallback (initialState, callback) {
  const [state, setState] = useState(initialState)

  useEffect(() => callback(state), [state, callback])

  return [state, setState]
}

export function useStateWithCallbackLazy (initialState) {
  const callbackRef = useRef(null);

  const [state, setState] = useState(initialState);

  useEffect(() => {
    if (callbackRef.current) {
      callbackRef.current(state);

      callbackRef.current = null;
    }
  }, [state]);

  const setStateWithCallback = (newValue, callback = null) => {
    callbackRef.current = callback;

    return setState(newValue);
  };

  return [state, setStateWithCallback];
}
