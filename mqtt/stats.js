const Weather = require('./../models/weather')

exports.saveWeather = (payload) => {
    let json = JSON.parse(payload)
    if(!json) return

    const weather = new Weather({
        temperature: json.temperature,
        humidity: json.humidity,
        pressure: json.pressure,
        probe: json.probe,
        updated: json.updated
    })

    weather.save((err) => {
        if(err) { 
            console.error(err) 
            return
        }
    })
}