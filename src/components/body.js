import React from 'react';
import PropTypes from 'prop-types';
import TBQuery from './query';
import TBQueryProcess from './query-process';
import TBResult from './result';

const TBBody = (props) => {
  const {retrieveQuery,retrieveProcess,result} = props;
  return (
      <section className="tb__main">
        <div className="tb__container-query">
          <TBQuery
          retrieveQuery={retrieveQuery}/>
          <TBQueryProcess
          retrieveProcess={retrieveProcess}/>
        </div>
        <div className="tb__container-response">
          <TBResult
          result={result}/>
        </div>
      </section>
  );
};
TBBody.propTypes = {
  retrieveQuery: PropTypes.func,
  retrieveProcess: PropTypes.func,
  result: PropTypes.string,
};

export default TBBody;
