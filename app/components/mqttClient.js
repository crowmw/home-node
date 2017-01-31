import mqtt from 'mqtt'
import ip from 'ip'

const options = {
    clientId: 'react_'+ Math.random().toString(16).substr(2, 8)
}

const mqttClient = mqtt.connect('ws://'+location.host, options)

export default mqttClient