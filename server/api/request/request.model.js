'use strict';

var mongoose = require('bluebird').promisifyAll(require('mongoose'));

var RequestSchema = new mongoose.Schema({
  name: String,
  description: String,
  active: Boolean,
  imageUrl: String
});

export default mongoose.model('Request', RequestSchema);
