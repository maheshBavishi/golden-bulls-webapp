import React from 'react'
import styles from './pagination.module.scss';
export default function Pagination() {
    return (
        <div className={styles.paginationAlignment}>
            <div className={styles.round}>Prev</div>
            <div className={styles.round}>1</div>
            <div className={styles.round}>2</div>
            <div className={styles.round}>3</div>
            <div className={styles.round}>4</div>
            <div className={styles.round}>5</div>
            <div className={styles.round}>Next</div>
        </div>
    )
}
