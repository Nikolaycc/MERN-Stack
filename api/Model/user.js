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
    email: {
        type: String,
        require: true 
    },
    pass: {
        type: String,
        require: true 
    },
    rooms: [{
        roomId: String,
        joinDate: {
            type: Date,
            default: Date.now
        }
    }],
    Date: {
        type: Date,
        default: Date.now
    }

})

module.exports = mongoose.model('Users', UserSchema)