import expect from 'expect';
import React from 'react';
import {mount, shallow} from 'enzyme';
import TBApp from '../../src/components/app';

function setup(props={}) {
  return shallow(<TBApp {...props} />);
}

describe('TBApp', () => {

  let app;
  beforeEach(() => {
    app = setup();
  });

  it('should render header', () => {
    expect(app.find('TBHeader').length).toBe(1);
  });

  it('should render body', () => {
    expect(app.find('TBBody').exists()).toBeTruthy();
  });

  it('should keep state', () => {
    expect(app.state().query).toBeDefined();
    expect(app.state().process).toBeDefined();
    expect(app.state().result).toBeDefined();
  });

  it('should pass handlers', () => {
    expect(app.find('TBHeader').props().performQuery).toEqual(app.instance().performQuery);
    expect(app.find('TBBody').props().retrieveQuery).toEqual(app.instance().retrieveQuery);
    expect(app.find('TBBody').props().retrieveProcess).toEqual(app.instance().retrieveProcess);
  });

  it('should pass result', () => {
    expect(app.find('TBBody').props().result).toEqual(app.state().result);
  });

  it('should update query state', () => {
    expect(app.state().query).toEqual('');
    app.instance().retrieveQuery('q');
    expect(app.state().query).toEqual('q');
  });

  it('should update process state', () => {
    expect(app.state().process).toEqual('');
    app.instance().retrieveProcess('p');
    expect(app.state().process).toEqual('p');
  });

  it('should perform query', (done) => {
    expect(app.state().result).toEqual('');
    app.instance().performQuery('server');
    expect(app.state().result).toEqual('performing query ...');
    setTimeout(() => {
      expect(app.state().result).toEqual('performed query.');
      done();
    }, 1600);
  });

});
