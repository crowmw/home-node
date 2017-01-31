const Weather = require('./../models/weather')

exports.fetchWeather = (req, res, next) => {
    let data = Weather.find({}, (err, data) => {
        if(err) {console.error(err)}
        res.send(data)
    })
}

exports.fetchNow = (req, res, next) => {
    let data = Weather.collection.distinct('probe', (err, result) => {
        if(err) { console.error(err) }


        let resp = []
        for(let probe of result){
            Weather.findOne({probe: probe}, {}, { sort: {'updated': -1 }}, (err, r) => {
                if(err) { console.error(err) }
                res.send(r)
                resp.push(r)
            })
        }
        // res.send(resp)
        // var resp = result.map((probe, i) => {
        //     return Weather.findOne({probe: probe}, {}, { sort: {'updated': -1 }}, (err, result) => {
        //         if(err) { console.error(err) }
        //         return result
        //     })
        // })

        // res.send(resp);
        // let d = Weather.findOne({probe: { $in: result }}, {}, { sort: {'updated': -1 } }, (err, result) => {

        //     res.send(result)
        // })
    })
}