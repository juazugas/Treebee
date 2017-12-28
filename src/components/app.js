import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { updateQuery, updateProcess } from '../actions';
import TBRequest from '../elastic/request';
import TBHeader from './header';
import TBBody from './body';

export class TBApp extends Component {

  constructor(props) {
    super(props);
    this.state = {
      result: '',
    };
    this.performQuery = this.performQuery.bind(this);
  }

  performQuery(server) {
    let { query, process } = this.props;
    let request = new TBRequest();
    request.fetch(server, query, process)
      .then(response => {
        this.setState({
          result: response.data
        });
      })
      .catch(error => {
        this.setState({
          result: JSON.stringify(error, null, 2)
        });
      });

    this.setState({
      result : 'performing query ...'
    });
  }

  render () {
    const retrieve = {
      retrieveQuery: this.props.retrieveQuery,
      retrieveProcess: this.props.retrieveProcess,
      result: this.state.result
    };
    return (
      <div className="container-fluid">
        <TBHeader
        performQuery={this.performQuery}
        />
        <TBBody {...retrieve} />
      </div>
    );
  }
}

TBApp.propTypes = {
  retrieveQuery: PropTypes.func.isRequired,
  retrieveProcess: PropTypes.func.isRequired,
  query: PropTypes.string.isRequired,
  process: PropTypes.string.isRequired,
};

const mapStateToProps = state => {
  return {
    query: state.query,
    process: state.process,
  };
}

const mapDispatchToProps = dispatch => {
  return {
    retrieveQuery: (query) => dispatch(updateQuery(query)),
    retrieveProcess: (process) => dispatch(updateProcess(process)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(TBApp);
