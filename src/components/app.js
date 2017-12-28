import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { updateQuery } from '../actions';
import TBRequest from '../elastic/request';
import TBHeader from './header';
import TBBody from './body';

export class TBApp extends Component {

  constructor(props) {
    super(props);
    this.state = {
      process:'',
      result: '',
    };
    this.retrieveProcess = this.retrieveProcess.bind(this);
    this.performQuery = this.performQuery.bind(this);
  }

  performQuery(server) {
    let { process} = this.state;
    let query = this.props.query;
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

  // retrieveQuery (query) {
  //   this.setState({ query });
  // }

  retrieveProcess (process) {
    this.setState({ process });
  }

  render () {
    const retrieve = {
      retrieveQuery: this.props.retrieveQuery,
      retrieveProcess: this.retrieveProcess,
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
  query: PropTypes.string.isRequired
};

const mapStateToProps = state => {
  return {
    query: state.query
  };
}

const mapDispatchToProps = dispatch => {
  return {
    retrieveQuery: (query) => dispatch(updateQuery(query))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(TBApp);
