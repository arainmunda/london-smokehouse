import React from 'react'
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
                    <div className="col-xs-12">
                        <div className="info">
                            <p>
                                Our barbecue is the best because of how careful and precise we are with what goes into it. 
                                Ethically reared organic meat. Unique blends of herbs and spices.
                                High quality sustainably sourced oak. Low and slow cooking temperature and times.
                                And the most decadent sides to make the meal a complete culinary experience.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}