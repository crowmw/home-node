import React, {Component} from 'react';
import RSwitch from '../switch'
import './style.scss'

class SwitchList extends Component {
    render() {
        return (
            <div className='SwitchList'>
                <RSwitch text='Test1' />
                <RSwitch text='Test2' />
                <RSwitch text='Test3' />
                <RSwitch text='Test4' />
                <RSwitch text='Test5' />
            </div>
        );
    }
}

export default SwitchList;