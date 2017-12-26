import expect from 'expect';
import React from 'react';
import {mount, shallow} from 'enzyme';
import TBHeader from '../../src/components/header';

function setup(props = {}) {
  return shallow(<TBHeader {...props} />);
}

describe('TBHeader', () => {
  it('should render server input', () => {
    const header = setup();
    expect(header.find('input').length).toBe(1);
    expect(header.find('input').props().type).toBe('text');
  });

  it('should render action button', () => {
    const header = setup();
    expect(header.find('button').length).toBe(1);
  });

  it("should control server input", () => {
    const header = setup();
    header.find("input").simulate("change", { target: { value : 'a'} });
    expect(header.find("input").props().value).toEqual("a");
  });

  it('should handle click', () => {
    let server = 'blank';
    const performQuery = (s) => {
      server = s;
    };
    const header = setup({performQuery});
    expect(header.find('button').props().onClick).toBeDefined();
    header.find('input').simulate('change', {target: {value : 'server'}});
    header.find('button').simulate('click');
    expect(server).toEqual('server');
  });

});
