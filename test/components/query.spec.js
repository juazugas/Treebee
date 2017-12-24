import expect from 'expect';
import React from 'react';
import {mount, shallow} from 'enzyme';
import TBQuery from '../../src/components/query';

describe('TBQuery', () => {

  let query;
  beforeEach(() => {
    query = shallow(<TBQuery />);
  });

  it('should render a div', () => {
    expect(query.first().exists()).toBeTruthy();
  });
});
