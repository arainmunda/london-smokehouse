import React from 'react'
import { Link } from 'react-router-dom'
import SocialMedia from '../SocialMedia'
import './Footer.css'

export default function Footer () {
    return (
        <footer className="container-fluid">
            <div className="row">
                <div className="col-xs-12 col-sm-4">
                    <div className="connect">
                        <h4>Connect with us</h4>
                        <SocialMedia />
                    </div>
                </div>
                <div className="col-xs-12 col-sm-4">
                    <ul className="links">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/food">Food</Link></li>
                        <li><Link to="/locations">Locations</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                        <li><Link to="/faqs">FAQs</Link></li>
                    </ul>
                </div>
                <div className="col-xs-12 col-sm-4">
                    <div className="copyright">
                        <p>© London Smokehouse Ltd. All rights reserved 2017.</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}