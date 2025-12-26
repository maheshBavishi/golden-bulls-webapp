import React from 'react'
import styles from './whoWeAre.module.scss';
export default function WhoWeAre() {
    return (
        <div className={styles.whoWeAreAlignment}>
            <div className='container-md'>
                <div className={styles.grid}>
                    <div className={styles.griditems}>
                        <div className={styles.text}>
                            <h2>
                                who we are
                            </h2>
                            <p>
                                We are a team of passionate market educators committed to simplifying the world of trading and investing through structured, easy-to-understand education. Our platform was built with one goal in mind —
                                to make financial knowledge accessible, practical, and honest for learners at every stage of their journey.
                            </p>
                            <p>
                                At our core, we believe that successful trading starts with strong foundations, discipline, and the right mindset. That’s why our courses are designed to focus on skill-building rather than shortcuts, speculation, or unrealistic
                                promises. We don’t teach hype — we teach process, clarity, and consistency.
                            </p>
                        </div>
                    </div>
                    <div className={styles.griditems}></div>
                    <div className={styles.griditems}>
                        <div className={styles.box}>
                            <h3>
                                our mission
                            </h3>
                            <p>
                                Our mission is to make financial and trading education simple, practical, and accessible for everyone. We aim to break down complex market concepts
                                into easy-to-understand lessons that help learners build strong foundations.
                            </p>
                        </div>
                        <div className={styles.box}>
                            <h3>
                                our vision
                            </h3>
                            <p>
                                Our vision is to become a trusted global platform for trading education by empowering individuals with high-quality learning resources
                                and practical guidance. We strive to build a strong learning community.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
