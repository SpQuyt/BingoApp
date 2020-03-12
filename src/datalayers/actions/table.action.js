import { tableAction } from 'constants/actions';

export const addNumber = (rowNumber, colNumber) => ({
  type: tableAction.ADD_NUMBER,
  payload: {
    rowNumber,
    colNumber,
  },
});

export const resetTable = () => ({
  type: tableAction.RESET_TABLE,
});

export const goBackCell = () => ({
  type: tableAction.GO_BACK_NUMBER,
});

export const randomTable = () => ({
  type: tableAction.RANDOM_TABLE,
});
