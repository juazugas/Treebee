import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { updateQuery, updateProcess, performQuery } from '../actions';
import TBRequest from '../elastic/request';
import TBHeader from './header';
import TBBody from './body';

export class TBApp extends Component {

  constructor(props) {
    super(props);
    this.performQuery = this.performQuery.bind(this);
  }

  performQuery(server) {
    let { query, process } = this.props;
    this.props.performQuery(server, query, process);
  }

  render () {
    const retrieve = {
      retrieveQuery: this.props.retrieveQuery,
      retrieveProcess: this.props.retrieveProcess,
      result: this.props.result
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
  performQuery: PropTypes.func.isRequired,
  query: PropTypes.string.isRequired,
  process: PropTypes.string.isRequired,
  result: PropTypes.string.isRequired,
};

const mapStateToProps = state => {
  return {
    query: state.query,
    process: state.process,
    result: state.result,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    retrieveQuery: (query) => dispatch(updateQuery(query)),
    retrieveProcess: (process) => dispatch(updateProcess(process)),
    performQuery: (server, query, process) => dispatch(performQuery(server, query, process)),
  };
};

const VisibleTBApp = connect(mapStateToProps, mapDispatchToProps)(TBApp);

export default VisibleTBApp;
