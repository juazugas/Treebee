import expect from 'expect';
import {UPDATE_QUERY, updateQuery} from '../../src/actions';

describe('actions/query', () => {
  it('should return action correct type', () => {
    const action = updateQuery('query');
    expect(action.type).toEqual(UPDATE_QUERY);
  });

  it('should return action payload ', () => {
    const action = updateQuery('query');
    expect(action.payload).toEqual('query');
  });
});
