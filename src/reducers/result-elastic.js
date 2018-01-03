import { QUERY_ELASTIC } from '../actions';

export default function resultElasticReducer (state = '', action) {
  switch (action.type) {
    case `${QUERY_ELASTIC}` :
      return action.payload;
  }
  return state;
}
