import React, {Component} from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import AceEditor from 'react-ace';
import 'brace/theme/textmate';
import '../editor/mode-sense';
import { updateQuery } from '../actions';

const defaultProps = {
  initialQuery:'',
};

export class TBQuery extends Component {
  constructor(props = defaultProps) {
    super(props);
    this.state = {
      retrieveQuery: props.retrieveQuery,
      editorOptions: props.editorOptions,
      value : props.initialQuery,
    };
    this.onChangeQuery = this.onChangeQuery.bind(this);
  }

  onChangeQuery (value) {
    this.setState({
      value
    });
    this.state.retrieveQuery(value);
  }

  render() {
    const options = Object.assign({
      $blockScrolling: Infinity,
      showLineNumbers: true
    }, this.state.editorOptions);
    return (
      <div className="tb__editor query">
        <AceEditor
        mode="sense"
        theme="textmate"
        name="tb-query"
        value={this.state.value}
        width="100%"
        height="100%"
        showPrintMargin
        showGutter
        highlightActiveLine
        onChange={this.onChangeQuery}
        editorProps={options}
        />
      </div>
    );
  }
}

TBQuery.propTypes = {
  editorOptions: PropTypes.object,
  retrieveQuery: PropTypes.func.isRequired,
  initialQuery: PropTypes.string.isRequired,
};

const mapStateToProps = state => {
  return {
    initialQuery : state.query,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    retrieveQuery: (query) => dispatch(updateQuery(query)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TBQuery);
