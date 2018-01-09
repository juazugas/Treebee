import { combineReducers } from 'redux';
import queryReducer from './query';
import processReducer from './process';
import resultReducer from './result';
import resultElasticReducer from './result-elastic';
import serversReducer from './server';

const rootReducer = combineReducers({
  query: queryReducer,
  process: processReducer,
  result: resultReducer,
  resultJson: resultElasticReducer,
  servers: serversReducer,
});

export const persistPaths = [
  'query', 'process', 'servers'
];

export default rootReducer;
