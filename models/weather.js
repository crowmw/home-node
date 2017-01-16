const mongoose = require('mongoose')
const Schema = mongoose.Schema

const weatherSchema = new Schema({
    temperature: String,
    humidity: String,
    pressure: String,
    probe: String,
    updated: Date
})

const ModelClass = mongoose.model('weather', weatherSchema)

module.exports = ModelClass