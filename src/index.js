import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import App from './containers/App/App'
import configureStore from './store'

const config = require('./config.json')
const store = configureStore()

ReactDOM.render(
    <Provider store={store}>
        <App config={config} />
    </Provider>,
    document.getElementById('root')
)