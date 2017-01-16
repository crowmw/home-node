const Weather = require('./../models/weather')

exports.weatherIndex = (req, res, next) => {
    var data = Weather.find({}, (err, data) => {
        if(err) {console.error(err)}
        res.send(data)
    })
}