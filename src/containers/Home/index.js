import React from 'react'
import { Link } from 'react-router-dom'
import Panel from '../../components/Panel'
import PanelImage1 from './beer-can-chicken.jpg'
import PanelImage2 from './strongroom.jpg'
import PanelImage3 from './beef-steak.jpg'
import './Home.css'

const panels = [
    {
        title: 'Our smoked chicken',
        url: '/food',
        copy: 'We have a great new recipe for Beer Can Chicken.',
        cta: 'Learn more about our food',
        img: PanelImage1
    },
    {
        title: "Where we'll be next",
        url: '/locations',
        copy: 'We have several bookings over the next months.',
        cta: 'View our timetable',
        img: PanelImage2
    },
    {
        title: 'Questions?',
        url: '/faqs',
        copy: 'Questions about where we source our meat.',
        cta: 'Visit our FAQs to learn more',
        img: PanelImage3
    }
]

export default function Home () {
    return (
        <div className="home">
            <div className="hero">
                <h1>The best barbecue in London</h1>
                <h2><Link to="/locations">Find out where we'll be next »</Link></h2>
            </div>
            <div className="panels container-fluid">
                <div className="row">
                    <div className="col-xs-12">
                        <h3>Latest</h3>
                    </div>
                </div>
                <div className="row">
                    {panels.map((panel, i) =>
                        <div key={i} className="col-xs-12 col-sm-4">
                            <Panel title={panel.title} url={panel.url} copy={panel.copy} cta={panel.cta} img={panel.img} />
                        </div>
                    )}
                    
                </div>
            </div>
        </div>
    )
}