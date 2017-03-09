const authentication = require('./controllers/authentication')
const passportService = require('./services/passport')
const path = require('path')
const passport = require('passport')

const requireAuth = passport.authenticate('jwt', { session: false })
const requireSignin = passport.authenticate('local', { session: false })

module.exports = (app) => {
    app.get('/', (req, res) => { res.sendFile(__dirname + '/public/index.html') })

    app.post('/signin', requireSignin, authentication.signin)
    app.post('/signup', authentication.signup)
}