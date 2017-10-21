import React from 'react'
import { Route } from 'react-router-dom'
import Header from '../components/Header'
import Home from '../containers/Home'
import Locations from '../containers/Locations'

const Routing = () => ( 
    <main>
        <Header />
        <Route exact path="/" component={Home} />
        <Route path="/locations" component={Locations} />
    </main>
)

export default Routing
