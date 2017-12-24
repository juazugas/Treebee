import React from 'react';
import AceEditor from 'react-ace';
import 'brace/mode/json';
import 'brace/theme/github';

const TBQuery = (props = {}) => {
  const { editorOptions } = props || {};
  return (
    <div className="row">
      <AceEditor
        mode="json"
        theme="github"
        name="tb-query"
        width="100%"
        setOptions={editorOptions}
      />
    </div>
  );
};

export default TBQuery;
