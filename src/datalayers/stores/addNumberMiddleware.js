import { tableAction } from 'constants/actions';
import store from 'datalayers/stores';
import AlertHanlder from 'utils/alerts';
import { TABLE_SIZE } from 'constants/sizes';

const addNumberMiddleware = () => next => (action) => {
  if (action.type === tableAction.ADD_NUMBER) {
    if (store.getState().table.currentNumberToFill > TABLE_SIZE * TABLE_SIZE - 1) {
      AlertHanlder.alertTableFilled();
    }
  }

  return next(action);
};

export default addNumberMiddleware;
