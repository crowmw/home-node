const Client = require('./../models/client')

exports.fetchClients = (req, res, next) => {
    let data = Client.find({}, (err, data) => {
        if(err) {console.error(err)}
        res.send(data)
    })
}

exports.connectedClients = (req, res, next) => {
    let data = Client.find({connected: true}, (err, data) => {
        if(err) {console.error(err)}
        res.send(data)
    })
}

exports.clientById = (req, res, next) => {
    let data = Client.findOne({ clientId: req.params.id }, (err, data) => {
        if(err) {console.error(err)}
        res.send(data)
    })
}