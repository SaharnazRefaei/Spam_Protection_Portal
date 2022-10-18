const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ReportSchema = new Schema({
  id: {
    type: String
  },
  type: {
    type: String
  },
  state: {
    type: String
  },
  message: {
    type: String
  }
});

module.exports = mongoose.model('report', ReportSchema);
