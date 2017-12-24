import expect from 'expect';
import '../src/index';
import TBApp from '../src/components/app';

describe('index', () => {

  it('should pass', () => {
    expect(true).toBe(true);
  });

  it('should render TBApp on app div', () => {
    const app = global.document.getElementById('app');
    const tbApp = app._reactRootContainer.current.child; // .FiberNode; // .child;
    expect(tbApp.type).toEqual(TBApp);
  });

});
