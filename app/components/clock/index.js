import React, {Component} from 'react';
import moment from 'moment'
import { connect } from 'react-redux'

import './../../assets/styles/fonts.scss'
import './style.scss'

class Clock extends Component {
    constructor(props) {
        super(props)
        var now = moment().format('hh:mm:ss')
        this.state = {time: now}
    }

    tick() {
        var now = moment().format('hh:mm:ss')
        this.setState({time: now})
    }
    
    componentDidMount(){
        setInterval(() => {
            this.tick()
        }, 1000);
    }
    render() {
        return (
            <div className='Clock'>
                <h4>{this.state.time}</h4>                
            </div>
        );
    }
}

export default Clock;