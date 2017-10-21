import React from 'react'
import { Link } from 'react-router-dom'
import SocialMedia from '../SocialMedia'
import './Header.css'
import Logo from './logo.svg'

const firstLinks = [ 
    { 'label': 'Home', 'url': '/' },
    { 'label': 'About', 'url': '/about'}
]
const secondLinks = [ 
    { 'label': 'Locations', 'url': '/locations' },
    { 'label': 'Contact', 'url': '/contact'}
]

export default function Header () {
    return (
        <header>
            <img src={Logo} alt="London Smokehouse Ltd Logo" />
            <SocialMedia />
            <nav>
                <Navigation pages={firstLinks} />
                <Navigation pages={secondLinks} />
            </nav>
        </header>
    )
}

function Navigation ({ pages }) {
    return (
        <ul>
            {pages.map((page, i) => 
                <li key={i}><Link to={page.url}>{page.label}</Link></li>
            )}
        </ul>
    )
}
