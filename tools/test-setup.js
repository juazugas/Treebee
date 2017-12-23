/* eslint-disable no-var*/

var enzyme = require('enzyme');
var Adapter = require('enzyme-adapter-react-16');

enzyme.configure({ adapter: new Adapter() });

process.env.NODE_ENV = 'test';

require('babel-register')();

// Disable webpack-specific features for tests since
// Mocha doesn't know what to do with them.
require.extensions['.css'] = function () {return null;};
require.extensions['.png'] = function () {return null;};
require.extensions['.jpg'] = function () {return null;};

// Configure JSDOM and set global variables
// to simulate a browser environment for tests.
var JSDOM = require('jsdom').JSDOM;

var exposedProperties = ['window', 'navigator', 'document'];

global.window =  new JSDOM('').window;
global.document = global.window.document;
Object.keys(document.defaultView).forEach((property) => {
  if (typeof global[property] === 'undefined') {
    exposedProperties.push(property);
    global[property] = document.defaultView[property];
  }
});

global.navigator = {
  userAgent: 'node.js'
};
