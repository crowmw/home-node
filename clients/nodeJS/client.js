const mqtt = require('mqtt')
const client = mqtt.connect('mqtt://localhost:1883', {password: 'secret', username: 'alice'})

client.on('connect', () => {
    console.log('Client connected!')
    client.subscribe('alice/#')
    // client.subscribe('Alice/#')
    let weather = {
        temperature: 25.00,
        humidity: 35.00,
        name: 'nodeJS',
        updated: new Date().toLocaleString()
    }
    client.publish('alice/weather', JSON.stringify(weather))
    let weather1 = {
        temperature: 20.00,
        humidity: 30.00,
        name: 'nodeJS',
        updated: new Date().toLocaleString()
    }
    client.publish('Alice/weather', JSON.stringify(weather1))
    // client.publish('alice1/weather', JSON.stringify(weather1))
})
