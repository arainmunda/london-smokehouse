import React from 'react'
import Olympia from './olympia.png'
import Smithfield from './smithfield.jpg'
import Tobacco from './tobacco.jpg'
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
                    <p>
                        April 21st 2018: 10.30am - 6pm<br />
                        April 22nd 2018: 10.30am - 5pm
                    </p>
                </div>
                <div className="col-xs-12 col-sm-4">
                    <img src={Olympia} alt="Olympia London" />
                </div>
                <div className="col-xs-12 col-sm-4 video">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2483.9228642259623!2d-0.21291468423043755!3d51.49628297963337!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48760f8dc9c0b2dd%3A0x26fa091340f02f99!2sOlympia+London!5e0!3m2!1sen!2suk!4v1509230031339" title="Olympia London" allowFullScreen></iframe>
                </div>
            </div>
            <div className="row no-gutters">
                <div className="col-xs-12 col-sm-4">
                    <h3>Street Eats</h3>
                    <p>
                        Smithfield Market<br />
                        <a href="http://halalgems.com/streeteats/">halalgems.com/streeteats</a><br />
                        <a href="mailto:info@halalgems.com">info@halalgems.com</a>
                    </p>
                    <p>
                        August 3rd 2018: 10.00am - 9pm<br />
                        August 4th 2018: 10.00am - 9pm
                    </p>
                </div>
                <div className="col-xs-12 col-sm-4">
                    <img src={Smithfield} alt="Smithfield Market" />
                </div>
                <div className="col-xs-12 col-sm-4 video">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d9930.633769176207!2d-0.101203!3d51.519482!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x44e703649203ad1d!2sSmithfield+Market!5e0!3m2!1sen!2suk!4v1523988711958" title="Smithfield Market" allowfullscreen></iframe>
                </div>
            </div>
            <div className="row no-gutters">
                <div className="col-xs-12 col-sm-4">
                    <h3>Halal Food Festival</h3>
                    <p>
                        Tobacco Dock<br />
                        <a href="https://www.londonhalalfoodfestival.com/">www.londonhalalfoodfestival.com/</a><br />
                        <a href="mailto:info@londonhalalfoodfestival.com">info@londonhalalfoodfestival.com</a>
                    </p>
                    <p>
                        August 11th 2018: 11.00am - 8pm<br />
                        August 12th 2018: 11.00am - 7pm
                    </p>
                </div>
                <div className="col-xs-12 col-sm-4">
                    <img src={Tobacco} alt="Tobacco Dock" />
                </div>
                <div className="col-xs-12 col-sm-4 video">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d9933.098805635665!2d-0.0595714!3d51.5081761!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x438a8f1c8d683e45!2sTobacco+Dock!5e0!3m2!1sen!2suk!4v1523989105823" title="Tobacco Dock" allowfullscreen></iframe>
                </div>
            </div>
        </div>
    )
}