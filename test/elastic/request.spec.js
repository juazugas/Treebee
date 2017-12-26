import expect from 'expect';
import Request from '../../src/elastic/request';

describe('Request', () => {

  let host = 'http://127.0.0.1:9200';
  let body = '{ "query" : { "match_all" : {}} }';
  let query = `POST /index/_search\n${body}`;

  it('should parse host', () => {
    let request = new Request();
    expect(request.parseHost('invalid')).toBeFalsy();
    expect(request.parseHost('http://127.0.0.1:9200')).toBeTruthy();
  });

  it('should not parse invalid query', () => {
    let request = new Request();
    expect(request.parseQuery('invalid')).toBeFalsy();
    expect(request.parseQuery('DELETE /index')).toBeFalsy();
    expect(request.parseQuery('PUT /index/type/id')).toBeFalsy();
  });

  it('should parse valid query', () => {
    let request = new Request();
    expect(request.parseQuery(`GET /index/_search\n${body}`)).toBeTruthy();
    expect(request.parseQuery(`POST /index/_search\n${body}`)).toBeTruthy();
  });

  it('should parse process', () => {
    let request = new Request();
    expect(request.parseProcess('return response.took;')).toBeTruthy();
  });

  it('should reject invalid fetch', (done) => {
    let request = new Request();
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
    let request = new Request();
    request.fetch(host, query, '')
      .then((response) => {
        expect(response).toBeDefined();
        expect(response.data).toEqual('performed query.');
        done();
      });
  });

});
