import { SERVER_ADD } from '../actions';

export default function serversReducer (state = [], action) {
  switch (action.type) {
    case SERVER_ADD:
      if (state.indexOf(action.payload) === -1) {
        return [action.payload, ...state];
      }
  }
  return state;
}
