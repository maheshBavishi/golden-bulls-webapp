import React from 'react'
import styles from './input.module.scss';
import classNames from 'classnames';
export default function Input({ label, placeholder, smallInput , icon, type = 'text', error, onIconClick, ...rest }) {
    return (
        <div className={ classNames(styles.input , smallInput ? styles.inputChange : "") }>
            <label>
                {label}
            </label>
            <div className={styles.relativeInput}>
                <input type={type} placeholder={placeholder} {...rest} />
                {icon && (
                    <div className={styles.iconAlignment} onClick={onIconClick} style={{ cursor: onIconClick ? 'pointer' : 'default' }}>
                        <img src={icon} alt={icon} />
                    </div>
                )}
            </div>
            {error && <span style={{ color: '#ff4d4f', fontSize: '12px', marginTop: '4px', display: 'block' }}>{error}</span>}
        </div>
    )
}
