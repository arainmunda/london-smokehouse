import React from 'react'
import Brisket from './brisket.jpg'
import Chicken from './chicken.jpg'
import Lamb from './lamb.jpg'
import Ribs from './ribs.jpg'
import Turkey from './turkey.jpg'
import './Catering.css'

export default function Catering () {
    return (
        <div className="catering">
            <div className="hero">
                <h1>Fine Food</h1>
                <h2>Delivered to your door</h2>
            </div>
            <div className="content-page container-fluid">
                <h2>
                    <span className="header-border"></span>
                    <span className="title">About</span>
                    <span className="header-border"></span>
                </h2>
                <p>Find below our product list and pricing for home delivery 2018. Please give us as much notice as possible and detail exactly what you'd like. Email all orders to <a href="mailto:info@londonsmokehouse.uk">info@londonsmokehouse.uk</a>.</p>
                <div className="row">
                    <div className="col-xs-12 col-sm-4">
                        <img src={Brisket} alt="Beef Brisket" />
                    </div>
                    <div className="col-xs-12 col-sm-8">
                        <h3>Prime Aberdeen Angus Brisket</h3>
                        <p>£150</p>
                        <h3>Australian Brisket</h3>
                        <p>£100</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-12 col-sm-4">
                        <img src={Ribs} alt="Beef Ribs" />
                    </div>
                    <div className="col-xs-12 col-sm-8">
                        <h3>Prime Aberdeen Angus Short Rib</h3>
                        <p>£70</p>
                        <h3>Australian Short Rib</h3>
                        <p>£50</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-12 col-sm-4">
                        <img src={Lamb} alt="Smoked Lamb" />
                    </div>
                    <div className="col-xs-12 col-sm-8">
                        <h3>Whole Lamb</h3>
                        <p>£12 per kg (22-25kg)</p>
                        <h3>Lamb Leg</h3>
                        <p>£70</p>
                        <h3>Lamb Shoulder</h3>
                        <p>£50</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-12 col-sm-4">
                        <img src={Turkey} alt="Turkey" />
                    </div>
                    <div className="col-xs-12 col-sm-8">
                        <h3>Whole Turkey</h3>
                        <p>£100</p>
                        <h3>Turkey Crown</h3>
                        <p>£50</p>
                        <h3>Half Turkey Crown</h3>
                        <p>£30</p>
                    </div>
                </div>
               
                <div className="row">
                    <div className="col-xs-12 col-sm-4">
                        <img src={Chicken} alt="Beer Can Chicken" />
                    </div>
                    <div className="col-xs-12 col-sm-8">
                        <h3>Whole Beer Can Chicken</h3>
                        <p>£15</p>
                        <h3>Chicken Wings</h3>
                        <p>£20 per kilo</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
