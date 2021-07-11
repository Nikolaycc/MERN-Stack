const express = require('express')
const app = express()
// ? express module 

const mongoose = require('mongoose') // ? mongoDB Module
const bodyParser = require('body-parser') // ? Body-Parser Module
require('dotenv')

const UserRoute = require('./Router/user')
const RoomRoute = require('./Router/room')

app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.send('<h1>MSG API</h1>')
})

app.use('/user', UserRoute)

app.use('/room', RoomRoute)

app.get('/user', (res, req) => {
    res.send('Users <>')
})

// ? | MongoDB Conneciton                           ↓ ↓ your mongdb url ↓ ↓ 
mongoose.connect(process.env.DB_CONNECTION || 'mongodb://localhost:27017/msg', { useNewUrlParser: true } , { useUnifiedTopology: true },  () => console.log('connected!'))
 
// * localhost:9090
app.listen(9090)