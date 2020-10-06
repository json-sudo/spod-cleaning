import React from 'react'
import cloudinary from 'cloudinary-core'

import Hero from '../../components/hero/hero.component'

import './cleaning-services.styles.scss'

const cl = cloudinary.Cloudinary.new({ cloud_name: 'dynamicjson' })

const CleaningServicesPage = () => {
    const requestService = () => window.location.href="/services#send-a-request"

    cl.responsive()

    return (
        <div className="cleaning-services-container">
            <Hero 
                imageUrl="https://res.cloudinary.com/dynamicjson/image/upload/w_auto,c_scale/v1595322043/clean-bedroom_eyqinn.jpg"
                page="cleaning-services"
            >
                <h1>Cleaning services</h1>

                <section className="cleaning-description">
                    <h2 className="cleaning-title">We offer commercial and domestic cleaning services including: </h2>

                    <ul className="cleaning-servs-list">
                        <li>Fumigation/Pest control,</li>
                        <li>Decontamination/Disinfection,</li>
                        <li>Event cleaning,</li>
                        <li>Mobile toilet hire,</li>
                        <li>Handyman services such as painting and much more,</li>
                        <li>Cleaning and polishing of marble floors</li>
                    </ul>

                    <span 
                        className="link-button" 
                        onClick={() => requestService()}
                        role="link"
                        tabIndex={0}
                    >
                        Request a service now
                    </span>
                </section>

            </Hero>

            <section className="cleaning-gallery">
                <div className="row">
                    <img src="https://res.cloudinary.com/dynamicjson/image/upload/w_auto,c_scale/v1598563691/man-with-cleaning-equipment_vx7hnw.jpg" alt="Man holding cleaning equipment." />
                    <img src="https://res.cloudinary.com/dynamicjson/image/upload/w_auto,c_scale/v1598470036/man-painting-wall_wfvefz.jpg" alt="Man painting wall." />
                    <img src="https://res.cloudinary.com/dynamicjson/image/upload/w_auto,c_scale/v1598559914/marble-floor_upgc1s.jpg" alt="Marble floor" />
                    <img src="https://res.cloudinary.com/dynamicjson/image/upload/w_auto,c_scale/v1598470587/fumigation_i6brsf.jpg" alt="Person fumigating a house." />
                </div>

                <div className="row">
                    <img src="https://res.cloudinary.com/dynamicjson/image/upload/w_auto,c_scale/v1598530451/portable-toilets_w6vxs7.jpg" alt="Portable toilets" />
                    <img src="https://res.cloudinary.com/dynamicjson/image/upload/w_auto,c_scale/v1598560425/clean-chairs-tables_zpbdwg.jpg" alt="Clean arranged chairs and tables." />
                    <img src="https://res.cloudinary.com/dynamicjson/image/upload/w_auto,c_scale/v1598562585/clean-event-venue_anpjdq.jpg" alt="Clean event venue" />
                    <img src="https://res.cloudinary.com/dynamicjson/image/upload/w_auto,c_scale/v1598563181/pest-control_km9yf1.jpg" alt="Pest control" />
                </div>
            </section>
        </div>
    )
}

export default CleaningServicesPage
