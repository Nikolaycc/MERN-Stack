const express = require('express')
const { model } = require('mongoose')
const router = express.Router()
const UserModel = require('../Model/user')

// ? GET Method 
router.get('/', async (req, res) => {
    try{
        const user = await UserModel.find()
        res.json(user)
    }catch(err){
        res.json({ message: err })
    }
})

router.post('/', async (req, res) => {
    const newUser = new UserModel({
        first: req.body.first,
        last: req.body.last,
        gender: req.body.gender
    })
    try{
        const saveUser = await newUser.save()
        res.json(saveUser)
    }catch(err){
        res.json({ message: err })
    }
})

router.get('/:userId', async (res, req) => {
    try{
        const findUser = await UserModel.findById(req.params.userId)
        res.json(findUser)
    }catch(err){
        res.json({ message: err })
    }
})

router.delete('/:userId', async (res, req) => {
    try{
        const removeUser = await UserModel.remove({_id: req.params.userId})
        res.json(removeUser)
        console.log('Removed!')
    }catch(err){
        res.json({ message: err })
    }
})

module.exports = router