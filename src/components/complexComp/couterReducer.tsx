export type counterState = {
  value: number;
};

export type counterAction = {
  type: "inc" | "dec" | "reset" | "customInc";
  payload?: number;
};

export const initialState: counterState = {
  value: 0,
};

export const counterReducer = (state: counterState, action: counterAction) => {
  switch (action.type) {
    case "inc":
      const newState = { ...state };
      newState.value = newState.value + 1;
      return newState;

    case "dec":
      if (state.value === 0) return state;
      const newState01 = { ...state };
      newState01.value = newState01.value - 1;
      return newState01;

    case "reset":
      const newState02 = { ...state };
      newState02.value = 0;
      return newState02;

    case "customInc":
      const newState03 = { ...state };
      if (!action.payload || isNaN(action.payload)) return state;
      const userIncrement = action.payload ?? 0;
      newState03.value += userIncrement;
      return newState03;
  }
};
