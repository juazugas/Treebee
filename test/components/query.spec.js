import expect from 'expect';
import React from 'react';
import { shallow } from 'enzyme';
import brace from 'brace';
import { TBQuery } from '../../src/components/query';

describe('TBQuery', () => {

  const testOptions = {
    '$useWorker': false
  };

  const defaultProps = {
    editorOptions: testOptions,
    retrieveQuery: value => {},
    initialQuery: '',
  };

  it('should render a div', () => {
    const query = shallow(<TBQuery {...defaultProps} />);
    expect(query.first().exists()).toBeTruthy();
  });

  it('should render Ace editor', () => {
    const query = shallow(<TBQuery {...defaultProps} />);
    const editor = query.childAt(0);
    expect(editor.text()).toEqual('<ReactAce />');
    expect(editor.props().editorProps.$useWorker).toBeFalsy();
  });

  it('should change query', () => {
    let q = 'no-edited';
    const retrieveQuery = (query) => {
        q = query;
    };
    const query = shallow(
      <TBQuery
      editorOptions={testOptions}
      retrieveQuery={retrieveQuery}
      />);
    const aceEditor = query.childAt(0);
    expect(aceEditor.props().value).toEqual('');
    aceEditor.simulate("change", 'a');
    expect(q).toEqual('a');
  });

  it('should init query value from query property', () => {
    const initialQuery = 'query';
    const query = shallow(<TBQuery {...defaultProps} initialQuery={initialQuery} />);
    expect(query.state().value).toBe(initialQuery);
  });

});
