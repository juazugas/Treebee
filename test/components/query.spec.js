import expect from 'expect';
import React from 'react';
import {mount, shallow} from 'enzyme';
import brace from 'brace';
import TBQuery from '../../src/components/query';

describe('TBQuery', () => {

  let query;
  let testOptions = {
    useWorker: false
  };
  beforeEach(() => {
    query = shallow(<TBQuery editorOptions={testOptions} />);
  });

  it('should render a div', () => {
    expect(query.first().exists()).toBeTruthy();
  });

  it('should render Ace editor', () => {
    const editor = query.childAt(0);
    expect(editor.text()).toEqual('<ReactAce />');
  });

});
