import React from 'react'
import cloudinary from 'cloudinary-core'

import './about-us.styles.scss'

const AboutUsPage = () => {
    const cl = cloudinary.Cloudinary.new({ cloud_name: 'dynamicjson' })

    cl.responsive()

    return (
        <div className="about-us-container">
            <div id="about-us">
                <div className="overlay" />
                <img src="https://res.cloudinary.com/dynamicjson/image/upload/w_auto,q_30,c_scale/v1599568046/oil-refinery_mr9jj3.jpg" alt="Cooling towers"/>
                <h1 className="about-title">About us</h1>
            </div>

            <main className="about-main-container">
                <section className="who-container">
                    <div className="slant-bg" />

                    <h2 className="about-desc-title">Who we are</h2>
                    
                    <p className="about-description">
                        Spod Integrated Nigeria Limited is a fully Nigerian company incorporated under the Nigerian law 
                        and has its head office at No 2 Command Estate off Okporo Road, Rumuodara, 
                        Port Harcourt, Rivers State, Nigeria. Our branch office is at No 10 
                        Ayo Babatunde Crescent, Oniru Market Lekki Phase 1, Lagos and Block E6, Flat 1, FCDA 
                        Quarters, Kubwa, Abuja FCT.
                    </p>
                </section>

                <section className="statement-container">
                    <div className="vision-container statement">
                        <h2 className="about-desc-title">Our vision</h2>
                        
                        <p className="about-description">To be the leading indigenous service provider in Nigeria</p>
                    </div>

                    <div className="vision-container statement">
                        <h2 className="about-desc-title">Our mission</h2>

                        <p className="about-description">To be Customer focused and offer excellent services with integrity and true professionalism </p>
                    </div>
                    <div className="vision-container statement">
                        <h2 className="about-desc-title">Core values</h2>

                        <ul className="about-description">
                            <li>Integrity</li>
                            <li>Leadership</li>
                            <li>Teamwork</li>
                            <li>Customer focus</li>
                            <li>Innovation</li>
                        </ul>
                    </div>
                </section>
            </main>

            <section className="about-other-container">
                <div className="other-wrapper">
                    <h2 className="about-desc-title">Our capabilities</h2>

                    <p className="about-description">
                        <b style={{ color: '#000' }}>
                            The company is reputable for service <br /> delivery in the following major areas:
                        </b>

                        <br/>
                        <br/>

                        <ul>
                            <li>Cleaning services</li>
                            <li>Equipment rentals</li>
                            <li>Sales of industrial chemicals</li>
                            <li>Local &amp; foreign procurement</li>
                        </ul>
                    </p>
                </div>

                <div className="other-wrapper">
                    <h2 className="about-desc-title">Cleaning services</h2>
                    <ul className="about-description">
                        <li>Janitorial cleaning services</li>
                        <li>Hospital and hotel cleaning</li>
                        <li>Window and curtain wall cleaning</li>
                        <li>Wall washing</li>
                        <li>Acoustic cleaning</li>
                        <li>Pressure cleaning</li>
                        <li>Binds cleaning</li>
                        <li>Degreasing</li>
                        <li>Fumigation / Pest control</li>
                        <li>Honing / Restoration of marble and granite floors</li>
                        <li>Steam cleaning of carpets and upholstery</li>
                        <li>Furnishing of floors (terazzo, palladian, parquet)</li>
                        <li>Initial cleaning of new and rennovated buildings</li>
                        <li>and more</li>
                    </ul>
                </div>

                <div className="other-wrapper">
                    <h2 className="about-desc-title">Sales of chemicals</h2>
                    <ul className="about-description">
                        <li>Drilling chemical</li>
                        <li>Production chemicals</li>
                        <li>Completion chemicals</li>
                    </ul>
                </div>
            </section>
        </div>
    )
}

export default AboutUsPage
