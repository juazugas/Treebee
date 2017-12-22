import expect from 'expect';
import React from 'react';
import {mount, shallow} from 'enzyme';
import App from '../../src/components/app';

function setup() {
  return shallow(<App></App>);
}

describe('App', () => {
  it('should render header', () => {
    const wrapper = setup();
    expect(wrapper.find('Header').length).toBe(1);
  });

});
