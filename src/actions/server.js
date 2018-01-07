import { SERVER_ADD } from './types';

export function saveServer (server) {
  return {
    type: SERVER_ADD,
    payload: server
  };
}
