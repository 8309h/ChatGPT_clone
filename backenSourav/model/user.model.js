const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name: { type: String, require: true },
    email: { type: String, require: true },
    password: { type: String, require: true },
    age: { type: Number, require: true },
    city: { type: String, require: true },
    gender: { type: String, require: true },

}, {
    versionKey: false
})

const UserModel = mongoose.model('user', userSchema);

module.exports = { UserModel };

/**
 name: '',
        email: '',
        password: '',
        city: '',
        age: '',
        gender: '',
 */