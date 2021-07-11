const mongoose = require('mongoose')

const RoomSchema = mongoose.Schema({
    roomName: {
        type: String,
        require: true
    },
    roomAdmin: {
        type: String,
        require: true
    },
    roomUsers: [{
        userId: String,
        joinDate: { type: Date, default: Date.now },
    }],
    roomMsg: [{
        userId: String,
        message_line: String,
        created_at: { type: Date, default: Date.now }
    }],
    Date: {
        type: Date,
        default: Date.now
    }

})

module.exports = mongoose.model('Rooms', RoomSchema)