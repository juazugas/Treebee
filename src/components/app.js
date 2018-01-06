import React, {Component} from 'react';
import TBHeader from './header';
import TBFooter from './footer';
import TBBody from './body';

const TBApp = () => {
    return (
      <div className="tb__container">
        <TBHeader />
        <TBBody  />
        <TBFooter />
      </div>
    );
};

export default TBApp;
