import React, {Component} from 'react';

export default class TBHeader extends Component {

  render() {
    return(
      <header>
        <input type="text" size="40" name="server" value="" placeholder="http://...:9200" className="input-sm" />
        <button className="btn btn-sm action">
          Go
        </button>
      </header>
    );
  }
}
