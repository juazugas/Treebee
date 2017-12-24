import React from 'react';
import TBQuery from './query';
import TBQueryProcess from './query-process';
import TBResult from './result';

const TBBody = (props) => {
  return (
      <div className="row">
        <div className="col-md-4">
          <TBQuery/>
          <TBQueryProcess/>
        </div>
        <div className="col-md-8">
          <TBResult />
        </div>
      </div>
  );
};

export default TBBody;
