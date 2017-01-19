const req = require('supertest')
const mqtt = require('mqtt')
const stats = require('./../../mqtt/stats')

describe('Loading Express server', () => {
    var server

    beforeEach( () => {
        server = require('../../server')
    })

    afterEach(() => {
        server.close()
    })

    it('Should responds to /', (done) => {
        req(server)
            .get('/')
            .expect(200, done)
    })

    // it('Should respond 404 to everything else', (done) => {
    //     req(server)
    //         .get('/foo/bar')
    //         .expect(404, done)
    // })

    // it('Should MQTT Broker run', () => {
    //     broker.
    // })

    // it('Should MQTT Broker recieve clients publishes', () => {
    //     broker.on('published', function(packet, client){
    //         // expected(packet.payload.toString()).toEqual('foo-bar')
    //     })

    //     var client = mqtt.connect('mqtt://localhost:1883')
    //     client.publish('/home/hello', 'foo-bar')
    //     client.end(() => {console.log('close')})
    // })
})