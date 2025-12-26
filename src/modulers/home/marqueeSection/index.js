import React from 'react'
import styles from './marqueeSection.module.scss';
import StarBlackIcon from '@/icons/starBlackIcon';
import Marquee from "react-fast-marquee";

export default function MarqueeSection() {
    return (
        <div className={styles.marqueeSection}>
            <Marquee>
                {
                    [...Array(15)].map(() => {
                        return (
                            <div className={styles.icontext}>
                                <StarBlackIcon />
                                <span>
                                    Daily Live Market Analysis
                                </span>
                            </div>
                        )
                    })
                }
            </Marquee>
        </div>
    )
}
