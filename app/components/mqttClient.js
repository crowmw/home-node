import mqtt from 'mqtt'

const options = {
    clientId: 'react_'+ Math.random().toString(16).substr(2, 8)
}

const mqttClient = mqtt.connect('ws://192.168.1.58:8080', options)

export default mqttClient