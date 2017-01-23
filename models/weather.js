const mongoose = require('mongoose')
const Schema = mongoose.Schema

const weatherSchema = new Schema({
    clientId: { type: String, lowercase: true },
    temperature: String,
    humidity: String,
    updated: Date
})

const ModelClass = mongoose.model('weather', weatherSchema)

module.exports = ModelClass