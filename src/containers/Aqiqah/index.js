import React from 'react'
import BackChop from './back-chop.jpg'
import Burger from './burger.jpg'
import Chop from './chop.jpg'
import Leg from './leg.jpg'
import Shank from './shank.jpg'
import './Aqiqah.css'

export default function Aqiqah () {
    return (
        <div className="aqiqah">
            <div className="hero">
                <h1>Barbecue Aqiqah Meat</h1>
                <h2>Say goodbye to bags of raw meat</h2>
            </div>
            <div className="story content-page container-fluid">
                <h2>
                    <span className="header-border"></span>
                    <span className="title">Aqiqah</span>
                    <span className="header-border"></span>
                </h2>
                <div className="row">
                    <div className="col-xs-12">
                        <div className="info">
                            <p>
                                London Smokehouse thrive on producing Barbecue Aqiqah Lamb that will be like nothing you've tasted before.
                                The birth of a child is special and so why not make their Aqiqah something to truly remember.
                                When we prepare our whole lamb, we break it down into different sections so we can concentrate on cooking the 
                                tough parts low and slow, and the tender parts seared at a high heat, making best use of the animal.
                                Find below a breakdown of the sections of lamb and the different ways we can cook it.
                                Our freerange and locally reared lambs tend to weight between 20kg - 25kg and the cost is £15 per kg (£300 - £375).
                                Sauces and condaments will be charged separately. Enquire at <a href="mailto:info@londonsmokehouse.uk">info@londonsmokehouse.uk</a>.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="content-page container-fluid">
                <div className="row">
                    <div className="col-xs-12 col-sm-4">
                        <img src={Shank} alt="Lamb Shank" />
                    </div>
                    <div className="col-xs-12 col-sm-8">
                        <h3>Shoulder</h3>
                        <h4>Braised Shanks</h4>
                        <p>
                            We spice the shanks generously and then smoke them for 2-3 hours.
                            We then wrap in foil with different tenderising liquids and braise til the meat falls off the bone.
                        </p>
                        <h4>Smoked Shoulder</h4>
                        <p>
                            Our favourite part of lamb! We cook the shoulder Kentucky Barbecue style where they are renowned for their lamb and mutton. 
                            We smoke the whole shoulder for a total of 10 hours, continually basting in a vinegar based barbecue sauce.
                            Once cooked, we pull apart the meat, toss it in sauce and then encourage them to be served with slaw in a nice soft bun.
                        </p>
                    </div>
                </div>

                <div className="row">
                    <div className="col-xs-12 col-sm-4">
                        <img src={Chop} alt="Lamb Chops" />
                    </div>
                    <div className="col-xs-12 col-sm-8">
                        <h3>Rib</h3>
                        <h4>Lamb Chops</h4>
                        <p>
                            Smoked for 30 minutes and then grilled at a high heat to lock in all the flavour. Probably the most prized part of lamb.
                        </p>
                        <h4>Rack of lamb</h4>
                        <p>
                            An delicious alternative to lamb chops, we sear the rack, then smoke it at a low temperature for one hour.
                            We then coat it with a herb and breadcrumb crust and bake it till crunchy on the outside.
                        </p>
                        <h4>Spare Ribs</h4>
                        <p>
                            Something we specialise in, we rub the ribs with a spice mix, smoke for three hours and then wrap with foil with some secret ingredients.
                            After that, we smoke for another 3 hours until tender and glaze the ribs with sauce.
                        </p>
                    </div>
                </div>

                <div className="row">
                    <div className="col-xs-12 col-sm-4">
                        <img src={BackChop} alt="Lamb Porterhouse" />
                    </div>
                    <div className="col-xs-12 col-sm-8">
                        <h3>Loin</h3>
                        <h4>Double Chops or Porterhouse Chops</h4>
                        <p>
                            We treat these like steak. A little bit of oil, salt and pepper then grilled on the kettle barbecue till the required doneness.
                            They are then based in a little butter and a homemade barbecue sauce.
                        </p>
                    </div>
                </div>

                <div className="row">
                    <div className="col-xs-12 col-sm-4">
                        <img src={Leg} alt="Leg of Lamb" />
                    </div>
                    <div className="col-xs-12 col-sm-8">
                        <h3>Leg</h3>
                        <h4>Smoked Leg</h4>
                        <p>
                            We pierce the skin and insert whole garlic cloves and then rub down with our North African spice mix.
                            We then smoke for two hours until juicy and tender.
                            Our leg of lamb can also be prepared and cooked the exact same way as our shoulder.
                            It can also be served as a half leg, with the shank half being treated the same as the braised shanks.
                        </p>
                        <h4>Sheesh Kebabs</h4>
                        <p>
                            After butchering the lamb into tender lamb chunks, we season and spice the lamb and then skewer with mixed vegetables.
                            We then grill at a high heat till cooked to the required doneness.
                        </p>
                    </div>
                </div>

                <div className="row">
                    <div className="col-xs-12 col-sm-4">
                        <img src={Burger} alt="Lamb Burger" />
                    </div>
                    <div className="col-xs-12 col-sm-8">
                        <h3>Other parts</h3>
                        <h4>Bones</h4>
                        <p>We will be using spare bones to make up a lamb barbecue sauce that will be used for cooking all of the other parts of the animal.</p>
                        <h4>Minced Trim</h4>
                        <p>With the trim we mince it down into burger or kofte portions depending on your preference.</p>
                        <h4>Neck</h4>
                        <p>We suggest that you purchase a side of our barbecue pit beans, and then we can use the lamb neck in their as it gives them an incredibly rich meaty flavour.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
