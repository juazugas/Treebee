import expect from 'expect';
import React from 'react';
import {mount, shallow} from 'enzyme';
import TBBody from '../../src/components/body';

function setup() {
  return shallow(<TBBody />);
}

describe('TBBody', () => {
  it('should render a new row', () => {
    const wrapper = setup();
    expect(wrapper.first().props().className).toEqual('row');
  });

  it('should render the query editor', () => {
    const wrapper = setup();
    expect(wrapper.find('TBQuery').exists()).toBeTruthy();
  });

  it('should render the process editor', () => {
    const wrapper = setup();
    expect(wrapper.find('TBQueryProcess').exists()).toBeTruthy();
  });

  it('should render the process editor', () => {
    const wrapper = setup();
    expect(wrapper.find('TBResult').exists()).toBeTruthy();
  });

});
