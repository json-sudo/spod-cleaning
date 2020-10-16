import React from 'react'
import cloudinary from 'cloudinary-core'

import './equipment-rentals.styles.scss'

const cl = cloudinary.Cloudinary.new({ cloud_name: 'dynamicjson' })

const EquipmentRentalsPage = () => {
    const requestService = () => window.location.href="/services#send-a-request"

    cl.responsive()

    return (
        <div className="equipment-rentals-container">
            <div id="equipment-rentals">
                <div className="overlay" />
                <img src="https://res.cloudinary.com/dynamicjson/image/upload/w_auto,q_30,c_scale/v1599568046/oil-refinery_mr9jj3.jpg" alt="Cooling towers"/>
                <h1>Equipment rentals</h1>
            </div>

            <section className="equipment-description">
                <p>
                    We pride ourselves as the partner of choice in the area of equipment leasing &amp; supply. 
                    We meet all your needs in as little time as possible. <br /><br />
                    In situations where SPOD does not readily have the equipment you need, 
                    such equipments are sourced from our partners within and outside Portharcourt 
                    and delivered as soon as possible. <br /><br />
                    You can browse through our catalog of available equipments for leasing at SPOD below. 
                    Feel free to request for equipments outside those shown here as our mission is to
                    make any equipment you need readily available in the least amount of time possible.
                </p>

                <span 
                    className="link-button" 
                    onClick={() => requestService()}
                    role="link"
                    tabIndex={0}
                >
                    Rent an equipment now
                </span>
            </section>

            <section className="equipment-gallery">
                <div className="row">
                    <div className="img-container">
                        <img 
                            src="https://res.cloudinary.com/dynamicjson/image/upload/w_auto,q_40,c_scale/v1599310772/high-pressure-pump_pxjsdq.jpg"
                            alt="High pressure pump"
                            loading="lazy"
                        />
                        <header className="img-title">High pressure pump</header>
                    </div>

                    <div className="img-container">
                        <img 
                            src="https://res.cloudinary.com/dynamicjson/image/upload/w_auto,c_scale/v1602344306/mud-pumps_gzgglr.jpg" 
                            alt="Mud pump"
                            loading="lazy"
                        />
                        <header className="img-title">Mud pump</header>
                    </div>

                    <div className="img-container">
                        <img 
                            src="https://res.cloudinary.com/dynamicjson/image/upload/w_auto,q_40,c_scale/v1599570871/125-tank_ossf0o.jpg"
                            alt="Crude oil storage tank"
                            loading="lazy"
                        />
                        <header className="img-title">Mud/Crude storage tank</header>
                    </div>

                    <div className="img-container">
                        <img 
                            src="https://res.cloudinary.com/dynamicjson/image/upload/w_auto,q_40,c_scale/v1599569253/500-barrel_letxyn.jpg" 
                            alt="500 litre barrel tank"
                            loading="lazy"
                        />
                        <header className="img-title">500 Litre barrel tank</header>
                    </div>
                </div>

                <div className="row">
                    <div className="img-container">
                        <img 
                            src="https://res.cloudinary.com/dynamicjson/image/upload/w_auto,q_40,c_scale/v1599312954/barrel-tanks_s0j4f3.jpg" 
                            alt="Rectangular tank"
                            loading="lazy"
                        />
                        <header className="img-title">Rectangular tank</header>
                    </div>

                    <div className="img-container">
                        <img 
                            src="https://res.cloudinary.com/dynamicjson/image/upload/w_auto,q_40,c_scale/v1599571172/air-compressor_rfcjug.jpg" 
                            alt="Air compressor"
                            loading="lazy"
                        />
                        <header className="img-title">Air Compressor</header>
                    </div>

                    <div className="img-container">
                        <img 
                            src="https://res.cloudinary.com/dynamicjson/image/upload/c_scale,q_20,w_auto/v1599406254/electric-winch_mmjimb.jpg"
                            alt="Electric winch"
                            loading="lazy"
                        />
                        
                        <header className="img-title">Electric Winch</header>
                    </div>

                    <div className="img-container">
                        <img 
                            src="https://res.cloudinary.com/dynamicjson/image/upload/w_auto,q_20,c_scale/v1599406700/hydraulic-winch_hrr3d2.jpg" 
                            alt="Hydraulic winch"
                            loading="lazy"
                        />
                        <header className="img-title">Hydraulic Winch</header>
                    </div>
                </div>

                <div className="row">
                    <div className="img-container">
                        <img 
                            src="https://res.cloudinary.com/dynamicjson/image/upload/w_auto,q_40,c_scale/v1599407111/welding-machine_k4vvpi.jpg" 
                            alt="Welding machine"
                            loading="lazy"
                        />
                        <header className="img-title">Welding Machine</header>
                    </div>

                    <div className="img-container">
                        <img 
                            src="https://res.cloudinary.com/dynamicjson/image/upload/w_auto,q_40,c_scale/v1599570575/crane_rltbvi.jpg" 
                            alt="A crane"
                            loading="lazy"
                        />
                        <header className="img-title">Crane</header>
                    </div>

                    <div className="img-container">
                        <img src="https://res.cloudinary.com/dynamicjson/image/upload/w_auto,c_scale/v1599411506/excavator_v2eszz.jpg" 
                            alt="Excavator" 
                            loading="lazy" 
                        />
                        <header className="img-title">Excavator</header>
                    </div>

                    <div className="img-container">
                        <img src="https://res.cloudinary.com/dynamicjson/image/upload/w_auto,c_scale/v1599410473/bulldozer_xb37l3.jpg" 
                            alt="Bulldozer" 
                            loading="lazy" 
                        />
                        <header className="img-title">Bulldozer</header>
                    </div>
                </div>

                <div className="row">
                    <div className="img-container">
                        <img 
                            src="https://res.cloudinary.com/dynamicjson/image/upload/w_auto,c_scale/v1599410600/forklift_n2zll8.jpg" 
                            alt="Forklift"
                            loading="lazy"
                        />

                        <header className="img-title">Forklift</header>
                    </div>

                    <div className="img-container">
                        <img 
                            src="https://res.cloudinary.com/dynamicjson/image/upload/w_auto,c_scale/v1599410957/sound-proof-generator_vyigbw.jpg" 
                            alt="Sound-proof generator"
                            loading="lazy"
                        />

                        <header className="img-title">Sound-proof Generator</header>
                    </div>

                    <div className="img-container">
                        <img 
                            src="https://res.cloudinary.com/dynamicjson/image/upload/w_auto,c_scale/v1599411783/trucks_n2p0d8.jpg" 
                            alt="Trucks"
                            loading="lazy"
                        />

                        <header className="img-title">Trucks</header>
                    </div>

                    <div className="img-container">
                        <img 
                            src="https://res.cloudinary.com/dynamicjson/image/upload/w_auto,c_scale/v1599412004/swamp-buggy_xenk4h.jpg" 
                            alt="Swamp buggy"
                            loading="lazy"
                        />

                        <header className="img-title">Swamp Buggy</header>
                    </div>
                </div>

                <span 
                    className="link-button" 
                    onClick={() => requestService()}
                    role="link"
                    tabIndex={0}
                >
                    Rent an equipment now
                </span>
            </section>
        </div>
    )
}

export default EquipmentRentalsPage
