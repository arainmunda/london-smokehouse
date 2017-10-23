import React from 'react'
import { Link } from 'react-router-dom'
import './Panel.css'

export default function Panel ({ title, url, copy, cta, img }) {
    return (
        <div className="panel">
            <img src={img} alt={title} />
            <h4>{title}</h4>
            <p>{copy}</p>
            <Link to={url} className="cta">{cta} »</Link>
        </div>
    )
}