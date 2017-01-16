const stats = require('./controllers/stats')

module.exports = (app) => {
    app.get('/api/stats/weather', stats.weatherIndex)
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'public','index.html'))
    })
}