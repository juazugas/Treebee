import React, {Component} from 'react';
import PropTypes from 'prop-types';
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
    <div className="tb__editor response">
      <AceEditor
      mode="text"
      theme="terminal"
      name="tb-result"
      readOnly
      value={result}
      width="100%"
      height="100%"
      editorProps={options}
      />
    </div>
  );
};

TBResult.propTypes = {
  editorOptions: PropTypes.object,
  result: PropTypes.string.isRequired
};

export default TBResult;
