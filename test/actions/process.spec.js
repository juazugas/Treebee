import expect from 'expect';
import {UPDATE_PROCESS, updateProcess} from '../../src/actions';

describe('actions/process', () => {
  it('should return action correct type', () => {
    const action = updateProcess('process');
    expect(action.type).toEqual(UPDATE_PROCESS);
  });

  it('should return action payload ', () => {
    const action = updateProcess('process');
    expect(action.payload).toEqual('process');
  });
});
