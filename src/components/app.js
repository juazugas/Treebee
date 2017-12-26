import React, {Component} from 'react';
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
    console.log(`performQuery to ${server} ...`);
    this.setState({
      result : 'performing query ...'
    });
    setTimeout(() => {
      this.setState({
        result: 'performed query.'
      });
    }, 1500);
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
