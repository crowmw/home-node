const mqtt = require('mqtt')
const client = mqtt.connect('mqtt://localhost:1883')
const getTime = require('./../../utils/getTime')

client.on('connect', () => {
    console.log('Client connected!')
    let weather = {
        temperature: 25.00,
        humidity: 35.00,
        pressure: 990,
        probe: 'nodeJS',
        updated: new Date().toLocaleString()
    }
    client.publish('/stats/weather', JSON.stringify(weather))
})
