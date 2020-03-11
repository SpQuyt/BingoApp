import { tableAction } from 'src/constants/actions';

const addNumberMiddleware = () => next => (action) => {
  if (action.type === tableAction.ADD_NUMBER) {

  }

  return next(action);
};

export default addNumberMiddleware;
