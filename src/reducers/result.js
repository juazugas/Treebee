import { QUERY_PROCESS, QUERY_ELASTIC, QUERY_ERROR } from '../actions';
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
    case `${QUERY_ELASTIC}/PENDING` :
      return 'performing query.';
    case `${QUERY_PROCESS}/${PENDING}` :
      return 'processing query.';
    case `${QUERY_PROCESS}/${FULFILLED}` :
      return action.payload.data;
    case QUERY_ERROR :
    case `${QUERY_PROCESS}/${REJECTED}` :
      return formatRejectQuery(action.payload);
  }
  return state;
}
