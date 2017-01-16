const mosca = require('mosca')
const express = require("express")
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
app.use(express.static(__dirname + '/public')) 
app.use(bodyParser.json()) //parsowanie req to json
router(app)

const port = process.env.PORT || 8080;
const server = http.createServer(app);
server.listen(port);

console.log(chalk.green('Server listening on: ' + ip.address() + ':' + port))

//MOSCA Setup
mqttBroker()

module.exports = server