const req = require('supertest')
const mqtt = require('mqtt')
const expected = require('expect')

describe('Loading Express server', () => {
    var server
    var broker

    beforeEach( () => {
        var run = require('../../index')
        server = run['server']
        broker = run['broker']
    })

    afterEach(() => {
        broker.close()
        server.close()
    })

    it('Should responds to /', (done) => {
        req(server)
            .get('/')
            .expect(200, done)
    })

    it('Should respond 404 to everything else', (done) => {
        req(server)
            .get('/foo/bar')
            .expect(404, done)
    })

    it('Should have mqtt broker running', () => {
        var client = mqtt.connect('mqtt://localhost:1883')
        expected(client).toExist()
        client.end()
    })

    it('Should recieve mqtt publishes', () => {
        broker.on('published', function(packet, client){
            expected(packet.payload.toString()).toEqual('foo-bar')
        })

        var client = mqtt.connect('mqtt://localhost:1883')
        client.publish('/home/hello', 'foo-bar')
        client.end(() => {console.log('close')})
    })
})