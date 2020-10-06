import React from 'react'

import './custom-button.styles.scss'

const Button = ({ primary, secondary, transparent, children, ...otherProps }) => {
    return (
        <button 
            className={`customButton ${primary ? 'primary' : secondary ? 'secondary' : transparent ? 'transparent' : ''}`}
            {...otherProps}
        >
            {children}
        </button>
    )
}

export default Button