import { tableAction } from 'constants/actions';
import { TABLE_SIZE } from 'constants/sizes';
import ArrayHandler from 'utils/arrays';

export const INITIAL_STATE = {
  currentNumberToFill: 1,
  tableArray: ArrayHandler.createEmptyTableArray(),
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
        // Otherwise remains value of normal cells
        return state.tableArray[rowNumber][colNumber];
      }));
      return {
        ...state,
        tableArray: newTableArray,
        currentNumberToFill: state.currentNumberToFill + 1,
        coordinationArray: state.coordinationArray,
      };
    }

    case tableAction.RESET_TABLE: {
      return {
        ...INITIAL_STATE,
      };
    }

    case tableAction.GO_BACK_NUMBER: {
      if (state.coordinationArray.length > 0) {
        // Pop out the last item of coorArray and capture it
        const lastItem = state.coordinationArray.pop();
        const newTableArray = state.tableArray.map((row, rowNumber) => row.map((col, colNumber) => {
          // Finding the correct rowNumber and colNumber to return null
          if (rowNumber === lastItem.rowNumber && colNumber === lastItem.colNumber) {
            return null;
          }
          // Otherwise remains value of normal cells
          return state.tableArray[rowNumber][colNumber];
        }));
        return {
          ...state,
          tableArray: newTableArray,
          currentNumberToFill: state.currentNumberToFill - 1,
          coordinationArray: state.coordinationArray,
        };
      }
      return {
        ...state,
      };
    }

    case tableAction.RANDOM_TABLE: {
      return {
        ...state,
        tableArray: ArrayHandler.createRandomTableArray(),
        currentNumberToFill: state.currentNumberToFill + TABLE_SIZE * TABLE_SIZE,
      };
    }

    default:
      break;
  }
  return state;
};
