import React from 'react';

const Input = ({
    type = 'text',
    autoFocus = false,
    autoComplete = 'off',
    label,
    required = false,
    error = '',
    ...props
}) => {
    return (
        <label>
            {`${label}`}
            {required && '*'}
            <input
                type={type}
                autoFocus={autoFocus}
                autoComplete={autoComplete}
                required={required}
                {...props}
            />
            {!!error && <span>{error}</span>}
        </label>
    );
};

export default Input;
