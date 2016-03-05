'use strict';

var mongoose = require('bluebird').promisifyAll(require('mongoose'));

var RequestSchema = new mongoose.Schema({
  name: String,
  description: String,
  active: Boolean,
  imageUrl: {type: String, default: 'http://placehold.it/700x400' }
});

export default mongoose.model('Request', RequestSchema);
