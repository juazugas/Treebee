import expect from 'expect';
import React from 'react';
import { shallow } from 'enzyme';
import { TBQueryProcess } from '../../src/components/query-process';

describe('TBQueryProcess', () => {

  const defaultProps = {
    editorOptions: {},
    retrieveProcess: () => {},
    initialProcess: '',
  };

  it('should render a div', () => {
    const process = shallow(<TBQueryProcess {...defaultProps} />);
    expect(process.first().exists()).toBeTruthy();
  });

  it('should render Ace editor', () => {
    const options = { 'test' : 1};
    defaultProps.editorOptions = options;
    const process = shallow(<TBQueryProcess {...defaultProps} />);
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
      editorOptions=""
      retrieveProcess={retrieveProcess}
      initialProcess=""
      />);
    const aceEditor = process.childAt(0);
    expect(aceEditor.props().value).toEqual('');
    aceEditor.simulate("change", 'a');
    expect(p).toEqual('a');
  });

  it('should init query process value from process property', () => {
    const initialProcess = 'process';
    defaultProps.initialProcess = initialProcess;
    const process = shallow(<TBQueryProcess {...defaultProps} initialProcess={initialProcess} />);
    expect(process.state().value).toBe(initialProcess);
  });

});
