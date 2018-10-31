import React from 'react'

const RenderField = ({ input, label, type, meta: { touched, error } }) => (
    <div>
        <label>{label}</label>
        <br></br>
        <div>
            <input {...input} placeholder={label} type={type} />
            {touched && error && <span>{error}</span>}
        </div>
    </div>
);

export default RenderField;