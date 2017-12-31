import expect from 'expect';
import React from 'react';
import {mount, shallow} from 'enzyme';
import TBFooter from '../../src/components/footer';

function setup() {
  return mount(<TBFooter />);
}

describe('TBFooter', () => {

  it('should render a footer', () => {
    const footer = setup();
    expect(footer.find('footer').length).toBeTruthy();
    expect(footer.text()).toContain('Treebee');
  });

});
