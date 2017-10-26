import React from 'react'
import Brisket from './brisket.jpg'
import './About.css'

export default function About () {
    return (
        <div className="about">
            <div className="hero">
                <h1>It starts with a wood fire</h1>
                <h2>And ends with a full stomach</h2>
            </div>
            <div className="story container-fluid">
                <div className="row">
                    <div className="col-xs-12">
                        <h3>About</h3>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-12 col-sm-6">
                        <img src={Brisket} alt="Our smoked Brisket" />
                    </div>
                    <div className="col-xs-12 col-sm-6">
                        <div className="info">
                            <p>Our barbecue is the best because of how careful and precise we are with what goes into it.</p>
                            <ul>
                                <li>Ethically reared organic meat.</li>
                                <li>Unique blends of herbs and spices.</li>
                                <li>High quality sustainably sourced oak.</li>
                                <li>Low and slow cooking temperature and times.</li>
                                <li>And the most decadent sides to make the meal a complete culinary experience.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}