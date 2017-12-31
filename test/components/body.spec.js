import expect from 'expect';
import React from 'react';
import {mount, shallow} from 'enzyme';
import TBBody from '../../src/components/body';

function setup(props = {}) {
  return shallow(<TBBody {...props}/>);
}

describe('TBBody', () => {
  it('should render a new row', () => {
    const body = setup();
    expect(body.first().props().className).toEqual('tb__main');
  });

  it('should render the query editor', () => {
    const retrieveQuery = () => {};
    const body = setup({retrieveQuery});
    expect(body.find('TBQuery').exists()).toBeTruthy();
    expect(body.find('TBQuery').props().retrieveQuery).toEqual(retrieveQuery);
  });

  it('should render the process editor', () => {
    const retrieveProcess = () => {};
    const body = setup({retrieveProcess});
    expect(body.find('TBQueryProcess').exists()).toBeTruthy();
    expect(body.find('TBQueryProcess').props().retrieveProcess).toEqual(retrieveProcess);
  });

  it('should render the process editor', () => {
    const result = 'result';
    const body = setup({result});
    expect(body.find('TBResult').exists()).toBeTruthy();
    expect(body.find('TBResult').props().result).toEqual(result);
  });

});
