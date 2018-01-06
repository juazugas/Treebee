import expect from 'expect';
import React from 'react';
import {shallow} from 'enzyme';
import TBApp from '../../src/components/app';

function setup(props={}) {
  return shallow(<TBApp {...props} />);
}

describe('TBApp', () => {

  let app;
  beforeEach(() => {
    app = setup();
  });

  it('should render header', () => {
    expect(app.find('Connect(TBHeader)').length).toBe(1);
  });

  it('should render footer', () => {
    expect(app.find('TBFooter').length).toBe(1);
  });

  it('should render body', () => {
    expect(app.find('TBBody').exists()).toBeTruthy();
  });

});
