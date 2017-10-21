import React from 'react'
import { Link } from 'react-router-dom'
import './Home.css'

export default function Home () {
    return (
        <div className="hero">
            <h1>Perfect barbecue</h1>
            <h2><Link to="/locations">We're in Strongroom Bar. Find out When »</Link></h2>
        </div>
    )
}