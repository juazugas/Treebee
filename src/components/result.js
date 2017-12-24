import React from 'react';
import AceEditor from 'react-ace';
import 'brace/theme/terminal';

const TBResult = (props = {}) => {
  const {editorOptions} = props || {};
  return (
    <div className="row">
      <AceEditor
        theme="terminal"
        name="tb-result"
        width="100%"
        height="600px"
        setOptions={editorOptions}
      />
    </div>
  );
};

export default TBResult;
