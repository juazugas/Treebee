import React, {Component} from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Autocomplete from 'react-autocomplete';
import { saveServer, performQuery } from '../actions';

export class TBHeader extends Component {

  constructor(props) {
    super(props);
    this.state = {
      server: ''
    };
    this.handleClick = this.handleClick.bind(this);
    this.setServer = this.setServer.bind(this);
    this.onServerChange = this.onServerChange.bind(this);
  }

  onServerChange(event) {
    this.setServer(event.target.value);
  }

  setServer(server) {
    this.setState({ server });
  }

  handleClick () {
    let {server} = this.state;
    if (server!=='') {
      this.props.performQuery(server);
      this.props.saveServer(server);
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

  shouldItemRender (server, value) {
    return (
      server.toLowerCase().indexOf(value.toLowerCase()) !== -1
    );
  }

  render() {
    const inputProps = {
      placeholder:'http://...:9200',
      size:40, className: 'tb__input server',
    };
    const wrapperStyle = {
      display:'inline-block',
      zIndex:10000,
      position:'relative'
    };

    return (
      <header className="tb__header">
        <Autocomplete
        wrapperStyle={wrapperStyle}
        value={this.state.server}
        inputProps={inputProps}
        onChange={this.onServerChange}
        items={this.props.servers}
        getItemValue={this.getItemValue}
        renderItem={this.renderItem}
        onSelect={this.setServer}
        shouldItemRender={this.shouldItemRender}
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
  performQuery: PropTypes.func.isRequired,
  saveServer: PropTypes.func.isRequired,
  servers: PropTypes.array.isRequired,
};

const mapStateToProps = state => {
  return {
    servers: state.servers,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    performQuery: (server) => dispatch(performQuery(server)),
    saveServer: (server) => dispatch(saveServer(server)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TBHeader);
