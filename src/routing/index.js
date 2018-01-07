import React, { Component } from 'react'
import { Route, withRouter } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Home from '../containers/Home'
import About from '../containers/About'
import Food from '../containers/Food'
import Catering from '../containers/Catering'
import Aqiqah from '../containers/Aqiqah'
import Locations from '../containers/Locations'
import Contact from '../containers/Contact'
import Faqs from '../containers/Faqs'

class Routing extends Component {
    render () {
        return (
            <main>
                <Header location={this.props.location} />
                <Route exact path="/" component={Home} />
                <Route path="/about" component={About} />
                <Route path="/food" component={Food} />
                <Route path="/catering" component={Catering} />
                <Route path="/aqiqah" component={Aqiqah} />
                <Route path="/locations" component={Locations} />
                <Route path="/contact" component={Contact} />
                <Route path="/faqs" component={Faqs} />
                <Footer />
            </main>
        )
    }
}

export default withRouter(Routing)
