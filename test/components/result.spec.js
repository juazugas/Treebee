import expect from 'expect';
import React from 'react';
import { shallow } from 'enzyme';
import { TBResult } from '../../src/components/result';

describe('TBResult', () => {

  it('should render a div', () => {
    const result = shallow(<TBResult />);
    expect(result.first().exists()).toBeTruthy();
  });

  it('should render Ace editor', () => {
    const options = { test :1};
    const result = shallow(<TBResult editorOptions={options} />);
    const editor = result.childAt(0);
    expect(editor.name()).toEqual('ReactAce');
    expect(editor.props().editorProps.test).toBe(1);
  });

  it('should render value prop', () => {
    const content = 'result';
    const result = shallow(<TBResult result={content} />);
    const editor = result.childAt(0);
    expect(editor.props().value).toEqual(content);
  });

  it('should render mode prop', () => {
    const mode = 'mode';
    const result = shallow(<TBResult mode={mode} />);
    const editor = result.childAt(0);
    expect(editor.props().mode).toEqual(mode);
  });

  it('should render mode "json"', () => {
    const result = shallow(<TBResult />);
    const editor = result.childAt(0);
    expect(editor.props().mode).toEqual('json');
  });

});
