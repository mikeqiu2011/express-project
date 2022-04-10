const friends = require('../models/friends.model')

function postFriend(req, res) {
    console.log(req.body);
    if (!req.body.name) {
        return res.status(400).json({ error: 'name must be provided' })
    } // you need to return immediately, otherwise will get error of "Error [ERR_HTTP_HEADERS_SENT]: Cannot set headers after they are sent to the client"

    const newFriend = {
        name: req.body.name,
        id: friends.length + 1
    }
    friends.push(newFriend)
    res.status(201).json(newFriend)
}

function getFriends(req, res) {
    res.json(friends)
}

function getFriend(req, res) {
    const id = req.params.id
    const friend = friends.filter(friend => friend.id == id)[0]

    if (friend) {
        res.json(friend)
    } else {
        res.status(404).json({
            error: 'friend does not exist'
        })
    }
}

module.exports = {
    postFriend,
    getFriend,
    getFriends
}