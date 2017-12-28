import { combineReducers } from 'redux';
import queryReducer from './query';
import processReducer from './process';

const rootReducer = combineReducers({
  query: queryReducer,
  process: processReducer,
});

export default rootReducer;
