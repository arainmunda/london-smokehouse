import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import registerServiceWorker from './registerServiceWorker';
import store from './store'
import Routing from './routing'
import 'normalize.css'
import '../node_modules/flexboxgrid/css/flexboxgrid.css';
import './index.css'

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <Routing />
        </Router>
    </Provider>,
    document.getElementById('root')
)
registerServiceWorker()
