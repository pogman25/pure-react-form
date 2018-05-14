import React from 'react';
import cx from 'classnames';
const styles = require('./styles');

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
        <label className={styles.label}>
            {`${label}`}
            {required && '*'}
            <input
                className={cx(styles.input, { [className]: !!className })}
                type={type}
                autoFocus={autoFocus}
                autoComplete={autoComplete}
                required={required}
                {...props}
            />
            {!!error && <span className={styles.error}>{error}</span>}
        </label>
    );
};

export default Input;
