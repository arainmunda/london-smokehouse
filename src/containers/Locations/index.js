import React from 'react'
import Spitalfields from './spitalfields.jpg'
import Tobacco from './tobacco.jpg'
import Westfield from './westfield.jpg'
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
                    <h3>Eid Festival London</h3>
                    <p>
                        Westfield London<br />
                        <a href="https://www.londoneid.com">www.londoneid.com</a><br />
                        <a href="mailto:info@londoneid.com">info@londoneid.com</a>
                    </p>
                    <p>
                        June 23rd 2018: 10am - 10pm<br />
                        June 24th 2018: 12pm - 6pm
                    </p>
                </div>
                <div className="col-xs-12 col-sm-4">
                    <img src={Westfield} alt="Westfield London" />
                </div>
                <div className="col-xs-12 col-sm-4 video">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9933.354652600148!2d-0.22975523683491716!3d51.50700255521646!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48760fd9a17c9f4d%3A0xe252903445e7660c!2sWestfield+London!5e0!3m2!1sen!2suk!4v1528545280349" title="Westfield London"></iframe>
                </div>
            </div>
            <div className="row no-gutters">
                <div className="col-xs-12 col-sm-4">
                    <h3>Street Eats</h3>
                    <p>
                        Old Spitalfields Market<br />
                        <a href="http://halalgems.com/streeteats/">halalgems.com/streeteats</a><br />
                        <a href="mailto:info@halalgems.com">info@halalgems.com</a>
                    </p>
                    <p>
                        August 3rd 2018: 10am - 9pm<br />
                        August 4th 2018: 10am - 9pm
                    </p>
                </div>
                <div className="col-xs-12 col-sm-4">
                    <img src={Spitalfields} alt="Old Spitalfields Market" />
                </div>
                <div className="col-xs-12 col-sm-4 video">
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d9930.594062570308!2d-0.0754435!3d51.5196641!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x2a9c62421116fbb2!2sOld+Spitalfields+Market!5e0!3m2!1sen!2suk!4v1529437977896" title="Old Spitalfields"></iframe>
                </div>
            </div>
            <div className="row no-gutters">
                <div className="col-xs-12 col-sm-4">
                    <h3>Halal Food Festival</h3>
                    <p>
                        Tobacco Dock<br />
                        <a href="https://www.londonhalalfoodfestival.com">www.londonhalalfoodfestival.com</a><br />
                        <a href="mailto:info@londonhalalfoodfestival.com">info@londonhalalfoodfestival.com</a>
                    </p>
                    <p>
                        August 11th 2018: 11am - 8pm<br />
                        August 12th 2018: 11am - 7pm
                    </p>
                </div>
                <div className="col-xs-12 col-sm-4">
                    <img src={Tobacco} alt="Tobacco Dock" />
                </div>
                <div className="col-xs-12 col-sm-4 video">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d9933.098805635665!2d-0.0595714!3d51.5081761!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x438a8f1c8d683e45!2sTobacco+Dock!5e0!3m2!1sen!2suk!4v1523989105823" title="Tobacco Dock"></iframe>
                </div>
            </div>
        </div>
    )
}