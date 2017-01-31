const mqtt = require('mqtt')
const client = mqtt.connect('mqtt://localhost:1883')

client.on('connect', () => {
    console.log('Client connected!')
    let weather = {
        temperature: 25.00,
        humidity: 35.00,
        name: 'nodeJS',
        updated: new Date().toLocaleString()
    }
    client.publish('stat/weather', JSON.stringify(weather))
    let weather1 = {
        temperature: 20.00,
        humidity: 30.00,
        name: 'nodeJS',
        updated: new Date().toLocaleString()
    }
    client.publish('stat/weather', JSON.stringify(weather1))
})
