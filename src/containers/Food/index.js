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
        <div className="content-page food container-fluid">
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
                    <p>Our signature dish and one we will always serve until it runs out!</p>
                    <p>Carefully trimmed to have the right fat content, covered in our blend of seasonings and spices and then smoked for between 12 and 16 hours. Timings aren't really the factor, we cook it till it is so tender that it pulls apart with minimum resistance.</p>
                    <p>Brisket will be served at all London Smokehouse pop ups.</p>
                    <p>
                        <span className="how-to-eat">How to eat it:</span><br />
                        Most people like to put it in a sandwich, but we think it tastes best in slices (or cubes) with a side of Mac & Cheese, pickles, a little barbecue sauce and some American mustard.
                    </p>
                </div>
            </div>
            <div className="row">
                <div className="col-xs-12 col-sm-4">
                <img src={BeerCan} alt="Beer Can Chicken" />
                </div>
                <div className="col-xs-12 col-sm-8">
                    <h3>Beer Can Chicken</h3>
                    <p>We've heard people say that chicken can't get as exciting as beef on the smoker, but this recipe is just one for the ages.</p>
                    <p>The chicken is brined with salt, sugar, spices and water, before being seasoned with our special chicken rub, and smoked upright on a can of beer. It is then basted with our homemade barbecue sauce.</p>
                    <p>Beer can chicken will be one of the poultry dishes we serve at pop ups, and could ocassion be replaced with Duck or Turkey.</p>
                    <p>
                        <span className="how-to-eat">How to eat it:</span><br />
                        It's already pretty saucy, so a small amount of barbecue sauce on the side will go along way, as will some slaw and barbecue beans.
                    </p>
                </div>
            </div>
            <div className="row">
                <div className="col-xs-12 col-sm-4">
                    <img src={ShortRibs} alt="Beef Short Ribs" />
                </div>
                <div className="col-xs-12 col-sm-8">
                    <h3>Beef Short Ribs</h3>
                    <p>Usually served as a special, and always in limited supply; the beef short ribs are something everyone must try. Probably the juiciest piece of red meat you'll ever eat, it's prepared very similar to our beef brisket.</p>
                    <p>They come on Flinstone style rib bones and are only for those who don't mind getting a little messy.</p>
                    <p>The short ribs are a bit of a treat and so limited supplies will be available.</p>
                    <p>
                        <span className="how-to-eat">How to eat it:</span><br />
                        Whatever you do, don't try to eat this with a fork and knife. Grab each end of the bone with your hands and let the carnivore in you do the rest.
                    </p>
                </div>
            </div>
            <div className="row">
                <div className="col-xs-12 col-sm-4">
                <img src={Sausage} alt="Sausage" />
                </div>
                <div className="col-xs-12 col-sm-8">
                    <h3>Sausage</h3>
                    <p>The most underestimated thing on our menu, but probably our favourite thing. If you've not had a smoked sausage, then you're simply missing out.</p>
                    <p>Prepared like any other sausage, using high quality blends of meat, spices and natural casings, we smoke the sausages rather than fry or grill them and the result is magical.</p>
                    <p>The amount of flavour this dish packs is phenomonal and it is available at all pop ups.</p>
                    <p>
                        <span className="how-to-eat">How to eat it:</span><br />
                        All the sausage needs is a touch of American mustard. If you fancy it in a hot dog, a touch of barbecue sauce goes a long way too.
                    </p>
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
                    <p>You might think this is just a Christmas or Thanks Giving fad, but smoked turkey is a completely different thing to it's oven cooked alternative. Firstly, we only cook the crown, which makes for a much more even and consistent texture. The turkey is brined, seasoned and then cooked till golden.</p>
                    <p>You'll bite into it expecting it to be dry, and then be blown away by how phenomonal it tastes.</p>
                    <p>Available in December at all pop ups. And if popular, you'll see it in Spring 2018.</p>
                    <p>
                        <span className="how-to-eat">How to eat it:</span><br />
                        With a side of garlic mash and barbecue beans, this dish is an absolute winner.
                    </p>
                </div>
            </div>
            <div className="row">
                <div className="col-xs-12 col-sm-4">
                <img src={CrispyDuck} alt="Crispy Duck" />
                </div>
                <div className="col-xs-12 col-sm-8">
                    <h3>Crispy Duck</h3>
                    <p>If you want crispy peking duck, go to chinatown. If you want something slightly different but still hitting the asian flavour notes, try our smoked crispy duck.</p>
                    <p>We prepare it similar to how a Chinese chef would, only we smoke it with cherrywood and then baste it in a tamarind based barbecue sauce. What makes it special is the smoking process flavours the meat all the way to the bone, which is something crispy peking duck misses out on.</p>
                    <p>Available February 2018 at all pop ups.</p>
                    <p>
                        <span className="how-to-eat">How to eat it:</span><br />
                        Shred it into a soft broiche roll with a side of slaw to help cut through the richness of the meat.
                    </p>
                </div>
            </div>
            <div className="row">
                <div className="col-xs-12 col-sm-4">
                <img src={LegOfLamb} alt="Leg of Lamb" />
                </div>
                <div className="col-xs-12 col-sm-8">
                    <h3>Leg of Lamb</h3>
                    <p>Our North African spiced leg of lamb is one of those comfort foods that everyone needs in their life.</p>
                    <p>Covered in a blend of middle eastern spices, with plenty of garlic, the meat is smoked at a low heat with cherrywood, and cooked til medium. It is the only dish we serve cooked medium, but it works amazingly.</p>
                    <p>Available March and April 2018 at all pop ups.</p>
                    <p>
                        <span className="how-to-eat">How to eat it:</span><br />
                        Take slices or shredded meat and load them into a soft brioche roll with a heaped tablespoon of slaw.
                    </p>
                </div>
            </div>
        </div>
    )
}
