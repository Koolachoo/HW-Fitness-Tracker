var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var fitness = new Schema({

});

const Fit = mongoose.model("Fit", fitness);

module.exports = Fit;