const mqtt = require('mqtt')
const client = mqtt.connect('mqtt://localhost:1883')

client.on('connect', () => {
    console.log('Client connected!')
    client.publish('/home/hello', 'Hello World from test_client')
})

function loop(){
    setTimeout(function() {
        client.publish('/home/ping', 'PING!')
    }, 5000)
}

loop();
