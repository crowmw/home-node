import React, {Component} from 'react';
import Probe from './../probe'
import './style.scss'

import mqtt from './../mqttClient'

class ProbesList extends Component {
    constructor(props){
        super(props)

        this.state = {
            probes: []
        }

        mqtt.subscribe('stat/#')

        mqtt.on('message',(topic, message) => {
            if(topic.includes('stat/')){
                let json = JSON.parse(message.toString())

                let probes = this.state.probes
                if(probes.length != 0){
                    for(let p of probes){
                        if(p.name !== json.name){
                            probes.push(json)
                            break
                        } else {
                            p.temperature = json.temperature
                            p.humidity = json.humidity
                            break
                        }
                    }
                } else {
                    probes.push(json)
                }
                this.setState({probes})
            }
        })
    }
    render() {
        let probes = this.state.probes.map((probe, i) => {
            return (
                <Probe key={i} name={probe.name} temp={probe.temperature} humi={probe.humidity} />
            )
        })

        return (
            <div className='ProbesList'>
                {probes}
            </div>
        );
    } 
}

export default ProbesList;