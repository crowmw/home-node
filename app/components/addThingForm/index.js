import React, {Component} from 'react'
import TextField from 'material-ui/TextField'
import SelectField from 'material-ui/SelectField'
import MenuItem from 'material-ui/MenuItem'
import RaisedButton from 'material-ui/RaisedButton'
import FlatButton from 'material-ui/FlatButton'
import {Tabs, Tab} from 'material-ui/Tabs'

import './style.scss'

class AddThingForm extends Component {
    constructor(props){
        super(props)

        this.state = {
            type: 1,
            name: null,
            description: null,
            topic: null,
            unit: null,
            min: null,
            max: null,
            step: null,
        }
    }

    handleTypeChange = (value) => this.setState({type: value})

    render() {
        return (
            <div className='AddThingForm'>
                <Tabs
                    onChange={this.handleTypeChange}
                    value={this.state.type}
                >
                    <Tab label='value' value={0} />
                    <Tab label='on / off' value={1} />
                    <Tab label='range' value={2} />
                </Tabs>
                <TextField
                    hintText='Nazwij swoją rzecz...'
                    floatingLabelText='Nazwa'
                    fullWidth={true}
                />
                <TextField
                    hintText='Dodatkowy opis...'
                    floatingLabelText='Opis'
                    fullWidth={true}
                />
                <TextField
                    hintText='Subskrybowany temat...'
                    floatingLabelText='Temat'
                    fullWidth={true}
                />
                {this.state.type === 0 ? <TextField
                    hintText='°C, km/h, hPa ...'
                    floatingLabelText='Jednostka'
                    fullWidth={true}
                /> : null}
                {this.state.type === 2 ? (<div>
                <TextField
                    hintText='Wartość minimalna...'
                    floatingLabelText='Minimum'
                    fullWidth={true}
                />
                <TextField
                    hintText='Wartość maksymalna...'
                    floatingLabelText='Maksimum'
                    fullWidth={true}
                />
                <TextField
                    hintText='Wielkość kroku...'
                    floatingLabelText='Krok'
                    fullWidth={true}
                /></div>) : null}
                <div className='Buttons'>
                    <RaisedButton label='Dodaj' primary={true} className='AddButton'/>
                    <FlatButton label='Anuluj' />
                </div>
            </div>
        );
    }
}

export default AddThingForm;