import expect from 'expect';
import { QUERY_ELASTIC, QUERY_PROCESS, QUERY_ERROR } from '../../src/actions';
import { PENDING, FULFILLED, REJECTED } from 'redux-promise-middleware';
import resultReducer from '../../src/reducers/result';

describe('reducers/result', () => {

    it('should return empty state when no defined type and empty state', () => {
      const reduction = resultReducer(undefined, {type:'undef'});
      expect(reduction).toEqual('');
    });

    it('should return actual state when no defined type', () => {
      let prevState = 'previous';
      const reduction = resultReducer(prevState, {type:'undef'});
      expect(reduction).toEqual(prevState);
    });

    it('should return modified state when action type PENDING', () => {
      let action = {
        type: `${QUERY_ELASTIC}/${PENDING}`,
      };
      let prevState = 'previous';
      const reduction = resultReducer(prevState, action);
      expect(reduction).not.toEqual(prevState);
      expect(reduction).toEqual('performing query.');
    });

    it('should return modified state when action type PROCESS/PENDING', () => {
      let action = {
        type: `${QUERY_PROCESS}/${PENDING}`,
      };
      let prevState = 'previous';
      const reduction = resultReducer(prevState, action);
      expect(reduction).not.toEqual(prevState);
      expect(reduction).toEqual('processing query.');
    });

    it('should return modified state when action type PROCESS/REJECTED', () => {
      let action = {
        type: `${QUERY_PROCESS}/${REJECTED}`,
        payload: {
          status: 404,
          data: 'result rejected.'
        }
      };
      let prevState = 'previous';
      const reduction = resultReducer(prevState, action);
      expect(reduction).not.toBe(prevState);
      expect(reduction).toEqual('"result rejected."');
    });

    it('should return modified state when action type QUERY_ERROR', () => {
      let action = {
        type: QUERY_ERROR,
        payload: {
          status: 404,
          data: 'result rejected.'
        }
      };
      let prevState = 'previous';
      const reduction = resultReducer(prevState, action);
      expect(reduction).not.toBe(prevState);
      expect(reduction).toEqual('"result rejected."');
    });

    it('should return modified state when action type FULFILLED', () => {
      let action = {
        type: `${QUERY_PROCESS}/${FULFILLED}`,
        payload: {
          data: 'performed result.'
        }
      };
      let prevState = 'previous';
      const reduction = resultReducer(prevState, action);
      expect(reduction).not.toBe(prevState);
      expect(reduction).toEqual('performed result.');
    });

});
