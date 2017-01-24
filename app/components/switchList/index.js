import React, {Component} from 'react';
import RSwitch from '../switch'
import './style.scss'

import mqtt from './../mqttClient'

class SwitchList extends Component {
    constructor(props){
        super(props)

        this.handleToggleSwitch = this.handleToggleSwitch.bind(this)
    }

    handleToggleSwitch(button, value) {
        mqtt.publish('/switch/'+button, value)
    }

    render() {
        return (
            <div className='SwitchList'>
                <RSwitch name='Test1' onToggle={(button, value) => this.handleToggleSwitch(button, value)} />
                <RSwitch name='Test2' onToggle={(button, value) => this.handleToggleSwitch(button, value)} />
                <RSwitch name='Test3' onToggle={(button, value) => this.handleToggleSwitch(button, value)} />
                <RSwitch name='Test4' onToggle={(button, value) => this.handleToggleSwitch(button, value)} />
                <RSwitch name='Test5' onToggle={(button, value) => this.handleToggleSwitch(button, value)} />
                <RSwitch name='Test6' onToggle={(button, value) => this.handleToggleSwitch(button, value)} />
            </div>
        );
    }
}

export default SwitchList;