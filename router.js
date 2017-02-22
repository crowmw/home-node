// const stat = require('./controllers/stat')
// const client = require('./controllers/client')
const path = require('path')
module.exports = (app) => {
    app.get('/', (req, res) => { res.sendFile(__dirname + '/public/index.html') })

    // app.get('/api/stat', stat.fetchWeather)
    // app.get('/api/stat/now', stat.fetchNow)

    // app.get('/api/client/connected', client.connectedClients)
    // app.get('/api/client', client.fetchClients)
    // app.get('/api/client/(:id)', client.clientById)
}