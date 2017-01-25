const mosca = require('mosca')
const chalk = require('chalk')
const ip = require('ip')
const moment = require('moment')
const stat = require('./stat')
const client = require('./client')

module.exports = (app) => {
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

    let broker = new mosca.Server(brokerSettings)
    broker.attachHttpServer(app)

    broker.on('ready', brokerReady)

    broker.on('clientConnected', clientConnected)

    broker.on('clientDisconnected', clientDisconnected)

    broker.on('published', function(packet, client){
        console.log(chalk.gray(moment().format('DD.MM.YYYY hh:mm:ss')+ ' - ') + chalk.blue(packet.topic)+'  ' + packet.payload.toString())
        switch(packet.topic) {
            case '/stat/weather':
                stat.saveWeather(packet.payload.toString())
                break
        }
    })

    function brokerReady() {
        console.log(chalk.cyan('MQTT Broker running on: ' + ip.address() + ':' + brokerPort))
    }

    function clientConnected(clientId) {
        client.clientConnected(clientId.id)
    }

    function clientDisconnected(clientId) {
        client.clientDisconnected(clientId.id)
    }
}  