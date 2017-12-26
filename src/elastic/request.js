import axios from 'axios';

/**
  Request object.
  Perform queries to Elastic and processes the response.

  usage :
    Request request = new Request();
    request.fetch('http://localhost:9200',
          query, // POST /index/_search..{...}
          process)
      .then((response) => {
        result = response.data;
      })
      .catch((status) => {
        if(status.error) {
          console.log(status.message);
        }
      });
 */
export default class Request {

  constructor(opts = {}) {
    this.options = opts;
    this.query = '';
    this.queryAction = '';
    this.queryDSL = '';
    this.process = '';
    this.host = '';
  }

  fetch (host,query,process) {
    let promise;
    if(this.parseHost(host) && this.parseQuery(query) && this.parseProcess(process)) {
      promise = this.submitQuery();
    } else {
      promise = Promise.reject({
        error: true,
        message: this.errorMessage
      });
      this.errorMessage = '';
    }
    return promise;
  }

  parseHost (host = '') {
    let server = host.trim();
    if (server.match(/^(https?\:)\/\/(([^:\/?#]*)(?:\:([0-9]+))?)/)) {
      this.host = server;
      return true;
    } else {
      this.errorMessage = `invalid host ${server}`;
      return false;
    }
  }

  parseQuery (query = '') {
    let queryText = query.trim();
    if (queryText.match(/^[ \t]*(POST|GET) ?.*\/_search\/?/)) {
      this.queryAction = queryText.substring(0, queryText.indexOf('\n'));
      try {
        this.queryDSL = queryText.substring(this.queryAction.length+1).trim();
        if (this.queryDSL.length > 0) {
          JSON.parse(this.queryDSL);
        }
        return true;
      } catch(e) {}
    }
    this.errorMessage = `invalid query ${query}`;
    return false;
  }

  parseProcess (process = '') {
    this.process = process.trim();
    return true;
  }

  submitQuery () {
    return new Promise((resolve) => setTimeout(() => {
      resolve({
        data: 'performed query.'
      });
    },500));
  }

}
