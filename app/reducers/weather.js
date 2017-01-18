import { combineReducers } from 'redux'
import * as type from './../actions/types'

const Weather = (state = [], action) => {
    switch(action.type){
        case type.FETCH_WEATHER_SUCCESS:
            return action.payload
        default:
            return state
    }
}

export default Weather