const mongoose = require('mongoose')

const UserSchema = mongoose.Schema({
    first: {
        type: String,
        require: true
    },
    last: {
        type: String,
        require: true
    },
    gender: {
        type: String,
        require: true
    },
    Date: {
        type: Date,
        default: Date.now
    }

})

module.exports = mongoose.model('Users', UserSchema)