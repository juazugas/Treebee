import expect from 'expect';
import moxios from 'moxios';
import {PERFORM_QUERY, performQuery} from '../../src/actions';

describe('actions/request', () => {

  beforeEach(function () {
    moxios.install()
  })

  afterEach(function () {
    moxios.uninstall()
  })

  it('should return action correct type', done => {
    const action = performQuery('server', 'query', 'process');
    expect(action.type).toEqual(PERFORM_QUERY);
    action.payload.catch(e => done());
  });

  it('should return action payload ', done => {
    let query = 'GET /_search\n{}';
    let process = 'response';
    let server = 'http://127.0.0.1:9200';
    const action = performQuery(server, query, process);
    action.payload.then((res) => {
      expect(res.data).toBe('performed query.');
      done();
    });
    moxios.wait(() => {
      let request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: 'performed query.'
      })
      .catch(error => {
        expect(error).toBeUndefined();
        done();
      })
    });
  });
});
