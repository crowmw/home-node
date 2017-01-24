import mqtt from 'mqtt'

const options = {
    clientId: 'react'
}

const mqttClient = mqtt.connect('ws://localhost:8080', options)

export default mqttClient