import React, {Component} from 'react';
import FontAwesome from 'react-fontawesome';

import './style.scss'

class Probe extends Component {
    render() {
        return (
            <div className='Probe'>
                
                <span className='probe-name'><FontAwesome name='microchip' /> {this.props.name}</span>
                <div className='probe-container'>
                    <span className='probe-temp'>{this.props.temp}°C</span>
                    <span className='probe-humi'>{this.props.humi}%</span>
                </div>
            </div>
        );
    }
}

export default Probe;