import React from 'react'
import Olympia from './olympia.png'
import './Locations.css'

export default function Locations () {
    return (
        <div className="content-page locations container-fluid">
            <h1>
                <span className="header-border"></span>
                <span className="title">Locations</span>
                <span className="header-border"></span>
            </h1>
            <div className="row no-gutters">
                <div className="col-xs-12">
                    <p>We will be at new venues that will be announced in the coming weeks. Stay up to date by following us on <a href="https://www.facebook.com/londonsmokehouse">Facebook</a>, <a href="https://instagram.com/londonsmokehouse/">Instagram</a> and <a href="https://twitter.com/barbecuelondon">Twitter</a>.</p>
                </div>
            </div>
            <div className="row no-gutters">
                <div className="col-xs-12 col-sm-4">
                    <h3>Muslim Lifestyle Show</h3>
                    <p>
                        Olympia London<br />
                        <a href="https://www.muslimlifestyleshow.com">www.muslimlifestyleshow.com</a><br />
                        <a href="mailto:info@muslimlifestyleshow.com">info@muslimlifestyleshow.com</a>
                    </p>
                    <p>April 21st - 22nd 2018</p>
                </div>
                <div className="col-xs-12 col-sm-4">
                    <img src={Olympia} alt="Olympia London" />
                </div>
                <div className="col-xs-12 col-sm-4 video">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2483.9228642259623!2d-0.21291468423043755!3d51.49628297963337!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48760f8dc9c0b2dd%3A0x26fa091340f02f99!2sOlympia+London!5e0!3m2!1sen!2suk!4v1509230031339" title="Olympia London" allowFullScreen></iframe>
                </div>
            </div>
        </div>
    )
}