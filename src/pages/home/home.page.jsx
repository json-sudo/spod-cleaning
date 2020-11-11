import React from 'react'
import { Link } from 'react-router-dom'
import cloudinary from 'cloudinary-core'

import CarouselComponent from '../../components/carousel/carousel.component'

import './home.styles.scss'

const cl = cloudinary.Cloudinary.new({ cloud_name: 'dynamicjson' })

const HomePage = () => {
    cl.responsive()

    return (
        <div className="homepage-container">
            <CarouselComponent>
                <div>
                    <picture>
                        <source srcSet="https://res.cloudinary.com/dynamicjson/image/upload/w_auto,q_20,c_scale/v1600003834/empty-indoor-corridor_d8a7cj.webp" type="image/webp"/>

                        <img 
                            src="https://res.cloudinary.com/dynamicjson/image/upload/w_auto,q_20,c_scale/v1600003834/empty-indoor-corridor_d8a7cj.jpg" 
                            alt="Clean empty indoor corridor."
                        />
                    </picture>
                </div>

                <div>
                    <picture>
                        <source srcSet="https://res.cloudinary.com/dynamicjson/image/upload/c_scale,q_20,w_auto/v1598094088/cooling-towers_gb7p6j.webp" type="image/webp"/>

                        <img 
                            src="https://res.cloudinary.com/dynamicjson/image/upload/c_scale,q_20,w_auto/v1598094088/cooling-towers_gb7p6j.jpg" 
                            alt="Cooling towers."
                        />
                    </picture>
                </div>

                <div>
                    <picture>
                        <source srcSet="https://res.cloudinary.com/dynamicjson/image/upload/c_scale,q_20,w_auto/v1599406254/electric-winch_mmjimb.webp" type="image/webp"/>
                        
                        <img 
                            src="https://res.cloudinary.com/dynamicjson/image/upload/c_scale,q_20,w_auto/v1599406254/electric-winch_mmjimb.jpg" 
                            alt="Winch." 
                        />
                    </picture>
                </div>

                <div>
                    <picture>
                        <source srcSet="https://res.cloudinary.com/dynamicjson/image/upload/c_scale,q_20,w_auto/v1595271687/publid-toilet_j7sy9j.webp" type="image/webp"/>

                        <img 
                            src="https://res.cloudinary.com/dynamicjson/image/upload/c_scale,q_20,w_auto/v1595271687/publid-toilet_j7sy9j.jpg" 
                            alt="Clean public toilet"
                        />
                    </picture>
                </div>

                <div>
                    <picture>
                        <source srcSet="https://res.cloudinary.com/dynamicjson/image/upload/c_scale,q_20,w_auto/v1595271956/condo-lobby_tkbebu.webp" type="image/webp"/>

                        <img 
                            src="https://res.cloudinary.com/dynamicjson/image/upload/c_scale,q_20,w_auto/v1595271956/condo-lobby_tkbebu.jpg" 
                            alt="Clean empty lobby of a condo"
                        />
                    </picture>
                </div>
            </CarouselComponent>

            <div className="carousel-header">
                <h1>Get maximum satisfaction with minimum cost.</h1>

                <Link to="/about-us" className="link-button">Get Started</Link>
            </div>

            <div className="info-container">
                <section className="info-wrapper">
                    <h2 className="info-wrapper-title">Experience quality, <br /> reliable service.</h2>

                    <p className="info-wrapper-text">
                        Spod Integrated Nigeria Limited is Nigeria's privately owned cleaning
                        company with years of experience in the corporate cleaning industry.
                        Our services are available for several sectors in oil &amp; gas, home renovations, event
                        cleaning, and more.
                    </p>
                </section>

                <div className="feedback-img-wrapper">
                    <img 
                        src="https://res.cloudinary.com/dynamicjson/image/upload/c_scale,q_30,w_auto/v1598561773/thumbs-up_fd7jmq.png" 
                        alt="Happy woman giving thumbs up" 
                    />
                </div>
            </div>

            <div className="services-container">
                <h2 className="services-container-title">Our Major Services</h2>

                <section className="services-wrapper">
                    <div className="service">
                        <div className="service-img-wrapper">
                            <picture>
                                <source srcSet="https://res.cloudinary.com/dynamicjson/image/upload/c_scale,q_20,w_auto/v1596126977/cleaning_equipment_sasry0.webp" type="image/webp"/>

                                <img 
                                    className="service-image" 
                                    src="https://res.cloudinary.com/dynamicjson/image/upload/c_scale,q_20,w_auto/v1596126977/cleaning_equipment_sasry0.jpg" 
                                    alt="Industrial janitor equipment."
                                />
                            </picture>
                        </div>

                        <div className="service-description">
                            <h3 className="service-title">Commercial Cleaning</h3>
                            <Link className="link-button" to="/cleaning-services">Learn More</Link>
                        </div>
                    </div>

                    <div className="service">
                        <div className="service-img-wrapper">
                            <picture>
                                <source srcSet="https://res.cloudinary.com/dynamicjson/image/upload/c_scale,q_20,w_auto/v1596140434/domestic-cleaning_hkgjhg.webp" type="image/webp"/>

                                <img 
                                    className="service-image" 
                                    src="https://res.cloudinary.com/dynamicjson/image/upload/c_scale,q_20,w_auto/v1596140434/domestic-cleaning_hkgjhg.jpg" 
                                    alt="A mop bucket with cleaning materials"
                                />
                            </picture>
                        </div>

                        <div className="service-description">
                            <h3 className="service-title">Domestic Cleaning</h3>
                            <Link className="link-button" to="/cleaning-services">Learn More</Link>
                        </div>
                    </div>

                    <div className="service">
                        <div className="service-img-wrapper">
                            <picture>
                                <source srcSet="https://res.cloudinary.com/dynamicjson/image/upload/c_scale,q_20,w_auto/v1596138512/fork-lift-truck_a4dkja.webp" type="image/webp"/>

                                <img 
                                    className="service-image" 
                                    src="https://res.cloudinary.com/dynamicjson/image/upload/c_scale,q_20,w_auto/v1596138512/fork-lift-truck_a4dkja.jpg" 
                                    alt="Parked fork lift."
                                />
                            </picture>
                        </div>

                        <div className="service-description">
                            <h3 className="service-title">Equipment Rentals</h3>
                            <Link className="link-button" to="/equipment-rentals">Learn More</Link>
                        </div>
                    </div>

                    <div className="service">
                        <div className="service-img-wrapper">
                            <picture>
                                <source srcSet="https://res.cloudinary.com/dynamicjson/image/upload/c_scale,q_20,w_auto/v1596288594/oil-2339939_1280_fypjsw.webp" type="image/webp"/>

                                <img 
                                    className="service-image" 
                                    src="https://res.cloudinary.com/dynamicjson/image/upload/c_scale,q_20,w_auto/v1596288594/oil-2339939_1280_fypjsw.jpg" 
                                    alt="Industrial oil."
                                />
                            </picture>
                        </div>

                        <div className="service-description">
                            <h3 className="service-title">Chemical Sales</h3>
                            <Link className="link-button" to="/chemical-sales">Learn More</Link>
                        </div>
                    </div>
                </section>
            </div>

            <div className="branding-container">
                <section className="branding-wrapper">
                    <h2 className="branding-wrapper-title">Quality Staff</h2>

                    <div className="branding">
                        <picture>
                            <source srcSet="https://res.cloudinary.com/dynamicjson/image/upload/c_scale,q_20,w_auto/v1595532246/man-cleaning_uf5sxn.webp" type="image/webp"/>

                            <img
                                src="https://res.cloudinary.com/dynamicjson/image/upload/c_scale,q_20,w_auto/v1595532246/man-cleaning_uf5sxn.jpg"
                                alt="Man cleaning with proper protective gear on."
                            />
                        </picture>

                        <p className="branding-wrapper-text">
                            Quality service begins with quality people. <br /><br />
                            Each Spod® operator receives extensive, 
                            ongoing training in product 
                            and equipment usage, cleaning & maintenance methodologies, safety procedures, 
                            and customer relations. <br /><br />
                            You can count on prompt and courteous attention.<br /><br />

                            <Link className="link-button" to="/services#send-a-request">Request a service now!</Link>
                        </p>
                    </div>
                </section>
            </div>

            <div className="writeup-container">
                <section className="writeup-wrapper">
                    <h2 className="writeup-title">Why Spod?</h2>
                    
                    <div className="writeup">
                        <p>
                            We are consistently minimizing your cost through introduction of 
                            commercial principles with greater attention to your satisfaction.
                        </p>

                        <p>
                            We are committed to offering you the most innovative equipment and
                            distinctive services in the industry. 
                        </p>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default HomePage
