import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { currentShow, episodes } from './reducers';

export const createRootReducer = (history) => combineReducers({
  router: connectRouter(history),
  currentShow,
  episodes,
});
