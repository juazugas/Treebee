import React, {Component} from 'react';
import TBHeader from './header';

export default class TBApp extends Component {
  render () {
    return (
      <div className="container-fluid">
        <TBHeader />
      </div>
    );
  }
}
