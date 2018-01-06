import React from 'react';
import TBQuery from './query';
import TBQueryProcess from './query-process';
import TBResult from './result';

const TBBody = () => {
  return (
      <section className="tb__main">
        <div className="tb__container-query">
          <TBQuery />
          <TBQueryProcess />
        </div>
        <div className="tb__container-response">
          <TBResult />
        </div>
      </section>
  );
};

export default TBBody;
