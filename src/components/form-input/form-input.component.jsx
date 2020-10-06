import React from 'react'

import './form-input.styles.scss'

const FormInput = ({ handleChange, label, id, rows, ...otherProps }) => {
    return (
        <div className="form-group">
            {
                otherProps.type === 'textarea' ?
                <textarea id={id} onChange={handleChange} rows={rows} {...otherProps} /> :
                <input id={id} className="form-input" onChange={handleChange} {...otherProps} />
            }
            {
                label ? (
                    <label htmlFor={id} className={`${otherProps.value ? otherProps.value.length ? 'shrink' : '' : ''} form-input-label`}>
                        {label}
                        {
                            otherProps.required ? <span>*</span> : ''
                        }
                    </label>
                )
                : null
            }
        </div>
    )
}

export default FormInput