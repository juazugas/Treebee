import expect from 'expect';
import moxios from 'moxios';
import TBRequest from '../../src/elastic/request';

describe('TBRequest', () => {

  let host = 'http://127.0.0.1:9200';
  let body = '{ "query" : { "match_all" : {}} }';
  let query = `POST /index/_search\n${body}`;

  it('should parse host', () => {
    let request = new TBRequest();
    expect(request.parseHost('invalid')).toBeFalsy();
    expect(request.parseHost('http://127.0.0.1:9200')).toBeTruthy();
  });

  it('should not parse invalid query', () => {
    let request = new TBRequest();
    expect(request.parseQuery('invalid')).toBeFalsy();
    expect(request.parseQuery('DELETE /index')).toBeFalsy();
    expect(request.parseQuery('PUT /index/type/id')).toBeFalsy();
  });

  it('should parse valid query', () => {
    let request = new TBRequest();
    expect(request.parseQuery(`GET /index/_search\n${body}`)).toBeTruthy();
    expect(request.parseQuery(`POST /index/_search\n${body}`)).toBeTruthy();
  });

  it('should parse process', () => {
    let request = new TBRequest();
    expect(request.parseProcess('return response.took;')).toBeTruthy();
  });

  it('should reject invalid fetch', (done) => {
    let request = new TBRequest();
    request.fetch('no-host','','')
    .catch((status) => {
      expect(status).toEqual({
        error: true,
        message: 'invalid host no-host'
      });
      done();
    });
  });

  it('should submit query', (done) => {
    let request = new TBRequest();
    request.fetch(host, query, '');

    moxios.wait(function () {
      let request = moxios.requests.mostRecent()
      request.respondWith({
        status: 200,
        response: 'performed query.'
      })
      .then((response) => {
        expect(response).toBeDefined();
        expect(response.data).toEqual('performed query.');
        done();
      })
      .catch((status) => {
        expect(status).toBe('error');
        done();
      });
    });
  });

  it('should process response', () => {
    let request = new TBRequest();
    request.parseProcess('response.took;');
    expect(request.processResponse({took:10})).toEqual(10);
  });

  it('should print response', () => {
    let response = {took:1};
    let request = new TBRequest();
    expect(request.printResponse('1')).toEqual('1');
    expect(request.printResponse(response)).toEqual(JSON.stringify(response,null,2));
  });

  beforeEach(() => {
    moxios.install();
  });

  afterEach(() => {
    moxios.uninstall();
  });

});
