'use strict';

var mongoose = require('bluebird').promisifyAll(require('mongoose'));

var RequestSchema = new mongoose.Schema({
  name: String,
  info: String,
  active: Boolean
});

export default mongoose.model('Request', RequestSchema);
