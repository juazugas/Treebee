import React,{Component} from 'react';
import PropTypes from 'prop-types';
import AceEditor from 'react-ace';
import 'brace/mode/javascript';
import 'brace/theme/github';

class TBQueryProcess extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editorOptions: props.editorOptions,
      retrieveProcess: props.retrieveProcess,
      value : ''
    };
    this.onChangeProcess = this.onChangeProcess.bind(this);
  }

  onChangeProcess (value) {
    this.setState({value});
    this.state.retrieveProcess(value);
  }

  render () {
    const options = Object.assign({
      showLineNumbers: true,
    }, this.state.editorOptions);
    return (
      <div className="tb__editor process">
        <AceEditor
        mode="javascript"
        theme="github"
        name="tb-process"
        value={this.state.value}
        onChange={this.onChangeProcess}
        width="100%"
        height="100%"
        showPrintMargin
        showGutter
        highlightActiveLine
        editorProps={options}
        />
      </div>
    );
  }
}

TBQueryProcess.propTypes = {
  editorOptions: PropTypes.object,
  retrieveProcess: PropTypes.func.isRequired,
};

export default TBQueryProcess;
