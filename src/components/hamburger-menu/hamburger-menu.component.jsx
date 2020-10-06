import React, { useContext } from 'react'

import { AppContext } from '../../App'

import './hamburger-menu.styles.scss'

const HamburgerMenu = () => {
    const context = useContext(AppContext),
          drawerIsOpen = context.drawerClickHandler.get;
    
    return (
        <button className="hamburger-menu" onClick={() => context.drawerClickHandler.set(!drawerIsOpen)}>
            <span className="burger-line" />
            <span className="burger-line" />
            <span className="burger-line" />

            <span className="visually-hidden">Open the site's navigation links.</span>
        </button>
    )
}

export default HamburgerMenu