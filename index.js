const express = require('express')

const app = express()

const PORT = 3000

app.get('/', (req, res) => {
    res.send('hello')
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