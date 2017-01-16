const mosca = require('mosca')
const chalk = require('chalk')
const ip = require('ip')
const time = require('../utils/getTime')
const stats = require('./stats')

module.exports = () => {
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

    broker.on('clientConnected', clientConnected)

    broker.on('clientDisconnected', clientDisconnected)

    broker.on('published', function(packet, client){
        console.log(chalk.gray(time()+ ' - ') + chalk.blue(packet.topic)+'  ' + packet.payload.toString())
        switch(packet.topic) {
            case '/stats/weather':
                stats.saveWeather(packet.payload.toString())
                break
        }
    })

    function brokerReady(){
        console.log(chalk.cyan('MQTT Broker running on: ' + ip.address() + ':' + brokerPort))
    }

    function clientConnected(client){
        console.log(chalk.gray(time() + ' - ') + chalk.cyan(client.id)+ '  '+chalk.green('Connected'))
    }

    function clientDisconnected(client){
        console.log(chalk.gray(time()+ ' - ') + chalk.cyan(client.id) + '  ' + chalk.red('Disconnected'))
    }
}  