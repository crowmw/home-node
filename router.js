const stats = require('./controllers/stats')
const path = require('path')
module.exports = (app) => {
    app.get('/', (req, res) => { res.sendFile(__dirname + '/public/index.html') })

    app.get('/api/stats/weather', stats.weatherIndex)
}