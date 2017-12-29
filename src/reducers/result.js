import { PERFORM_QUERY } from '../actions';
import { PENDING, FULFILLED, REJECTED } from 'redux-promise-middleware';

const formatRejectQuery = payload => {
  let result = payload.data ? payload.data : payload;
  try {
    return JSON.stringify(result, null, 2);
  } catch(e) {
    return result.toString();
  }
};

export default function resultReducer (state = '', action) {
  switch (action.type) {
    case `${PERFORM_QUERY}/${PENDING}` :
      return 'performing query.';
    case `${PERFORM_QUERY}/${FULFILLED}` :
      return action.payload.data;
    case `${PERFORM_QUERY}/${REJECTED}` :
      return formatRejectQuery(action.payload);
  }
  return state;
}
