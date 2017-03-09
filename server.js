const mosca = require('mosca')
const express = require("express")
const http = require('http')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const chalk = require('chalk')
const mongoose = require('mongoose')
const ip = require('ip')

const router = require('./router')

//DB Setup
mongoose.Promise = global.Promise;
let options = {
  server: {
    socketOptions: {
        autoReconnect: true,
        connectTimeoutMS: 1200000,
        socketTimeoutMS: 1200000
      }
    }
}
mongoose.connect('mongodb://localhost:27017/mqtt', options)
//App Setup
const app = express()

// app.use(morgan('combined')) //logowanie requestów
app.use(bodyParser.json()) //parsowanie req to json

const port = process.env.PORT || 8080;

const webpack = require('webpack')
const config = require('./webpack.config.js')
const compiler = webpack(config)

// app.use(require("webpack-dev-middleware")(compiler, {
//   noInfo: true, publicPath: config.output.publicPath
// }));

// app.use(require("webpack-hot-middleware")(compiler, {
//   log: console.log, heartbeat: 10 * 1000
// }));

router(app)

const server = http.createServer(app);

server.listen(port);
console.log(chalk.green('Server listening on: ' + ip.address() + ':' + port))

module.exports = server