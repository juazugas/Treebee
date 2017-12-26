import React, {Component} from 'react';
import PropTypes from 'prop-types';
import AceEditor from 'react-ace';
import 'brace/mode/json';
import 'brace/theme/github';

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
      <div className="row">
        <AceEditor
        mode="json"
        theme="github"
        name="tb-query"
        value={this.state.value}
        width="100%"
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
