import { combineReducers } from 'redux';
import queryReducer from './query';
import processReducer from './process';
import resultReducer from './result';
import resultElasticReducer from './result-elastic';

const rootReducer = combineReducers({
  query: queryReducer,
  process: processReducer,
  result: resultReducer,
  resultJson: resultElasticReducer,
});

export default rootReducer;
