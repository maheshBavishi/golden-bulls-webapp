import React from 'react'
import styles from './studentSay.module.scss';
const ProfileImage = '/assets/images/profile.png';
const QuoteIcon = '/assets/icons/quote.svg';
import Marquee from "react-fast-marquee";

export default function StudentSay() {
    return (
        <div className={styles.studentSay}>
            <div className='container-md'>
                <div className={styles.title}>
                    <h2>
                        What our students say
                    </h2>
                </div>
            </div>
            <div className={styles.spacingBottom}>
                <Marquee speed={50}>
                    {
                        [...Array(8)].map(() => {
                            return (
                                <div className={styles.box}>
                                    <h3>
                                        Learning with Golden Bulls Academy made investing simple to grasp. The examples were clear,
                                        engaging, and easy to use, making every lesson feel valuable.
                                    </h3>
                                    <div className={styles.profile}>
                                        <img src={ProfileImage} alt='ProfileImage' />
                                        <div>
                                            <p>
                                                Diya Sharma
                                            </p>
                                            <span>
                                                Delhi
                                            </span>
                                        </div>
                                    </div>
                                    <div className={styles.bottomIcon}>
                                        <img src={QuoteIcon} alt='QuoteIcon' />
                                    </div>
                                </div>
                            )
                        })
                    }
                </Marquee>
            </div>
            <Marquee speed={50} direction='right'>
                {
                    [...Array(8)].map(() => {
                        return (
                            <div className={styles.box}>
                                <h3>
                                    Learning with Golden Bulls Academy made investing simple to grasp. The examples were clear,
                                    engaging, and easy to use, making every lesson feel valuable.
                                </h3>
                                <div className={styles.profile}>
                                    <img src={ProfileImage} alt='ProfileImage' />
                                    <div>
                                        <p>
                                            Diya Sharma
                                        </p>
                                        <span>
                                            Delhi
                                        </span>
                                    </div>
                                </div>
                                <div className={styles.bottomIcon}>
                                    <img src={QuoteIcon} alt='QuoteIcon' />
                                </div>
                            </div>
                        )
                    })
                }
            </Marquee>
        </div>
    )
}
