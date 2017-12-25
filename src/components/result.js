import React, {Component} from 'react';
import AceEditor from 'react-ace';
import 'brace/theme/terminal';
import 'brace/mode/text';

const TBResult = (props = {}) => {
  const {editorOptions, result} = props;
  const options = Object.assign({
    $blockScrolling: Infinity,
    showLineNumbers: true,
  }, editorOptions);

  return (
    <div className="row">
      <AceEditor
        mode="text"
        theme="terminal"
        name="tb-result"
        readOnly={true}
        value={result}
        width="100%"
        height="600px"
        editorProps={options}
      />
    </div>
  );
};

export default TBResult;
