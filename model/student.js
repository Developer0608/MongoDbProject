const mongoose = require('mongoose');
const {ObjectId} = mongoose.Schema.Types;

const studentSchema = new mongoose.Schema({
    Name : {
        type: String,
        require: true
    },
});

const StudentModel = mongoose.model("student", studentSchema);

module.exports = StudentModel;