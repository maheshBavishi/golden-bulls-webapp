import React from 'react'
import styles from './button.module.scss';
import classNames from 'classnames';
export default function Button({ text , className }) {
    return (
        <div className={ classNames(styles.button , className ) }>
            <button aria-label={text}>{text}</button>
        </div>
    )
}
