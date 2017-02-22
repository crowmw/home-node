import React, {Component} from 'react'
import {List, ListItem} from 'material-ui/List'
import Subheader from 'material-ui/Subheader'
import Divider from 'material-ui/Divider'
import FontAwesome from 'react-fontawesome'
import Switch from 'rc-switch'
import Toggle from 'material-ui/Toggle'
import LightbulbOutline from 'material-ui/svg-icons/action/lightbulb-outline';
import Slider from 'material-ui/Slider'

class ThingsList extends Component {
    constructor(props){
        super(props)

        this.state = {
            sliderVal: 0.5
        }
    }

    handleToggle(e){
        console.log('Click!')
    }

    handleSliderChange = (event, value) => this.setState({sliderVal: value})

    render() {
        return (
            <div className='ThingsList'>
                <List>
                    <ListItem
                        primaryText=' '
                        secondaryText=' '
                        leftIcon={<LightbulbOutline />}
                        rightToggle={<Toggle />}
                    >
                        <div style={{width: '100%', fontWeight: 'bold'}} >Value</div>
                        <div style={{display: 'flex', alignItems: 'stretch'}}>
                            <div style={{width: '100%', fontWeight: 'lighter'}}>Opis do wartości</div>
                        </div>
                    </ListItem>
                    <ListItem
                        leftIcon={<LightbulbOutline />}
                        disabled={true}
                        style={{paddingTop: '20px', height: '88px'}}
                        primaryText=" "
                        secondaryText=" "
                    >
                    <div>
                        <div style={{width: '100%', fontWeight: 'bold'}} >Slider</div>
                        <div style={{display: 'flex', alignItems: 'stretch'}}>
                            <Slider 
                                sliderStyle={{margin: 0}}
                                style={{width: '100%', margin: '5px 0px 0px 0px'}}
                                defaultValue={0.5}
                                value={this.state.sliderVal}
                                onChange={this.handleSliderChange}
                            />
                            <p style={{margin: '0px -3px 0px 12px', width: '54px', textAlign: 'center'}}>{this.state.sliderVal}</p>
                        </div>
                    </div>
                    </ListItem>
                    <ListItem
                        leftIcon={<LightbulbOutline />}
                        disabled={true}
                        primaryText=" "
                        secondaryText=" "
                    >
                        <div style={{width: '100%', fontWeight: 'bold'}} >Value</div>
                        <div style={{display: 'flex', alignItems: 'stretch'}}>
                            <div style={{width: '100%'}}>Opis do wartości</div>
                            <p style={{margin: '-7px -3px 0px 12px', width: '54px', textAlign: 'center'}}>25,5°C</p>
                        </div>
                    </ListItem>
                                        <ListItem
                        primaryText=' '
                        secondaryText=' '
                        leftIcon={<LightbulbOutline />}
                        rightToggle={<Toggle />}
                    >
                        <div style={{width: '100%', fontWeight: 'bold'}} >Value</div>
                        <div style={{display: 'flex', alignItems: 'stretch'}}>
                            <div style={{width: '100%', fontWeight: 'lighter'}}>Opis do wartości</div>
                            
                        </div>
                    </ListItem>
                </List>
            </div>
        );
    }
}

export default ThingsList;