import TBRequest from '../elastic/request';
import { PERFORM_QUERY } from './types';

export function performQuery (server, query, process) {
  const request = new TBRequest();
  return {
    type: PERFORM_QUERY,
    payload: request.fetch(server, query, process)
  };
}
