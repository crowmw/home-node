const req = require('supertest')
// const expect = require('expect')

describe('Loading Express server', () => {
    var server
    
    beforeEach( () => {
      server =   require('../../index')
    })

    afterEach(() => {
        server.close()
    })

    it('responds to /', (done) => {
        req(server)
            .get('/')
            .expect(200, done)
    })

    it('404 everything else', (done) => {
        req(server)
            .get('/foo/bar')
            .expect(404, done)
    })
})