const express = require('express')
const path = require('path')

const friendsRouter = require('./routes/friends.router')
const messagesRouter = require('./routes/messages.router')

const PORT = 3000
const app = express()
app.set('view engine', 'hbs')  // use Handlebars as our view template engine
app.set('views', path.join(__dirname, 'views'))


// first middleware to calculate the time duration
app.use((req, res, next) => {
    const start = Date.now()
    next()

    // take action before returning the result to client
    const duration = Date.now() - start
    // now we seperate router into individual folder, the req.url will be "/", so we
    // have to add base.url which is the mounting route
    console.log(`${req.method} ${req.baseUrl}${req.url} takes ${duration}ms`);
})

// render html template
app.get('/', (req, res) => {
    res.render('index', {
        title: 'hello home page',
        caption: 'my friend good view'
    })
})

// serve static content middleware
// for big application, static files best served at Akamai or AWS cloudfront
app.use('/site', express.static(path.join(__dirname, 'public')))

// second middleware to tell express to use json to parse body by default
// after that, we can use req.body
app.use(express.json())

// using router
app.use('/friends', friendsRouter) // mounting friend router onto App
app.use('/messages', messagesRouter)

app.listen(PORT, () => {
    console.log(`server is listening on port ${PORT}`);
})