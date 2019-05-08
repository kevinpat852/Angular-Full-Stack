const mongoose = require('mongoose');

const dataSchema = mongoose.Schema({
  stageName: {type: String, required: true, unique: true},
  currentLabel: {type: String, required: true, unique: true},
  yearsActive: {type: String, required: true},
  topSongs: {type: String, required: true},
  wikiLink: {type: String, required: true}
});

module.exports = mongoose.model('Data', dataSchema);
