import expect from 'expect';
import sinon from 'sinon';
import React from 'react';
import {mount, shallow} from 'enzyme';
import { TBHeader } from '../../src/components/header';

function setup(props = {performQuery: ()=>{}}) {
  return shallow(<TBHeader {...props} />);
}

describe('TBHeader', () => {
  it('should render server autocomplete input', () => {
    const header = setup();
    expect(header.find('Autocomplete').length).toBe(1);
    expect(header.find('Autocomplete').props().onChange).toBe(header.instance().onServerChange);
    expect(header.find('Autocomplete').props().renderItem).toBe(header.instance().renderItem);
  });

  it('should render action button', () => {
    const header = setup();
    expect(header.find('button').length).toBe(1);
  });

  it("should control server input", () => {
    const header = setup();
    header.find("Autocomplete").simulate("change", { target: { value : 'a'} });
    expect(header.find("Autocomplete").props().value).toEqual("a");
  });

  it('should handle click', () => {
    let server = 'blank';
    const performQuery = (s) => {
      server = s;
    };
    const saveServer = sinon.spy();
    const header = setup({performQuery,saveServer});
    expect(header.find('button').props().onClick).toBeDefined();
    header.setState({server:'server'});
    header.find('button').simulate('click');
    expect(server).toEqual('server');
    expect(saveServer.calledWith('server')).toBeTruthy();
  });

});
