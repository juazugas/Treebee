import expect from 'expect';
import sinon from 'sinon';
import React from 'react';
import {shallow} from 'enzyme';
import { TBApp } from '../../src/components/app';

function setup(props={}) {
  return shallow(<TBApp {...props} />);
}

describe('TBApp', () => {

  let app;
  let retrieveQuery =  (q) => {};
  let retrieveProcess = (p) => {};
  beforeEach(() => {
    app = setup({retrieveQuery, retrieveProcess});
  });

  it('should render header', () => {
    expect(app.find('TBHeader').length).toBe(1);
  });

  it('should render footer', () => {
    expect(app.find('TBFooter').length).toBe(1);
  });


  it('should render body', () => {
    expect(app.find('TBBody').exists()).toBeTruthy();
  });

  it('should pass handlers', () => {
    expect(app.find('TBHeader').props().performQuery).toEqual(app.instance().performQuery);
    expect(app.find('TBBody').props().retrieveQuery).toEqual(app.instance().props.retrieveQuery);
    expect(app.find('TBBody').props().retrieveProcess).toEqual(app.instance().props.retrieveProcess);
  });

  it('should pass result', () => {
    expect(app.find('TBBody').props().result).toEqual(app.state().result);
  });

  it('should perform query', () => {
    const query = 'GET /_search\n{}';
    const process = 'response';
    const server = 'http://127.0.0.1:9200';
    const performQuery = sinon.spy();
    app = setup({retrieveQuery, retrieveProcess, performQuery, query, process});
    app.instance().performQuery(server);
    expect(performQuery.calledWith(server, query, process)).toBeTruthy();
  });

});
