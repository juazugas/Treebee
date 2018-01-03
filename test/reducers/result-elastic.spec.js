import expect from 'expect';
import { QUERY_ELASTIC } from '../../src/actions';
import resultElasticReducer from '../../src/reducers/result-elastic';

describe('reducers/result-elastic', () => {

  it('should return empty state when no defined type and empty state', () => {
    const reduction = resultElasticReducer(undefined, {type:'undef'});
    expect(reduction).toEqual('');
  });

  it('should return actual state when no defined type', () => {
    let prevState = 'previous';
    const reduction = resultElasticReducer(prevState, {type:'undef'});
    expect(reduction).toEqual(prevState);
  });

  it('should return modified state when action type PENDING', () => {
    let action = {
      type: `${QUERY_ELASTIC}`,
      payload: 'current'
    };
    let prevState = 'previous';
    const reduction = resultElasticReducer(prevState, action);
    expect(reduction).not.toBe(prevState);
    expect(reduction).toEqual('current');
  });

});
