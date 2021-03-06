import React, {Component} from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import AceEditor from 'react-ace';
import 'brace/theme/terminal';
import 'brace/mode/json';
import 'brace/mode/text';

export const TBResult = (props = {}) => {
  const {editorOptions, result} = props;
  let {mode}  = props;
  if (!mode) {
     mode = 'json';
   }
  const options = Object.assign({
    $blockScrolling: Infinity,
    showLineNumbers: true,
  }, editorOptions);

  return (
    <div className="tb__editor response">
      <AceEditor
      mode={mode}
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
  result: PropTypes.string.isRequired,
  mode: PropTypes.string,
};

const mapStateToProps = state => {
  return {
    result: state.result,
  };
};

export default connect(mapStateToProps)(TBResult);
