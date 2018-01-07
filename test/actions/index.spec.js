import expect from 'expect';
import * as actions from '../../src/actions';

describe('actions/index', () => {

  it('should export UPDATE_QUERY', () => {
    expect(actions.UPDATE_QUERY).toBeDefined();
  });

  it('should export UPDATE_PROCESS', () => {
    expect(actions.UPDATE_PROCESS).toBeDefined();
  });

  it('should export QUERY_ELASTIC', () => {
    expect(actions.QUERY_ELASTIC).toBeDefined();
  });

  it('should export QUERY_PROCESS', () => {
    expect(actions.QUERY_PROCESS).toBeDefined();
  });

  it('should export QUERY_ERROR', () => {
    expect(actions.QUERY_ERROR).toBeDefined();
  });

  it('should export SERVER_ADD', () => {
    expect(actions.SERVER_ADD).toBeDefined();
  })

  it('should export updateQuery action', () => {
    expect(actions.updateQuery).toBeDefined();
  });

  it('should export updateProcess action', () => {
    expect(actions.updateProcess).toBeDefined();
  });

  it('should export performQuery action', () => {
    expect(actions.performQuery).toBeDefined();
  });

  it('should export saveServer action', () => {
    expect(actions.saveServer).toBeDefined();
  });

});
