import React, {Component} from 'react';
import PropTypes from 'prop-types';
import AceEditor from 'react-ace';
// import 'brace/mode/json';
import '../editor/mode-sense';
import 'brace/theme/textmate';

class TBQuery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      retrieveQuery: props.retrieveQuery,
      editorOptions: props.editorOptions,
      value : ''
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
  retrieveQuery: PropTypes.func.isRequired
};

export default TBQuery;
