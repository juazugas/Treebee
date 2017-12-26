import axios from 'axios';

/**
  Request object.
  Perform queries to Elastic and processes the response.

  usage :
    var request = new TBRequest();
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
export default class TBRequest {

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
    let query = {
      method: 'POST',
      url: this.host+this.queryAction.replace(/^(POST|GET)/, '').trim(),
      data: this.queryDSL
    };
    return new Promise((resolve, reject) => {
      axios.post('/api/query', query)
        .then((response) => {
          let {data} = response;
          let result = (null!=this.process) ? this.processResponse(data) : data;
          return resolve({
            data: this.printResponse(result)
          });
        })
        .catch((status, data) => {
          console.log(status);
          reject(status + '-' + data);
        });
    });
  }

  processResponse (response) {
    if (null!==this.process && this.process!=='') {
      return eval(this.process);
    } else {
      return response;
    }
  }

  printResponse (data) {
    let result;
    if (!(data instanceof Object)) {
      try {
        result = JSON.parse(data);
        result = JSON.stringify(result,null,2);
      } catch (e) {
        result = data;
      }
    } else {
      result = data;
      result = JSON.stringify(result,null,2);
    }
    return result;
  }

}
