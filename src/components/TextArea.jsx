import React from 'react';

const TextArea = ({
    type = 'text',
    autoFocus = false,
    autoComplete = 'off',
    label,
    required = false,
    error = '',
    cols = 6,
    rows = 5,
    ...props
}) => {
    return (
        <label>
            {`${label}`}
            {required && '*'}
            <textarea
                autoFocus={autoFocus}
                autoComplete={autoComplete}
                required={required}
                cols={cols}
                rows={rows}
                {...props}
            />
            {!!error && <span>{error}</span>}
        </label>
    );
};

export default TextArea;
