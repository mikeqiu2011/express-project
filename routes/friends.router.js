const express = require('express')
const friendsRouter = express.Router()

const friendsController = require('../controllers/friends.controller')

friendsRouter.use((req, res, next) => {
    console.log('ip address is:', req.ip);
    next()
})


friendsRouter.get('/', friendsController.getFriends)
friendsRouter.get('/:id', friendsController.getFriend)
friendsRouter.post('/', friendsController.postFriend)

module.exports = friendsRouter