const Weather = require('./../models/weather')

exports.fetchWeather = (req, res, next) => {
    let data = Weather.find({}, (err, data) => {
        if(err) {console.error(err)}
        res.send(data)
    })
}