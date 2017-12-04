import React from 'react'
import Olympia from './olympia.png'
import Strongroom from '../Home/strongroom.jpg'
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
                <div className="col-xs-12 col-sm-4">
                    <h3>Strongroom Bar & Kitchen</h3>
                    <p>
                        Shoreditch, London<br />
                        <a href="http://strongroombar.com">strongroombar.com</a><br />
                        020 7426 5103
                    </p>
                    <p>
                        November 20th, 22nd, 27th, 29th 2017<br />
                        December 1st, 2nd, 8th, 22nd, 29th, 30th 2017
                    </p>
                </div>
                <div className="col-xs-12 col-sm-4">
                    <img src={Strongroom} alt="Strongroom Bar & Kitchen" />
                </div>
                <div className="col-xs-12 col-sm-4 video">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d4964.4920571729335!2d-0.08115287448036618!3d51.527047158360276!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xe83a97ace7e8e22d!2sStrongroom+Bar+%26+Kitchen!5e0!3m2!1sen!2suk!4v1509228696855" title="Strongroom map" allowFullScreen></iframe>
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
                    <p>April 21st, 22nd 2018</p>
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