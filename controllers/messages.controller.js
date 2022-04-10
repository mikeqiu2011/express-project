function postMessages(req, res) {  // used named function instead of error easy for debug
    console.log('updating messages');
}

function getMessages(req, res) {
    res.send('<h1>hello user</h1>')
}

module.exports = {
    getMessages,
    postMessages
}