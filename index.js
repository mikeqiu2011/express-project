const express = require('express')

const app = express()

const PORT = 3000

const friends = [
    {
        id: 1,
        name: 'mike'
    },
    {
        id: 2,
        name: 'kevin'
    },
    {
        id: 3,
        name: 'frank'
    },
]

// first middleware to calculate the time duration
app.use((req, res, next) => {
    const start = Date.now()
    next()

    // take action before returning the result to client
    const duration = Date.now() - start
    console.log(`${req.method} ${req.url} takes ${duration}ms`);
})

app.get('/friends', (req, res) => {
    res.json(friends)
})

// second middleware to tell express to use json to parse body by default
// after that, we can use req.body
app.use(express.json())

app.get('/friends/:id', (req, res) => {
    const id = req.params.id
    const friend = friends.filter(friend => friend.id == id)[0]

    if (friend) {
        res.json(friend)
    } else {
        res.status(404).json({
            error: 'friend does not exist'
        })
    }
})

app.post('/friends', (req, res) => {
    console.log(req.body);
    const newFriend = {
        name: req.body.name,
        id: friends.length + 1
    }
    friends.push(newFriend)
    res.status(201).send(newFriend)
})

app.get('/user', (req, res) => {  // express auto set the Content-Type
    res.send({
        id: 1,
        name: 'mike'
    })
})

app.get('/messages', (req, res) => {
    res.send('<h1>hello user</h1>')
})

app.post('/messages', (req, res) => {
    console.log('updating messages');
})

app.listen(PORT, () => {
    console.log(`server is listening on port ${PORT}`);
})