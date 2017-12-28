import {UPDATE_PROCESS} from '../actions';

export default function processReducer (state = '', action) {
  switch (action.type) {
    case UPDATE_PROCESS:
      return action.payload;
  }
  return state;
}
