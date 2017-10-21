import React from 'react'
import './SocialMedia.css'

export default function SocialMedia () {
    return (
        <ul className="social">
            <li>
                <a href="http://www.facebook.com/londonsmokehouse" className="fa fa-facebook-official" target="_blank" rel="noopener noreferrer">
                    Facebook
                </a>
            </li>
            <li>
                <a href="http://www.instagram.com/londonsmokehouse" className="fa fa-instagram" target="_blank" rel="noopener noreferrer">
                    Instagram
                </a>
            </li>
            <li>
                <a href="http://www.twitter.com/BarbecueLondon" className="fa fa-twitter" target="_blank" rel="noopener noreferrer">
                    Twitter
                </a>
            </li>
        </ul>
    )
}