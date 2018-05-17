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
    className,
    ...props
}) => {
    return (
        <label className="label">
            {`${label}`}
            {required && '*'}
            <textarea
                className={`textarea ${!!className ? className : ''}`}
                autoFocus={autoFocus}
                autoComplete={autoComplete}
                required={required}
                cols={cols}
                rows={rows}
                {...props}
            />
            {!!error && <span className="error">{error}</span>}
        </label>
    );
};

export default TextArea;
