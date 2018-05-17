import React from 'react';

const Input = ({
    type = 'text',
    autoFocus = false,
    autoComplete = 'off',
    label,
    required = false,
    error = '',
    className,
    ...props
}) => {
    return (
        <label className="label">
            {`${label}`}
            {required && '*'}
            <input
                className={`input ${!!className ? className : ''}`}
                type={type}
                autoFocus={autoFocus}
                autoComplete={autoComplete}
                required={required}
                {...props}
            />
            {!!error && <span className="error">{error}</span>}
        </label>
    );
};

export default Input;
