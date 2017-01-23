import React, {Component} from 'react'
import Switch from 'rc-switch'
import 'rc-switch/assets/index.css'
import './style.scss'

class RSwtich extends Component {
    render() {
        return (
            <div className='Switch'>
                <span className='text'>{this.props.text}</span>
                <Switch />
            </div>
        );
    }
}

RSwtich.propTypes = {
    text: React.PropTypes.string.isRequired
}

export default RSwtich;