const express = require('express')
const messagesController = require('./controllers/messages.controller')
const friendsController = require('./controllers/friends.controller')

const app = express()
const PORT = 3000

// first middleware to calculate the time duration
app.use((req, res, next) => {
    const start = Date.now()
    next()

    // take action before returning the result to client
    const duration = Date.now() - start
    console.log(`${req.method} ${req.url} takes ${duration}ms`);
})

// second middleware to tell express to use json to parse body by default
// after that, we can use req.body
app.use(express.json())

// using router
const friendRouter = express.Router()
friendRouter.get('/friends', friendsController.getFriends)
friendRouter.get('/friends/:id', friendsController.getFriend)
friendRouter.post('/friends', friendsController.postFriend)
app.use(friendRouter)

app.get('/messages', messagesController.getMessages)
app.post('/messages', messagesController.postMessages)

app.listen(PORT, () => {
    console.log(`server is listening on port ${PORT}`);
})