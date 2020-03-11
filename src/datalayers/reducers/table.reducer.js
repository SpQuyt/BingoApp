import { tableAction } from 'src/constants/actions';

export const INITIAL_STATE = {
  currentNumberToFill: 1,
  tableArray: [
    [null, null, null, null, null],
    [null, null, null, null, null],
    [null, null, null, null, null],
    [null, null, null, null, null],
    [null, null, null, null, null],
  ],
  coordinationArray: [],
};

export default (state = INITIAL_STATE, action) => {
  const { payload } = action;
  switch (action.type) {
    case tableAction.ADD_NUMBER: {
      const newTableArray = state.tableArray.map((row, rowNumber) => row.map((col, colNumber) => {
        // Finding the correct rowNumber and colNumber to fill in value and add
        // coordination to the array
        if (rowNumber === payload.rowNumber && colNumber === payload.colNumber) {
          state.coordinationArray.push({ rowNumber, colNumber });
          return state.currentNumberToFill;
        }
        // If the previous tableArray's cell has a value in it, skip to another cell
        if (state.tableArray[rowNumber][colNumber] !== null) {
          return state.tableArray[rowNumber][colNumber];
        }
        // Otherwise remains null
        return null;
      }));
      return {
        ...state,
        tableArray: newTableArray,
        currentNumberToFill: state.currentNumberToFill + 1,
        coordinationArray: state.coordinationArray,
      };
    }

    default:
      break;
  }
  return state;
};
