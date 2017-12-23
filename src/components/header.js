import React, {Component} from 'react';

export default class TBHeader extends Component {

  constructor(props) {
    super(props);
    this.state = {
      server: ''
    };
    this.onServerChange = this.onServerChange.bind(this);
  }

  onServerChange(event) {
    this.setState({
      server: event.target.value
    });
  }

  render() {
    return (
      <header className="row">
        <input type="text" size="40" name="server"
               value={this.state.server}
               onChange={this.onServerChange}
               placeholder="http://...:9200" className="input-sm" />
        <button className="btn btn-sm action">
          Go
        </button>
      </header>
    );
  }
}
