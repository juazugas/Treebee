import { PERFORM_QUERY } from '../actions';
import { PENDING, FULFILLED, REJECTED } from 'redux-promise-middleware';

export default function resultReducer (state = '', action) {
  switch (action.type) {
    case `${PERFORM_QUERY}/${PENDING}` :
      return 'performing query.';
    case `${PERFORM_QUERY}/${FULFILLED}` :
      return action.payload.data;
    case `${PERFORM_QUERY}/${REJECTED}` :
      return JSON.stringify(action.payload.data, null, 2);
  }
  return state;
}
