import axios from 'axios'
import * as type from './types'

const url = 'http://localhost:8080/api'

const fetchWeatherSuccess = (response) => {
    console.log(response)
    return {
        type: type.FETCH_WEATHER_SUCCESS,
        payload: response
    }
}

const fetchWeatherError = () => {
    console.log('error')
    return {
        type: type.FETCH_WEATHER_ERROR,
    }
}

export const fetchWeather = () => (dispatch, getState) => {
    return axios.get(url+'/stats/weather')
            .then((response) => {
                dispatch(fetchWeatherSuccess(response.data))
            })
            .catch((error) => {
                dispatch(fetchWeatherError())
            })
}