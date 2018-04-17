import React from 'react'
import './Faqs.css'

export default function Faqs () {
    return (
        <div className="content-page faqs container-fluid">
            <h1>
                <span className="header-border"></span>
                <span className="title">FAQs</span>
                <span className="header-border"></span>
            </h1>
            
            <h3>Do you have any allergen information?</h3>
            <ul>
                <li>Our foods may contain a trace of nuts</li>
                <li>Our coleslaw, mac & cheese and turkey are not suitable to those who are lactose intolerant</li>
                <li>Our duck is basted in soya</li>
                <li>Our cornbread and mac & cheese is not suitable to those who are gluten intolerant</li>
                <li>Always check with us and explain your dietary and allergen requirements before purchasing</li>
            </ul>

            <h3>Is your food suitable for vegetarians?</h3>
            <p>Erm... probably not. We ocassionally have a vegan pulled jackfruit burger, but it's subject to availability and sells out pretty fast.</p>

            <h3>Is your meat halal?</h3>
            <p>YES, all of our meat is halal, including our sausage which is definitely not made of pork (they're made of a blend of beef, lamb and veal depending on availability). Our beer can chicken uses the non-alcholic variation.</p>

            <h3>Do you have any nutritional information</h3>
            <p>Because of the nature of how we make our food, using seasonal vegetables, different breeds of animal, with different fat content, it's incredibly difficult for us to supply this information. If you're having red meat at London Smokehouse, treat us like a cheat day.</p>

            <h3>I have leftovers, can I eat them?</h3>
            <p>Our food is cooked fresh, so if you refridgerate your meal from London Smokehouse, then it should keep for a couple of days. Cold smoking can preserve food for weeks, but we hot smoke and so don't recommend keeping it too long.</p>
        </div>
    )
}
