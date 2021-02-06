const express = require('express')
const app = express()
// ? express module 

const mongoose = require('mongoose') // ? mongoDB Module
const bodyParser = require('body-parser') // ? Body-Parser Module
require('dotenv')

const UserRoute = require('./Router/user')

app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.send('<h1>Hello</h1>')
})

app.use('/user', UserRoute)

app.get('/user', (res, req) => {
    res.send('Users <>')
})

// ? | MongoDB Conneciton                           ↓ ↓ your mongdb url ↓ ↓ 
mongoose.connect(process.env.DB_CONNECTION || 'mongodb://localhost:27017/hello', () => console.log('connect'))
 
// * localhost:9090
app.listen(9090)