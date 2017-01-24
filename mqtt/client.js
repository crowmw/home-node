const Client = require('./../models/client')
const chalk = require('chalk')
const time = require('./../utils/getTime')

exports.clientConnected = (id) => {
    if(!id) return

    if(id.startsWith('react')) return

    const client = Client.findOne({clientId: id.toLowerCase()}, (err, data) => {
        if(err) {console.error(err)}
        
        if(!data){
            let newClient = new Client({
                clientId: id,
                name: id,
                connected: true,
                endpoints: [],
                lastConnect: new Date().toLocaleString(),
                lastDisconnect: null
            })

            newClient.save((err) => {
                if(err) {
                    console.error(err)
                    return
                }
            })
        }
        else
        {
            data.connected = true
            data.lastConnect = new Date().toLocaleString()
            data.save((err) => {
                if(err) {
                    console.error(err)
                    return
                }
            })
        }
        return console.log(chalk.gray(time() + ' - ') + chalk.cyan(id)+ '  '+chalk.green('Connected'))
    })
}

exports.clientDisconnected = (id) => {
    if(!id) return

    if(id.startsWith('react')) return

    const client = Client.findOne({clientId: id.toLowerCase()}, (err, data) => {
        if(err) {console.error(err)}
        
        if(data){
            data.connected = false
            data.lastDisconnect = new Date().toLocaleString()
            data.save((err) => {
                if(err) {
                    console.error(err)
                    return
                }
            })
        }
        return console.log(chalk.gray(time()+ ' - ') + chalk.cyan(id) + '  ' + chalk.red('Disconnected'))
    })
}