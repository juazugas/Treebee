import expect from 'expect';
import '../src/index';
import {Provider} from 'react-redux';
import TBApp from '../src/components/app';
import store from '../src/store';

describe('index', () => {

  it('should pass', () => {
    expect(true).toBe(true);
  });

  it('should render TBApp on app div', () => {
    const app = global.document.getElementById('app');
    const provider = app._reactRootContainer.current.child; // .FiberNode; // .child;
    expect(provider.type).toEqual(Provider);
    expect(provider.stateNode.props.store).toBe(store);
    const tbApp = provider.stateNode.props.children; // .FiberNode; // .child;
    expect(tbApp.type).toEqual(TBApp);
  });

});
