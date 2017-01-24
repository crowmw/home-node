import React, {Component} from 'react';
import Probe from './../probe'
import './style.scss'

class ProbesList extends Component {
    render() {
        return (
            <div className='ProbesList'>
                <Probe name='Probe1' temp='25' humi='32' />
                <Probe name='Probe2' temp='25' humi='32' />
                <Probe name='Probe3' temp='25' humi='32' />
            </div>
        );
    }
}

export default ProbesList;