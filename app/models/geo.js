'use strict';

(function () {

  var mongoose = require('mongoose')
    , Schema = mongoose.Schema
    , ObjectId = Schema.ObjectId;

  var GeoSchema = new Schema({
    id: ObjectId,
    elevation: Number,
    loc: []
  });

  GeoSchema.index({ loc: '2d' });

  var Geo = mongoose.model("Geo", GeoSchema);

  module.exports = {
    create: Geo
  };

}());