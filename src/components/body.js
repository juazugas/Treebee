import React from 'react';
import PropTypes from 'prop-types';
import TBQuery from './query';
import TBQueryProcess from './query-process';
import TBResult from './result';

const TBBody = (props) => {
  const {retrieveQuery,retrieveProcess,result} = props;
  const propTypes = {
    retrieveQuery: PropTypes.func,
    retrieveProcess: PropTypes.func,
    result: PropTypes.string,
  };
  return (
      <div className="row">
        <div className="col-md-4">
          <TBQuery
          retrieveQuery={retrieveQuery}/>
          <TBQueryProcess
          retrieveProcess={retrieveProcess}/>
        </div>
        <div className="col-md-8">
          <TBResult
          result={result}/>
        </div>
      </div>
  );
};

export default TBBody;
