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

});
