import expect from 'expect';
import React from 'react';
import {mount, shallow} from 'enzyme';
import moxios from 'moxios';
import { TBApp } from '../../src/components/app';

function setup(props={}) {
  return shallow(<TBApp {...props} />);
}

describe('TBApp', () => {

  let app;
  let retrieveQuery = (q) => {};
  beforeEach(() => {
    app = setup({retrieveQuery});
  });

  it('should render header', () => {
    expect(app.find('TBHeader').length).toBe(1);
  });

  it('should render body', () => {
    expect(app.find('TBBody').exists()).toBeTruthy();
  });

  it('should keep state', () => {
    expect(app.state().process).toBeDefined();
    expect(app.state().result).toBeDefined();
  });

  it('should pass handlers', () => {
    expect(app.find('TBHeader').props().performQuery).toEqual(app.instance().performQuery);
    expect(app.find('TBBody').props().retrieveQuery).toEqual(app.instance().props.retrieveQuery);
    expect(app.find('TBBody').props().retrieveProcess).toEqual(app.instance().retrieveProcess);
  });

  it('should pass result', () => {
    expect(app.find('TBBody').props().result).toEqual(app.state().result);
  });

  it('should update process state', () => {
    expect(app.state().process).toEqual('');
    app.instance().retrieveProcess('p');
    expect(app.state().process).toEqual('p');
  });

  it('should perform query', (done) => {
    let query = 'GET /_search\n{}';
    app = setup({retrieveQuery, query});
    expect(app.state().result).toEqual('');
    app.instance().performQuery('http://127.0.0.1:9200')
    expect(app.state().result).toEqual('performing query ...');
    moxios.wait(() => {
      let request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: 'performed query.'
      })
      .then(response => {
        expect(response).toBeDefined();
        expect(app.state().result).toEqual('performed query.');
        done();
      })
      .catch(error => {
        expect(error).toBeUndefined();
        done();
      })
    });
  });

  beforeEach(() => {
    moxios.install();
  });

  afterEach(() => {
    moxios.uninstall();
  });

});
