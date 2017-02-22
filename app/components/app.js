import React, {Component} from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import Paper from 'material-ui/Paper'

import mqtt from './mqttClient'

import './../assets/styles/style.scss'
import './style.scss'

import TopBar from './topBar'
import ThingsList from './thingsList'
import AddThingForm from './addThingForm'

class App extends Component {
    componentWillUnmount(){
        client.close();
    }

    render() {
        return (
            <MuiThemeProvider>
                <div className='App'>
                    <Paper zDepth={2}>
                        <TopBar />
                        <ThingsList />
                        <AddThingForm />
                    </Paper>
                </div>
            </MuiThemeProvider>
        );
    }
}

export default App;