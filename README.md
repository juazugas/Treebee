# Treebee 

Tool for query and process Elasticsearch responses.

## Development

- [Install Elasticsearch](https://www.elastic.co/guide/en/elasticsearch/reference/master/install-elasticsearch.html).  I did it with docker  [...](https://docs.docker.com/docker-for-mac/install/#install-and-run-docker-for-mac)

- Prototype (./prototype/index.html)
  Bootstrap + jquery 
  
  Run with: yarn run prototype
  
- React app 

- Entry point ./src/index.js

- Execute yarn start 
  Open http://localhost:3000 in your favourite browser and enter the query and the post-process code.
  
  Query samples : 
  ```json
  POST /index/_search
  {
    "query" :{
      "match_all" : {}
    }
  }
  ```
  
  Process samples : 
  ```javascript
  response.took
  ```
  
  or 
  
  ```javascript
  response.hits.hits.map(function(hit) {
    return hit._id 
  });
  ```

## Resources 

- [Ace Editor](https://ace.c9.io/)
- [react-ace](https://github.com/securingsincity/react-ace)
- [axios](https://github.com/axios/axios)
- [elasticsearch](https://elasticsearch.org)

## Other projects 

Sense
[Cerebro](https://github.com/lmenezes/cerebro)
Marvel
Kopf
Kibana
