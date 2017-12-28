import expect from 'expect';
import {PERFORM_QUERY} from '../../src/actions';
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
        type: `${PERFORM_QUERY}/${PENDING}`,
      };
      let prevState = 'previous';
      const reduction = resultReducer(prevState, action);
      expect(reduction).not.toBe(prevState);
      expect(reduction).toEqual('performing query.');
    });

    it('should return modified state when action type REJECTED', () => {
      let action = {
        type: `${PERFORM_QUERY}/${REJECTED}`,
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
        type: `${PERFORM_QUERY}/${FULFILLED}`,
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
