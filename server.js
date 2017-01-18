const mosca = require('mosca')
const express = require("express")
const cors = require('cors')
const http = require('http')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const chalk = require('chalk')
const mongoose = require('mongoose')
const ip = require('ip')

const router = require('./router')
const mqttBroker = require('./mqtt/mqttBroker')

//DB Setup
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/home-node')

//App Setup
const app = express()

app.use(morgan('combined')) //logowanie requestów
// app.use(express.static(__dirname + '/public')) 
app.use(bodyParser.json()) //parsowanie req to json

const port = process.env.PORT || 8080;

if(process.env.NODE_ENV !== 'production') {
    const webpack = require('webpack')
    const config = require('./webpack.config.js')
    const compiler = webpack(config)

  app.use(require("webpack-dev-middleware")(compiler, {
    noInfo: true, publicPath: config.output.publicPath
  }));

  app.use(require("webpack-hot-middleware")(compiler, {
    log: console.log, path: '/__webpack_hmr', heartbeat: 10 * 1000
  }));
}

router(app)
const server = http.createServer(app);
server.listen(port);

console.log(chalk.green('Server listening on: ' + ip.address() + ':' + port))

//MOSCA Setup
mqttBroker()

module.exports = server