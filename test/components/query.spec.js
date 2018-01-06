import expect from 'expect';
import React from 'react';
import { shallow } from 'enzyme';
import brace from 'brace';
import { TBQuery } from '../../src/components/query';

describe('TBQuery', () => {

  const testOptions = {
    '$useWorker': false
  };

  const defaultOptions = {
    retrieveQuery: value => {}
  };

  it('should render a div', () => {
    const query = shallow(<TBQuery editorOptions={testOptions} />);
    expect(query.first().exists()).toBeTruthy();
  });

  it('should render Ace editor', () => {
    const query = shallow(<TBQuery editorOptions={testOptions} />);
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

});
