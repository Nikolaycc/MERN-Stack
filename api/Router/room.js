const express = require('express')
const { model } = require('mongoose')
const router = express.Router()
const RoomModel = require('../Model/room.js')

router.get('/', async (req, res) => {
    try{
        const Room = await RoomModel.find()
        res.json(Room)
    }catch(err){
        res.json({ message: err })
    }
})

router.get('/id/:roomId', async (req, res) => {
    try{
        const findRoom = await RoomModel.findById({_id: req.params.roomId})
        res.json(findRoom)
    }catch(err){
        res.json({ message: err })
    }
})

router.post('/', async (req, res) => {
    const newRoom = new RoomModel({
        roomName: req.body.roomName,
        roomAdmin: req.body.roomAdmin,
        roomUsers: req.body.roomUsers,
        roomMsg: req.body.roomMsg
    })
    try{
        const saveRoom = await newRoom.save()
        res.json(saveRoom)
    }catch(err){
        res.json({ message: err })
    }
}) 

module.exports = router