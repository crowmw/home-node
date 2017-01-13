const mosca = require('mosca')
const express = require("express")
const http = require('http')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const chalk = require('chalk')
const mongoose = require('mongoose')
const ip = require('ip')

const mqttBroker = require('./mqtt/mqttBroker')

// var path = require("path")
// var bodyParser = require("body-parser")
// var mongodb = require("mongodb")

// app.use(morgan('combined'));

//DB Setup
mongoose.connect('mongodb://localhost:27017/home-node')

//App Setup
const app = express()

if(!process.env == 'test')
    app.use(morgan('combined')) //logowanie requestów

app.use(express.static(__dirname + '/public')) 
app.use(bodyParser.json()) //parsowanie req to json


const port = process.env.PORT || 8080;
const server = http.createServer(app);
server.listen(port);
if(!process.env == 'test')
    console.log(chalk.green('Server listening on: ' + ip.address() + ':' + port))

//MOSCA Setup
var broker = mqttBroker()

module.exports = {server, broker}