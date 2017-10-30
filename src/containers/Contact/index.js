import React from 'react'
import './Contact.css'

export default function Contact () {
    return (
        <div className="content-page contact container-fluid">
            <h1>
                <span className="header-border"></span>
                <span className="title">Contact us</span>
                <span className="header-border"></span>
            </h1>
            <div className="row no-gutters-xs">
                <div className="col-xs-12 col-sm-4">
                    <h3>London Smokehouse</h3>
                    <p>We are available for bookings at food markets, restaurant pop ups, events, birthday parties and any other celebrations.</p>
                    <p>
                        <a href="mailto:info@londonsmokehouse.uk">info@londonsmokehouse.uk</a><br />
                        020 7426 5103
                    </p>
                </div>
                <div className="col-xs-12 col-sm-4">
                </div>
                <div className="col-xs-12 col-sm-4 video">
                </div>
            </div>
        </div>
    )
}
