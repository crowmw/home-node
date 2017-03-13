const axios = require('axios')
const chalk = require('chalk')
const moment = require('moment')

exports.authenticate = function(client, username, password, callback){
    axios.post('http://192.168.1.58:8080/signin', {
        email: username,
        password: password.toString()
    })
    .then((response) =>{
        console.log(chalk.gray(moment().format('DD.MM.YYYY hh:mm:ss')+ ' - ') + chalk.green('AUTHENTICATED')+'  ' + username)
        client.user = username
        client.topic = response.data.topic
        callback(null, true)
    })
    .catch((error) => {
        console.log(chalk.gray(moment().format('DD.MM.YYYY hh:mm:ss')+ ' - ') + chalk.red('AUTHENTICATION_FAILED')+'  ' + username + ' '+ password.toString())
        callback(error, false)
    })
}

exports.authorizePublish = function(client, topic, payload, callback){
    callback(null, client.topic == topic.split('/')[0])
}

exports.authorizeSubscribe = function(client, topic, callback){
    callback(null, client.topic == topic.split('/')[0])
}