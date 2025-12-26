'use client'
import React from 'react'
import { motion } from 'framer-motion'
import styles from './shapingConfident.module.scss'

const BoxImage = '/assets/images/box.png'
const LearningIcon = '/assets/icons/learning.svg'
const LeftFrame = '/assets/icons/left-frame.png'

// Number of cards
const cards = Array(5).fill(null)

export default function ShapingConfident() {
    return (
        <div className={styles.shapingConfident}>
            {/* <div className={styles.leftframe}>
                <img src={LeftFrame} alt='LeftFrame' />
            </div> */}
            <div className="container-md">
                <div className={styles.grid}>
                    {/* Left Side Box with Cards */}
                    <div className={styles.griditems}>
                        {/* BOX IMAGE */}
                        <div className={styles.image}>
                            <img src={BoxImage} alt="BoxImage" />
                        </div>

                        {/* MASK AREA (INSIDE BOX) */}
                        <div className={styles.allBoxalignment}>
                            <motion.div
                                style={{ willChange: 'transform' }}
                                animate={{ y: ['0%', '-50%'] }}
                                transition={{
                                    duration: 12,
                                    ease: 'linear',
                                    repeat: Infinity,
                                }}
                            >
                                {[...cards, ...cards].map((_, index) => (
                                    <div className={styles.box} key={index}>
                                        <div className={styles.icon}>
                                            <img src={LearningIcon} alt="LearningIcon" />
                                        </div>
                                        <h4>
                                            Structured
                                            <br />
                                            Learning
                                        </h4>
                                    </div>
                                ))}
                            </motion.div>
                        </div>
                    </div>

                    {/* Right Side Text */}
                    <div className={styles.griditems}>
                        <motion.div
                            className={styles.text}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.3 }}
                            variants={{
                                hidden: {},
                                visible: {
                                    transition: { staggerChildren: 0.2 },
                                },
                            }}
                        >
                            {/* Title */}
                            <motion.h2
                                variants={{
                                    hidden: { opacity: 0, y: 20, scale: 0.98 },
                                    visible: {
                                        opacity: 1,
                                        y: 0,
                                        scale: 1,
                                        transition: { duration: 0.6, ease: 'easeOut' },
                                    },
                                }}
                            >
                                Shaping Confident
                                <br />
                                Finance Learners
                            </motion.h2>

                            {/* Paragraphs */}
                            {[
                                `Golden Bulls International Academy is committed to making high-quality financial education accessible to individuals around the world. With over seven years of industry experience, our team simplifies complex market concepts and equips learners with practical knowledge they can apply immediately.`,
                                `We combine expert guidance, structured learning, and a global community to help you trade with clarity and discipline.`,
                            ].map((text, i) => (
                                <motion.p
                                    key={i}
                                    variants={{
                                        hidden: { opacity: 0, y: 20 },
                                        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
                                    }}
                                >
                                    {text}
                                </motion.p>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    )
}
