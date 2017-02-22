import React, {Component, PropTypes} from 'react';

import './style.scss'

class Banner extends Component {
    render() {
        return (
            <div className='Banner'>
                {this.props.text}
            </div>
        );
    }
}

Banner.propTypes = {
    text: PropTypes.string.isRequired
}

export default Banner;