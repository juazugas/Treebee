import expect from 'expect';
import React from 'react';
import {mount, shallow} from 'enzyme';
import TBApp from '../../src/components/app';

function setup() {
  return shallow(<TBApp></TBApp>);
}

describe('TBApp', () => {
  it('should render header', () => {
    const wrapper = setup();
    expect(wrapper.find('TBHeader').length).toBe(1);
  });

  it('should render body', () => {
    const wrapper = setup();
    expect(wrapper.find('TBBody').exists()).toBeTruthy();
  });

});
