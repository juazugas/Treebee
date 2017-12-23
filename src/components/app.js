import React, {Component} from 'react';
import TBHeader from './header';
import TBBody from './body';

export default class TBApp extends Component {
  render () {
    return (
      <div className="container-fluid">
        <TBHeader />
        <TBBody />
      </div>
    );
  }
}
