import React, {Component} from 'react'

import Banner from './banner'
import Clock from './clock'
import Climate from './climate'
import RSwitch from './switch'
import SwitchList from './switchList'
import ProbeList from './probesList'

import './../assets/styles/style.scss'
import './style.scss'

class App extends Component {
    componentWillUpdate(){
        
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
                <ProbeList />
                <SwitchList />
            </div>
        );
    }
}

export default App;