import TBRequest from '../elastic/request';
import { QUERY_ELASTIC, QUERY_PROCESS, QUERY_ERROR } from './types';

export function performQuery (server) {
  return (dispatch, getState) => {
    const { query, process } = getState();
    const request = new TBRequest();
    request.fetchQuery(server, query)
      .then(response => {
        const {data}  = response;
        dispatch({ type: QUERY_ELASTIC, payload: data });
        dispatch({
          type: QUERY_PROCESS,
          payload : request.processQuery(process, data)
        });
      })
      .catch(error =>
        dispatch({type: QUERY_ERROR, payload: error})
      );

    return dispatch({type:`${QUERY_ELASTIC}/PENDING`});
  };
}
