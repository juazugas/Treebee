import expect from 'expect';
import queryReducer from '../../src/reducers/query';
import {UPDATE_QUERY, updateQuery} from '../../src/actions';

describe('reducers/query', () => {

  let action;
  beforeEach(() => {
    action = updateQuery('q');
  });

  it('should return empty state when no defined type and empty state', () => {
    const reduction = queryReducer(undefined, {type:'undef'});
    expect(reduction).toEqual('');
  });

  it('should return actual state when no defined type', () => {
    let prevState = 'previous';
    const reduction = queryReducer(prevState, {type:'undef'});
    expect(reduction).toEqual(prevState);
  });

  it('should return modified state when action type', () => {
    let prevState = 'previous';
    const reduction = queryReducer(prevState, action);
    expect(reduction).not.toBe(prevState);
    expect(reduction).toEqual('q');
  });
});
