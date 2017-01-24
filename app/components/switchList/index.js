import React, {Component} from 'react';
import RSwitch from '../switch'
import './style.scss'

import mqtt from './../mqttClient'

class SwitchList extends Component {
    constructor(props){
        super(props)

        //testing
        this.state = {
            switches: [
                {name: 'Switch1', value: 1},
                {name: 'Switch2', value: 0},
                {name: 'Switch3', value: 1},
                {name: 'Switch4', value: 0},
                {name: 'Switch5', value: 1},
                {name: 'Switch6', value: 0}
            ]
        }

        let subs = []
        let switches = this.state.switches
        for(let s of switches){
            subs.push(s.name)
        }
        console.log(subs)

        mqtt.subscribe(subs)


        mqtt.on('message',(topic, message) => {
            let switches = this.state.switches
            for(let s of switches){
                if(s.name === topic){
                    s.value = message
                    break
                }
            }
            this.setState({switches})
        })

        this.handleToggleSwitch = this.handleToggleSwitch.bind(this)
    }

    handleToggleSwitch(button, value) {
        mqtt.publish(button, value, {}, (err) => {
            if(err) {
                console.error(err)
            } else {
                let switches = this.state.switches
                for(let s of switches){
                    if(s.name === button) {
                        s.value = value
                        break
                    }
                }
                this.setState({switches})
            }
            return
        })
    }

    render() {
        return (
            <div className='SwitchList'>
                {this.state.switches.map((s, index) => {
                    return <RSwitch key={index} name={s.name} value={s.value} onToggle={(button, value) => this.handleToggleSwitch(button, value)} />
                })}
            </div>
        );
    }
}

export default SwitchList;