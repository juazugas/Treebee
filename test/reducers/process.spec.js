import expect from 'expect';
import processReducer from '../../src/reducers/process';
import {UPDATE_PROCESS, updateProcess} from '../../src/actions';

describe('reducers/process', () => {

  let action;
  beforeEach(() => {
    action = updateProcess('q');
  });

  it('should return empty state when no defined type and empty state', () => {
    const reduction = processReducer(undefined, {type:'undef'});
    expect(reduction).toEqual('');
  });

  it('should return actual state when no defined type', () => {
    let prevState = 'previous';
    const reduction = processReducer(prevState, {type:'undef'});
    expect(reduction).toEqual(prevState);
  });

  it('should return modified state when action type', () => {
    let prevState = 'previous';
    const reduction = processReducer(prevState, action);
    expect(reduction).not.toBe(prevState);
    expect(reduction).toEqual('q');
  });
});
