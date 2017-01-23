const mongoose = require('mongoose')
const Schema = mongoose.Schema

const clientSchema = new Schema({
    clientId: { type: String, lowercase: true, index: true, unique: true },
    name: String,
    connected: Boolean,
    endpoints: [String],
    lastConnect: Date,
    lastDisconnect: Date,
})

const ModelClass = mongoose.model('client', clientSchema)

module.exports = ModelClass