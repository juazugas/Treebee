import {UPDATE_QUERY} from './types';

export function updateQuery (query) {
  return {
    type: UPDATE_QUERY,
    payload: query
  };
}
