import expect from 'expect';
import sinon from 'sinon';
import moxios from 'moxios';
import {QUERY_ELASTIC, QUERY_PROCESS, QUERY_ERROR, performQuery} from '../../src/actions';

describe('actions/request', () => {

  const getState = () => {
    return {
      query: 'GET /_search\n{}',
      process: '',
    };
  };
  beforeEach(function () {
    moxios.install();
  });

  afterEach(function () {
    moxios.uninstall();
  });

  it('should return action correct type', done => {
    const thunk = performQuery('server');
    const action = thunk(action=>action, getState);
    expect(action.type).toEqual(`${QUERY_ELASTIC}/PENDING`);
    expect(action.payload).toBeUndefined();
    done();
  });

  it('should call dispatch with Promise', done => {
    let server = 'http://127.0.0.1:9200';
    const dispatch = sinon.spy();
    const thunk = performQuery(server);
    const action = thunk(dispatch, getState);
    moxios.wait(() => {
      let request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: 'performed query.'
      }).then((res) => {
        expect(dispatch.calledThrice).toBeTruthy();
        const elasticAction = dispatch.secondCall.args[0];
        expect(elasticAction.type).toBe(QUERY_ELASTIC);
        expect(elasticAction.payload).toBe('performed query.');
        const processAction = dispatch.thirdCall.args[0];
        expect(processAction.type).toBe(QUERY_PROCESS);
        processAction.payload.then(response => {
          expect(response.data).toBe('performed query.');
          done();
        });
      })
      .catch(done)
    });
  });

  it('should call dispatch with QUERY_ERROR', done => {
    const server = 'http://127.0.0.1:9200';
    const dispatch = sinon.spy();
    const thunk = performQuery(server);
    const action = thunk(dispatch, getState);
    moxios.wait(() => {
      let request = moxios.requests.mostRecent();
      request.respondWith({
        status: 400,
        statusText: 'Bad request.',
      })
      .then(error => {
        expect(dispatch.calledTwice).toBeTruthy();
        const errorAction = dispatch.secondCall.args[0];
        expect(errorAction.type).toBe(QUERY_ERROR);
        expect(errorAction.payload).toBeDefined();
        done();
      })
      .catch(done);
    });
  });
});
