import React, {Component} from 'react';
import FontAwesome from 'react-fontawesome'

import './style.scss'

class Home extends Component {
    render() {
        return (
            <div className='Home'>
                <div className='home-icon'>
                    <FontAwesome name='home' />
                </div>
                <div className='content'>
                    <div className='temp-data'>
                        <span className='data'>21°C</span>
                        <span className='description'>Temperatura</span>
                    </div>
                    <div className='humi-data'>
                        <span className='data'>33%</span>
                        <span className='description'>Wilgotność</span>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;