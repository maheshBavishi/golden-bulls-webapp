import React from 'react'
import styles from './input.module.scss';
export default function Input({ label, placeholder, icon }) {
    return (
        <div className={styles.input}>
            <label>
                {label}
            </label>
            <div className={styles.relativeInput}>
                <input type='text' placeholder={placeholder} />
                <div className={styles.iconAlignment}>
                    <img src={icon} alt={icon} />
                </div>
            </div>
        </div>
    )
}
