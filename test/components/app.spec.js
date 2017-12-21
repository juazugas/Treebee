import expect from 'expect';
import React from 'react';
import {mount, shallow} from 'enzyme';
import App from '../../src/components/app';

function setup(children = <div/>) {
  return shallow(<App>{children}</App>);
}

describe('App', () => {
  it('should render header', () => {
    const wrapper = setup();
    expect(wrapper.find('Header').length).toBe(1);
  });

  it('should render children', () => {
    const wrapper = setup(<a></a>);
    expect(wrapper.find('a').length).toBe(1);
  });
});
