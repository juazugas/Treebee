import { UPDATE_PROCESS } from './types';

export function updateProcess (process) {
  return {
    type: UPDATE_PROCESS,
    payload: process
  };
}
