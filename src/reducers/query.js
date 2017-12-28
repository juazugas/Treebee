import {UPDATE_QUERY} from '../actions';

export default function queryReducer (state = '', action) {
  switch (action.type) {
    case UPDATE_QUERY:
      return action.payload;
  }
  return state;
}
