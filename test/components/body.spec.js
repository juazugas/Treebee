import expect from 'expect';
import React from 'react';
import {shallow} from 'enzyme';
import TBBody from '../../src/components/body';

function setup(props = {}) {
  return shallow(<TBBody {...props}/>);
}

describe('TBBody', () => {

  let body;
  beforeEach(() =>{
    body = setup();
  });

  it('should render a new section and two columns', () => {
    expect(body.first().hasClass('tb__main')).toBeTruthy();
    expect(body.children().first().props().className).toEqual('tb__container-query');
    expect(body.children().last().props().className).toEqual('tb__container-response');
  });

  it('should render the query editor', () => {
    expect(body.find('Connect(TBQuery)').exists()).toBeTruthy();
  });

  it('should render the process editor', () => {
    expect(body.find('Connect(TBQueryProcess)').exists()).toBeTruthy();
  });

  it('should render the process editor', () => {
    expect(body.find('Connect(TBResult)').exists()).toBeTruthy();
  });

});
