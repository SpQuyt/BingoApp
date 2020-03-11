import { tableAction } from 'src/constants/actions';

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
