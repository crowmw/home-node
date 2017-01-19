import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import App from './components/app'
import createStore from './store.config'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/css/bootstrap-theme.css'
import 'font-awesome/css/font-awesome.css'

const store = createStore()
console.log(store)

// let render = () => {
//     const routes = ''
//        console.log('render')
const root = document.getElementById('app')

const RedBox = require('redbox-react').default
try{
  ReactDOM.render(
      <Provider store={store}>
          <App /> 
      </Provider>
  ,root)
} catch (e) {
  ReactDOM.render(<RedBox error={e} />, root)
}

// }

// if (module.hot) {
//     // Development render functions
//     const renderApp = render
//     console.log('module.hot')
//     const renderError = (error) => {
//       const RedBox = require('redbox-react').default
// console.log('redbox')
//       ReactDOM.render(<RedBox error={error} />, document.getElementById('app'))
//     }

//     // Wrap render in try/catch
//     render = () => {
//       try {
//         console.log('renderApp')
//         renderApp()
//       } catch (error) {
//         console.error('error',error)
//         renderError(error)
//       }
//     }

//     // Setup hot module replacement
//     module.hot.accept('./routes', () =>
//       setImmediate(() => {
//         render()
//       })
//     )
//   }