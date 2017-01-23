import React, {Component} from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import * as action from './../actions/index'

import Banner from './banner'
import Clock from './clock'
import Climate from './climate'
// import Home from './home'
import RSwitch from './switch'
import SwitchList from './switchList'

import './../assets/styles/style.scss'
import './style.scss'

class App extends Component {
    componentWillMount(){
        console.log(this.props)
        this.props.fetchWeather()
    }

    render() {
        return (
            <div className='App'>
                <Banner text="IoT Home" />
                <Clock />
                <div className='climate-content'>
                    <Climate iconName='sun-o' temp='-10' humi='15'/>
                    <Climate iconName='home' temp='22' humi='33'/>
                </div>
                <SwitchList />
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        fetchWeather: action.fetchWeather
    }, dispatch)
}

const mapStateToProps = (state) => {
    return {
        weather: state.weather
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);