import expect from 'expect';
import * as actions from '../../src/actions';

describe('actions/index', () => {

  it('should export UPDATE_QUERY', () => {
    expect(actions.UPDATE_QUERY).toBeDefined();
  });

  it('should export updateQuery action', () => {
    expect(actions.updateQuery).toBeDefined();
  });
});
