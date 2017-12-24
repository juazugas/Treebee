import expect from 'expect';
import React from 'react';
import {mount, shallow} from 'enzyme';
import TBQueryProcess from '../../src/components/query-process';

describe('TBQueryProcess', () => {

  let process;
  beforeEach(() => {
    process = shallow(<TBQueryProcess />);
  });

  it('should render a div', () => {
    expect(process.first().exists()).toBeTruthy();
  });

});
