const express = require('express')

const friendsRouter = require('./routes/friends.router')
const messagesRouter = require('./routes/messages.router')

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
app.use('/friends', friendsRouter) // mounting friend router onto App
app.use('/messages', messagesRouter)

app.listen(PORT, () => {
    console.log(`server is listening on port ${PORT}`);
})