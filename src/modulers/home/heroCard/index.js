'use client'
import React from 'react'
import { motion } from 'framer-motion'
import styles from './heroCard.module.scss'

const containerVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.2, // one by one
        },
    },
}

const cardVariants = {
    hidden: {
        opacity: 0,
        y: 30,
        scale: 0.95,
    },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            duration: 0.6,
            ease: 'easeOut',
        },
    },
}

export default function HeroCard() {
    return (
        <div className={styles.heroCardAlignment}>
            <div className="container-md">
                <motion.div
                    className={styles.grid}
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                >
                    {[
                        { title: '5,000+', text: 'Active Learners' },
                        { title: '98%', text: 'Course Rating' },
                        { title: '10,000+', text: 'Chart Analysis Shared' },
                        { title: '300+', text: 'Downloadable Resources' },
                    ].map((item, index) => (
                        <motion.div
                            key={index}
                            className={styles.griditems}
                            variants={cardVariants}
                        >
                            <h3>{item.title}</h3>
                            <p>{item.text}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </div>
    )
}
