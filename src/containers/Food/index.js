import React from 'react'
import BeerCan from './beer-can-chicken.jpg'
import Brisket from './brisket.jpg'
import CrispyDuck from './crispy-duck.jpg'
import LegOfLamb from './leg-of-lamb.jpg'
import Sausage from './sausage.jpg'
import ShortRibs from './short-ribs.jpg'
import Turkey from './turkey.jpg'
import './Food.css'

export default function Food () {
    return (
        <div className="food container-fluid">
            <h1>
                <span className="header-border"></span>
                <span className="title">Our Food</span>
                <span className="header-border"></span>
            </h1>
            <div className="row">
                <div className="col-xs-12 col-sm-4">
                    <img src={Brisket} alt="Smoked Beef Brisket" />
                </div>
                <div className="col-xs-12 col-sm-8">
                    <h3>Brisket</h3>
                </div>
            </div>
            <div className="row">
                <div className="col-xs-12 col-sm-4">
                <img src={BeerCan} alt="Beer Can Chicken" />
                </div>
                <div className="col-xs-12 col-sm-8">
                    <h3>Beer Can Chicken</h3>
                </div>
            </div>
            <div className="row">
                <div className="col-xs-12 col-sm-4">
                    <img src={ShortRibs} alt="Beef Short Ribs" />
                </div>
                <div className="col-xs-12 col-sm-8">
                    <h3>Beef Short Ribs</h3>
                </div>
            </div>
            <div className="row">
                <div className="col-xs-12 col-sm-4">
                <img src={Sausage} alt="Sausage" />
                </div>
                <div className="col-xs-12 col-sm-8">
                    <h3>Sausage</h3>
                </div>
            </div>
            <h2>
                <span className="header-border"></span>
                <span className="title">Seasonal Specials</span>
                <span className="header-border"></span>
            </h2>
            <div className="row">
                <div className="col-xs-12 col-sm-4">
                    <img src={Turkey} alt="Turkey" />
                </div>
                <div className="col-xs-12 col-sm-8">
                    <h3>Turkey</h3>
                </div>
            </div>
            <div className="row">
                <div className="col-xs-12 col-sm-4">
                <img src={CrispyDuck} alt="Crispy Duck" />
                </div>
                <div className="col-xs-12 col-sm-8">
                    <h3>Crispy Duck</h3>
                </div>
            </div>
            <div className="row">
                <div className="col-xs-12 col-sm-4">
                <img src={LegOfLamb} alt="Leg of Lamb" />
                </div>
                <div className="col-xs-12 col-sm-8">
                    <h3>Leg of Lamb</h3>
                </div>
            </div>
        </div>
    )
}
