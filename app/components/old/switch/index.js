import React, {Component} from 'react'
import Switch from 'rc-switch'
import 'rc-switch/assets/index.css'
import './style.scss'

class RSwtich extends Component {
    constructor(props){
        super(props)
        this.handleToggle = this.handleToggle.bind(this)
    }

    handleToggle(e){
        if(e){
            this.props.onToggle(this.props.name, 1)
        }
        else{
            this.props.onToggle(this.props.name, 0)
        }
    }

    render() {
        return (
            <div className='Switch'>
                <span className='text'>{this.props.name}</span>
                <Switch onChange={(e)=>this.handleToggle(e)} checked={!!+this.props.value}/>
            </div>
        );
    }
}

RSwtich.propTypes = {
    name: React.PropTypes.string.isRequired,
    onToggle: React.PropTypes.func
}

export default RSwtich;