import expect from 'expect';
import serversReducer from '../../src/reducers/server';
import { SERVER_ADD, saveServer } from '../../src/actions';

describe('reducers/server', () => {

  let action;
  beforeEach(() => {
    action = saveServer('server');
  });

  it('should return empty state when no defined type and empty state', () => {
    const reduction = serversReducer(undefined, {type:'undef'});
    expect(reduction).toEqual([]);
  });

  it('should return actual state when no defined type', () => {
    let prevState = ['previous'];
    const reduction = serversReducer(prevState, {type:'undef'});
    expect(reduction).toEqual(prevState);
  });

  it('should return actual state when yet include server', () => {
    let prevState = ['previous', 'other'];
    const reduction = serversReducer(prevState, {type:'SERVER_ADD', payload: 'other'});
    expect(reduction).toEqual(prevState);
    expect(reduction.length).toEqual(2);
  });

  it('should return modified state when action type', () => {
    let prevState = ['previous'];
    const reduction = serversReducer(prevState, action);
    expect(reduction).not.toBe(prevState);
    expect(reduction).toContain('server');
    expect(reduction.length).toEqual(2);
  });
});
