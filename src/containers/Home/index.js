import React from 'react'
import { Link } from 'react-router-dom'
import './Home.css'

export default function Home () {
    return (
        <div className="home">
            <div className="hero">
                <h1>Perfect barbecue</h1>
                <h2><Link to="/locations">We're in Strongroom Bar. Find out When »</Link></h2>
            </div>
            <div className="panels container-fluid">
                <div className="row">
                    <div className="col-xs-12">
                        <h3>Latest</h3>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-12 col-sm-4">
                    </div>
                    <div className="col-xs-12 col-sm-4">
                    </div>
                    <div className="col-xs-12 col-sm-4">
                    </div>
                </div>
            </div>
        </div>
    )
}