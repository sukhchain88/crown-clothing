import React from 'react'
import './froms-input.style.scss'

const FormInput = ({ label, ...otherProps }) => {
    return (
        <div className="group">
            <input className="from-input" {...otherProps} />
            {label && (
                <label className={`${otherProps.value.length ? 'shrink' : ''} form-input-label`} >{label}</label>
            )
            }
        </div>
    )
}

export default FormInput