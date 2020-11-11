import React from 'react'
import { Link } from 'react-router-dom'
import FacebookIcon from '../../assets/svg-components/facebook.icon'

import InstagramIcon from '../../assets/svg-components/instagram.icon'
import TwitterIcon from '../../assets/svg-components/twitter.icon'

import './footer.styles.scss'

const Footer = () => {
    const requestService = () => window.location.href="/services#send-a-request"

    return (
        <footer className="main-footer">
            <div className="footer-main-links">
                <nav className="link-group">
                    <header className="link-group-header">Our Services</header>

                    <Link to="/chemical-sales">Chemical sales</Link>
                    <Link to="/cleaning-services">Commercial cleaning</Link>
                    <Link to="/cleaning-services">Domestic cleaning</Link>
                    <Link to="/equipment-rentals">Equipment rentals</Link>
                </nav>

                <nav className="link-group">
                    <header className="link-group-header">Navigation</header>

                    <Link to="/">Home</Link>
                    <Link to="/about-us">About us</Link>
                    <Link to="/contact-us">Contact us</Link>
                    <Link to="/services">Services</Link>
                </nav>

                <nav className="link-group">
                    <header className="link-group-header">Contact info</header>

                    <a 
                        href="mailto:info@spodintegrated-nigerialimited.com"
                        rel="noopener noreferrer" 
                        target="_blank"
                    >
                        info@spodintegrated-nigerialimited.com
                    </a>
                    <span>+2348034547156, +2347041136828</span>
                    <span>2 Command Estate Off Okporo, Rumuodara, Port Harcourt</span>
                </nav>

                <nav className="link-group">
                    <header className="link-group-header">Our Socials</header>

                    <a
                        href="https://twitter.com/SpodLtd"
                        rel="noopener noreferrer"
                        target="_blank"
                    >
                        <TwitterIcon id="twitter-icon" title="Connect with us on Twitter"/>
                    </a>

                    <a
                        href="https://www.instagram.com/leesi.isaiah/"
                        rel="noopener noreferrer"
                        target="_blank"
                    >
                        <InstagramIcon title="Connect with us on Instagram" />
                    </a>

                    <a
                        href="https://www.facebook.com/spinltd"
                        rel="noopener noreferrer"
                        target="_blank"
                    >
                        <FacebookIcon title="Connect with us on facebook" />
                    </a>
                    <span 
                        className="link-button" 
                        onClick={() => requestService()}
                        role="link"
                        tabIndex={0}
                    >
                        Request service
                    </span>
                </nav>
            </div>

            <hr className="footer-division"/>

            <div className="footer-rights">
                <span>&copy; Spod Integrated Nigeria Limited</span>
            </div>
        </footer>
    )
}

export default Footer
