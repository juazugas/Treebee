import expect from 'expect';
import { SERVER_ADD, saveServer } from '../../src/actions';

describe('actions/server', () => {
  it('should return action correct type', () => {
    const action = saveServer('server');
    expect(action.type).toEqual(SERVER_ADD);
  });

  it('should return action payload ', () => {
    const action = saveServer('server');
    expect(action.payload).toEqual('server');
  });
});
