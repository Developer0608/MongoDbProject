const mongoose = require('mongoose');

class StudentRepo {
    save(student) {
        mongoose.save(student);
    }
}