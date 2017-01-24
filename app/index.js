import React from 'react'
import ReactDOM from 'react-dom'

import App from './components/app'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/css/bootstrap-theme.css'
import 'font-awesome/css/font-awesome.css'

const root = document.getElementById('app')

const RedBox = require('redbox-react').default
try{
  ReactDOM.render(
    <App /> 
  ,root)
} catch (e) {
  ReactDOM.render(<RedBox error={e} />, root)
}