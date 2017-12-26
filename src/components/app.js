import React, {Component} from 'react';
import TBRequest from '../elastic/request';
import TBHeader from './header';
import TBBody from './body';

class TBApp extends Component {

  constructor(props) {
    super(props);
    this.state = {
      query: '',
      process:'',
      result: '',
    };
    this.retrieveQuery = this.retrieveQuery.bind(this);
    this.retrieveProcess = this.retrieveProcess.bind(this);
    this.performQuery = this.performQuery.bind(this);
  }

  performQuery(server) {
    let {query, process} = this.state;
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

  retrieveQuery (query) {
    this.setState({ query });
  }

  retrieveProcess (process) {
    this.setState({ process });
  }

  render () {
    const {query,process} = this.state;
    const retrieve = {
      retrieveQuery: this.retrieveQuery,
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

export default TBApp;
