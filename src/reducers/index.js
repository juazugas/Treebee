import { combineReducers } from 'redux';
import queryReducer from './query';
import processReducer from './process';
import resultReducer from './result';

const rootReducer = combineReducers({
  query: queryReducer,
  process: processReducer,
  result: resultReducer,
});

export default rootReducer;
