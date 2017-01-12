const mosca = require('mosca')
const chalk = require('chalk')
const time = require('../utils/getTime')

module.exports = function(app) {
    const database = {
        type: 'mongo',
        url: 'mongodb://localhost:27017/home-node',
        pubsubCollection: 'mqttBroker',
        mongo: {}
    }

    const brokerPort = 1883
    const brokerSettings = {
        port: brokerPort,
        backend: database
    }

    var broker = new mosca.Server(brokerSettings)
    broker.on('ready', brokerReady)

    broker.on('clientConnected', function(client) {
        console.log(chalk.gray(time() + ' - ') + chalk.cyan(client.id)+ '  '+chalk.green('Connected'))
    })

    broker.on('clientDisconnected', function(client) {
            console.log(chalk.gray(time()+ ' - ') + chalk.cyan(client.id) + '  ' + chalk.red('Disconnected'))
    })

    broker.on('published', function(packet, client){
        switch(packet.topic) {
            default:
                console.log(chalk.gray(time()+ ' - ') + chalk.blue(packet.topic)+'  ' + packet.payload.toString())
        }
    })

    function brokerReady(){
        console.log(chalk.cyan('MQTT Broker running on: ' + brokerPort))
    }

}