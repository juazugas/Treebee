import React, {Component} from 'react';
import PropTypes from 'prop-types';

class TBHeader extends Component {

  constructor(props) {
    super(props);
    this.state = {
      server: '',
      performQuery: props.performQuery
    };
    this.onServerChange = this.onServerChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  onServerChange(event) {
    this.setState({
      server: event.target.value
    });
  }

  handleClick (e) {
    this.state.performQuery(this.state.server);
  }

  render() {
    return (
      <header className="tb__header">
        <input type="text" size="40" name="server"
        value={this.state.server}
        onChange={this.onServerChange}
        placeholder="http://...:9200"
        className="tb__input server" />
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


export default TBHeader;
