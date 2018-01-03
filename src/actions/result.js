import TBRequest from '../elastic/request';
import { QUERY_ELASTIC, QUERY_PROCESS, QUERY_ERROR } from './types';

export function performQuery (server, query, process) {
  return dispatch => {
    const request = new TBRequest();
    request.fetchQuery(server, query)
    .then(response => {
      let {data}  = response;
      console.log(response);
      dispatch({ type: QUERY_ELASTIC, payload: data });
      dispatch({
        type: QUERY_PROCESS,
        payload : request.processQuery(process, data)
      });
    })
    .catch(error => {
      console.log(error);
      return dispatch({type: QUERY_ERROR, payload: error})
    });
    return dispatch({type:`${QUERY_ELASTIC}/PENDING`});
  };
}
