import expect from 'expect';
import React from 'react';
import {mount, shallow} from 'enzyme';
import TBResult from '../../src/components/result';

describe('TBResult', () => {

  let result;
  beforeEach(() => {
    result = shallow(<TBResult />);
  });

  it('should render a div', () => {
    expect(result.first().exists()).toBeTruthy();
  });

  it('should render Ace editor', () => {
    const editor = result.childAt(0);
    expect(editor.text()).toEqual('<ReactAce />');
  });

});
