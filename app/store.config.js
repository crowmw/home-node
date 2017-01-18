import { createStore, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import reducer from './reducers/index'

export default (initialState = {}) => {
    const middlewares = [thunk]
    const enhancers = [window.devToolsExtension ? window.devToolsExtension() : undefined]

    const store = createStore(
        reducer,
        initialState,
        compose(
            applyMiddleware(...middlewares),
            ...enhancers
        )
    )

    if(module.hot) {
        module.hot.accept('./reducers', () => {
            const nextRootReducer = require('./reducers/index')
            store.replaceReducer(nextRootReducer)
        })
    }

    return store
}