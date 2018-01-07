import React, {Component} from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Autocomplete from 'react-autocomplete';
import { performQuery } from '../actions';

export class TBHeader extends Component {

  constructor(props) {
    super(props);
    this.state = {
      server: '',
      servers: [
        'http://127.0.0.1:9200',
        'http://elastic.co:9200',
      ],
    };
    this.handleClick = this.handleClick.bind(this);
    this.setServer = this.setServer.bind(this);
    this.onServerChange = this.onServerChange.bind(this);
    this.getServers = this.getServers.bind(this);
  }

  onServerChange(event) {
    this.setServer(event.target.value);
  }

  setServer(server) {
    this.setState({ server });
  }

  getServers () {
    return this.state.servers;
    /*this.state.servers.filter((server) => {
      return this.state.server != server;
    }); */
  }

  handleClick () {
    console.log(this.state);
      this.props.performQuery(this.state.server);
      this.setState({
        servers : [...this.state.servers, this.state.server]
      });
    if (this.state.server!=='') {
    }
  }

  renderItem (server) {
    return (
      <div
      className="tb__item server"
      key={server}>
        {server}
      </div>
    );
  }

  getItemValue(server) {
    return server;
  }

  render() {
    const inputProps = {
      placeholder:'http://...:9200',
      size:40,
      className: 'tb__input server',
    };

    return (
      <header className="tb__header">
        <Autocomplete
        wrapperStyle={{display:'inline-block', zIndex:10000, position:'relative'}}
        value={this.state.server}
        inputProps={inputProps}
        onChange={this.onServerChange}
        items={this.state.servers}
        getItemValue={this.getItemValue}
        renderItem={this.renderItem}
        onSelect={this.setServer}
        />
        <button
        onClick={this.handleClick}
        className="tb__button action">
          Go
        </button>
      </header>
    );
  }
}

TBHeader.propTypes = {
  performQuery: PropTypes.func.isRequired
};

const mapDispatchToProps = dispatch => {
  return {
    performQuery: (server) => dispatch(performQuery(server)),
  };
};

export default connect(null, mapDispatchToProps)(TBHeader);
