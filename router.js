const stats = require('./controllers/stats')

module.exports = (app) => {
    app.get('/api/stats/weather', stats.weatherIndex)
}