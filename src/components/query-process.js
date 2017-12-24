import React from 'react';
import AceEditor from 'react-ace';
import 'brace/mode/javascript';
import 'brace/theme/github';

const TBQueryProcess = (props = {}) => {
  const {editorOptions} = props || {};
  return (
    <div className="row">
      <AceEditor
        mode="javascript"
        theme="github"
        name="tb-process"
        width="100%"
        setOptions={editorOptions}
      />
    </div>
  );
};

export default TBQueryProcess;
