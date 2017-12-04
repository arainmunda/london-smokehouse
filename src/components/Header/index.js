import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import classNames from 'classnames/bind'
import SocialMedia from '../SocialMedia'
import './Header.css'
import Logo from './logo.svg'

const firstLinks = [ 
    { 'label': 'Home', 'url': '/' },
    { 'label': 'About', 'url': '/about'},
    { 'label': 'Food', 'url': '/food' }
]
const secondLinks = [ 
    { 'label': 'Locations', 'url': '/locations' },
    { 'label': 'Contact', 'url': '/contact'},
    { 'label': 'FAQs', 'url': '/faqs' }
]

export default class Header extends Component {
    constructor(props) {
        super(props)
        this.state = {
          openMenu: false
        }
        this.toggleMenu = this.toggleMenu.bind(this)
    }

    componentDidUpdate (prevProps) {
        if (this.props.location !== prevProps.location) {
            this.setState({openMenu: false})
        }
    }

    toggleMenu () {
        this.setState({openMenu: !this.state.openMenu})
    }

    render () {
        return (
            <header className="header">
                <img src={Logo} alt="London Smokehouse Ltd Logo" />
                <div className={classNames(['fa hide-sm ',{ 'fa-bars': !this.state.openMenu },{ 'fa-times': this.state.openMenu }])} onClick={this.toggleMenu}>
                </div>
                <SocialMedia />
                <nav className={classNames([{'hide-xs': !this.state.openMenu}])}>
                    <Navigation pages={firstLinks} />
                    <Navigation pages={secondLinks} />
                </nav>
            </header>
        )
    }
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
