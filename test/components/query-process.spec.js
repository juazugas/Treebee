import expect from 'expect';
import React from 'react';
import {mount, shallow} from 'enzyme';
import TBQueryProcess from '../../src/components/query-process';

describe('TBQueryProcess', () => {

  beforeEach(() => {
  });

  it('should render a div', () => {
    const process = shallow(<TBQueryProcess />);
    expect(process.first().exists()).toBeTruthy();
  });

  it('should render Ace editor', () => {
    const options = { 'test' : 1};
    const process = shallow(<TBQueryProcess editorOptions={options} />);
    const editor = process.childAt(0);
    expect(editor.text()).toEqual('<ReactAce />');
    expect(editor.props().editorProps.test).toBe(1);
  });

  it('should change query', () => {
    let p = 'no-edited';
    const retrieveProcess = (text) => {
        p = text;
    };
    const process = shallow(
      <TBQueryProcess
        retrieveProcess={retrieveProcess}
      />);
    const aceEditor = process.childAt(0);
    expect(aceEditor.props().value).toEqual('');
    aceEditor.simulate("change", 'a');
    expect(p).toEqual('a');
  });

});
