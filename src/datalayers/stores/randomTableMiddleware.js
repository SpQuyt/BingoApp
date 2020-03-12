import { tableAction } from 'constants/actions';
import AlertHanlder from 'utils/alerts';

const randomTableMiddleware = () => next => (action) => {
  if (action.type === tableAction.RANDOM_TABLE) {
    AlertHanlder.alertTableFilled();
  }

  return next(action);
};

export default randomTableMiddleware;
