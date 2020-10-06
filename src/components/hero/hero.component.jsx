import React from 'react'

import './hero.styles.scss'

const Hero = ({ imageUrl, children, page,...otherProps }) => {
    return (
        <div
            style={{backgroundImage: `linear-gradient(89deg, rgba(0,0,0, 0.5), rgba(0,0,0, 0.4)), url(${imageUrl})`}}
            id={page}
            {...otherProps}
            className="hero cld-reponsive"
        >
            {children}
        </div>
    )
}

export default Hero
