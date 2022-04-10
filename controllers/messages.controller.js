const path = require('path')

function postMessages(req, res) {  // used named function instead of error easy for debug
    console.log('updating messages');
}

function getMessages(req, res) {
    console.log(__dirname);
    res.sendFile(path.join(__dirname, '..', 'public', 'cumulus.jpeg'))
}

module.exports = {
    getMessages,
    postMessages
}