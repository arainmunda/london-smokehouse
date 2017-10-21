import React from 'react'
import { Route } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Home from '../containers/Home'
import Locations from '../containers/Locations'

const Routing = () => ( 
    <main>
        <Header />
        <Route exact path="/" component={Home} />
        <Route path="/locations" component={Locations} />
        <Footer />
    </main>
)

export default Routing
