import expect from 'expect';
import React from 'react';
import {mount, shallow} from 'enzyme';
import TBHeader from '../../src/components/header';

function setup() {
  return shallow(<TBHeader />);
}

describe('TBHeader', () => {
  it('should render server input', () => {
    const wrapper = setup();
    expect(wrapper.find('input').length).toBe(1);
    expect(wrapper.find('input').props().type).toBe('text');
  });

  it('should render action button', () => {
    const wrapper = setup();
    expect(wrapper.find('button').length).toBe(1);
  });

  it("should control server input", () => {
    const wrapper = setup();
    wrapper.find("input").simulate("change", { target: { value : 'a'} });
    expect(wrapper.find("input").props().value).toEqual("a");
  });

});
