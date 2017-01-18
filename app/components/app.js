import React, {Component} from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import * as action from './../actions/index'

class App extends Component {
    componentWillMount(){
        console.log(this.props)
        this.props.fetchWeather()
    }

    render() {
        return (
            <div>
                Hello from React!12
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