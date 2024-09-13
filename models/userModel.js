const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
//   _id: {
//     type: mongoose.Schema.Types.ObjectId,
//     required: true
//   },
  EmpId: {
    type: Number,
    required: true
  },
  EmpFname: {
    type: String,
    required: true
  },
  EmpLname: {
    type: String,
    required: true
  },
  Department: {
    type: String,
    required: true
  },
  // Salary: {
  //   type: Number,
  //   required: true
  // }
});

module.exports = mongoose.model('adults', userSchema);
