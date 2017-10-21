import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'
import Logo from './logo.svg'

const firstLinks = ['home', 'about']
const secondLinks = ['locations', 'contact']

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
                <li key={i}><Link to={`/${page}`}>{page}</Link></li>
            )}
        </ul>
    )
}

function SocialMedia () {
    return (
        <ul className="social">
            <li>
                <a href="http://www.facebook.com/londonsmokehouse" className="fa fa-facebook-official" target="_blank">
                    Facebook
                </a>
            </li>
            <li>
                <a href="http://www.instagram.com/londonsmokehouse" className="fa fa-instagram" target="_blank">
                    Instagram
                </a>
            </li>
            <li>
                <a href="http://www.twitter.com/BarbecueLondon" className="fa fa-twitter" target="_blank">
                    Twitter
                </a>
            </li>
        </ul>
    )
}

