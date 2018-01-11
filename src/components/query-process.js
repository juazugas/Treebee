import React,{Component} from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import AceEditor from 'react-ace';
import 'brace/mode/javascript';
import 'brace/theme/textmate';
import { updateProcess } from '../actions';

const defaultProps = {
  initialProcess: '',
};

export class TBQueryProcess extends Component {
  constructor(props = defaultProps) {
    super(props);
    this.state = {
      editorOptions: props.editorOptions,
      retrieveProcess: props.retrieveProcess,
      value : props.initialProcess,
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
        theme="textmate"
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
  initialProcess: PropTypes.string.isRequired,
};

const mapStateToProps = state => {
  return {
    initialProcess: state.process,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    retrieveProcess: (process) => dispatch(updateProcess(process)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TBQueryProcess);
