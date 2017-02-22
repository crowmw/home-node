import React, {Component} from 'react';
import FontAwesome from 'react-fontawesome'

import './style.scss'

class Climate extends Component {
    render() {
        return (
            <div className='Climate'>
                <div className='climate-icon'>
                    <FontAwesome name={this.props.iconName} size='5x'/>
                </div>
                <div className='content'>
                    <div className='temp-data'>
                        <span className='data'>{this.props.temp}°C</span>
                        <span className='description'>Temperatura</span>
                    </div>
                    <div className='humi-data'>
                        <span className='data'>{this.props.humi}%</span>
                        <span className='description'>Wilgotność</span>
                    </div>
                </div>
            </div>
        );
    }
}

Climate.propTypes = {
    iconName: React.PropTypes.string.isRequired,
    temp: React.PropTypes.string.isRequired,
    humi: React.PropTypes.string.isRequired
}

export default Climate;