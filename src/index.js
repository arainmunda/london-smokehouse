import React from 'react'
import ReactDOM from 'react-dom'
import { ConnectedRouter } from 'react-router-redux'
import { Provider } from 'react-redux'
import registerServiceWorker from './registerServiceWorker'
import store, { history } from './store'
import Routing from './routing'
import 'normalize.css'
import '../node_modules/flexboxgrid/css/flexboxgrid.css'
import './index.css'

const logPageView = () => {
    window.ga('set', 'page', window.location.pathname)
    window.ga('send', 'pageview')
    window.fbq('track', 'PageView')
}

history.listen(() =>  {
    logPageView()
})

ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <Routing />
        </ConnectedRouter>
    </Provider>,
    document.getElementById('root')
)
registerServiceWorker()
