import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Transition } from 'react-transition-group'

import { AppContext } from '../../App'

import Backdrop from '../backdrop/backdrop.component'

import './drawer.styles.scss'

const DrawerComponent = () => {
    const context = useContext(AppContext)

    const drawerIsOpen = context.drawerClickHandler.get

    const closeDrawer = () => context.drawerClickHandler.set(!drawerIsOpen)

    const requestService = () => window.location.href="/services#send-a-request"

    let backdrop;

    backdrop = drawerIsOpen ? <Backdrop clickHandler={closeDrawer} /> : ''

    return (
        <>
            {backdrop}

            <Transition in={drawerIsOpen} timeout={300}>
                {
                    state => (
                        <div className={`drawer-container drawer-container-${state}`}>
                            <header className="drawer-header">
                                <span>Spod Integrated</span>

                                <button
                                    className="close-btn"
                                    aria-label="Close navigation drawer"
                                    onClick={() => closeDrawer()}
                                >
                                    &times;
                                </button>
                            </header>

                            <nav>
                                <ul className="drawer-nav">
                                    <li onClick={() => closeDrawer()}><Link to="/">Home</Link></li>
                                    <li onClick={() => closeDrawer()}><Link to="/services">Services</Link></li>
                                    <li onClick={() => closeDrawer()}><Link to="/about-us">About Us</Link></li>
                                    <li onClick={() => closeDrawer()}><Link to="/contact-us">Contact Us</Link></li>
                                </ul>
                            </nav>

                            <hr />

                            <nav>
                                <ul className="drawer-nav">
                                    <li onClick={() => closeDrawer()}>
                                        <span
                                            onClick={() => requestService()}
                                            role="link"
                                            tabIndex={0}
                                        >
                                            Request a service now
                                        </span>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    )
                }
            </Transition>
        </>
    )
}

export default DrawerComponent
