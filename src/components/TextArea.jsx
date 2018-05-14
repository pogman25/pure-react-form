import React from 'react';
import cx from 'classnames';
const styles = require('./styles');

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
        <label className={styles.label}>
            {`${label}`}
            {required && '*'}
            <textarea
                className={cx(styles.textarea, { [className]: !!className })}
                autoFocus={autoFocus}
                autoComplete={autoComplete}
                required={required}
                cols={cols}
                rows={rows}
                {...props}
            />
            {!!error && <span className={styles.error}>{error}</span>}
        </label>
    );
};

export default TextArea;
