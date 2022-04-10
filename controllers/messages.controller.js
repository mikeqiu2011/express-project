const path = require('path')

function postMessages(req, res) {  // used named function instead of error easy for debug
    console.log('updating messages');
}

function getMessages(req, res) {
    res.render('messages', {
        title: 'messages to my friends',
        friend: 'mike'
    })
    // console.log(__dirname);
    // res.sendFile(path.join(__dirname, '..', 'public', 'images', 'cumulus.jpeg'))
}

module.exports = {
    getMessages,
    postMessages
}